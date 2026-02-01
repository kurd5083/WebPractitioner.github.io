'use client'

import { useState, useEffect } from 'react'
import { pizzas } from '~/src/utils/pizzas'
import { motion } from 'framer-motion'
import { usePopupStore } from '~/src/store/popupStore'

import AllIcon from '~/src/icons/AllIcon'
import SharpIcon from '~/src/icons/SharpIcon'
import MeatIcon from '~/src/icons/MeatIcon'
import CheesyIcon from '~/src/icons/CheesyIcon'
import VeganIcon from '~/src/icons/VeganIcon'

type Order = {
    id: number,
    name: string,
    size: number,
    price: number,
    img: string,
    category: string[],
    quantity: number 
}

type SelectedSize = {
    size: number,
    price: number
}

export function Menu() {
    const { popup, addOrder } = usePopupStore()
    const [isMobile, setIsMobile] = useState<boolean | null>(null);

    useEffect(() => {
        const checkWidth = () => setIsMobile(window.innerWidth < 640);
        checkWidth();
        window.addEventListener("resize", checkWidth);
        return () => window.removeEventListener("resize", checkWidth);
    }, []);

    const initialSizes = pizzas.reduce<{ [key: number]: SelectedSize }>((acc, pizza) => {
        acc[pizza.id] = { size: 30, price: pizza.sizes[30] };
        return acc;
    }, {});

    const [selectedSizes, setSelectedSizes] = useState(initialSizes);
    const [selectedFilter, setSelectedFilter] = useState("all");
    const [hoverFilter, setHoverFilter] = useState<string | null>(null);
    const [pendingBtn, setPendingBtn] = useState<{ [key: number]: boolean }>({});

    const changeFilter = (filter: string) => {
        setSelectedFilter(filter)
    }
    const handleOrder = (order: Order) => {
        addOrder(order)
        setPendingBtn({ [order.id]: true })
        setTimeout(() => {
            setPendingBtn({ [order.id]: false })
        }, 1000);
    }
    const filteredPizzas = selectedFilter === "all"
        ? pizzas
        : pizzas.filter(pizza => pizza.category.includes(selectedFilter))

    const filters = [
        { key: "all", label: "Все", icon: (color: string) => <AllIcon color={color} /> },
        { key: "Острые", label: "Острые", icon: (color: string) => <SharpIcon color={color} /> },
        { key: "Мясные", label: "Мясные", icon: (color: string) => <MeatIcon color={color} /> },
        { key: "Сырные", label: "Сырные", icon: (color: string) => <CheesyIcon color={color} /> },
        { key: "Веганские", label: "Веганские", icon: (color: string) => <VeganIcon color={color} /> },
    ]

    return (
        <section id="menu" className="flex flex-col items-center max-w-[1350px] w-full px-4 sm:px-8 mt-15 sm:mt-20 lg:mt-28">
            <h2 className="--font-heading text-[28px] sm:text-[40px] lg:text-[52px] font-black tracking-[1px]">Выберите пиццу</h2>
            <nav className="mt-6 sm:mt-5 lg:mt-14">
                <ul className="flex gap-x-10 --font-heading uppercase text-[18px] font-black tracking-[1px]">
                    {filters.map(filter => (
                        <li
                            key={filter.key}
                            className={`relative ${selectedFilter === filter.key ? 'text-[#E52D2D]' : ''} hover:text-[#E52D2D] cursor-pointer`}
                            onClick={() => changeFilter(filter.key)}
                            onMouseEnter={() => setHoverFilter(filter.key)}
                            onMouseLeave={() => setHoverFilter(null)}
                        >
                            {(hoverFilter === filter.key || isMobile) && (
                                <motion.div
                                    className="sm:!absolute sm:left-1/2 sm:-translate-x-1/2"
                                    initial={{ opacity: 0, top: 0 }}
                                    animate={{ opacity: 1, top: -28 }}
                                    transition={{ duration: 0.3 }}
                                >
                                    {filter.icon(selectedFilter === filter.key ? "#E52D2D" : "#C5CBD1")}
                                </motion.div>
                            )}
                            <p className="hidden sm:block">{filter.label}</p>
                        </li>
                    ))}
                </ul>
            </nav>
            <div className="w-full grid gap-8 sm:grid-cols-[repeat(auto-fit,minmax(235px,1fr))] mt-10">
                {filteredPizzas.map((pizza, index) => (
                    <article
                        className={`
                            relative flex sm:items-center sm:flex-col pt-3 sm:pt-5 px-3 sm:px-8 pb-6 sm:pb-10 shadow overflow-hidden
                            hover:shadow-lg transition-shadow duration-300 group gap-3 sm:gap-0
                        `}
                        key={`${pizza.id}-${index}`}
                    >
                        <div className="absolute left-2 sm:left-4 top-2 sm:top-4 lg:hidden group-hover:flex flex-col gap-2 ">
                            {pizza.category.includes("Острые") && <SharpIcon width={isMobile ? 12 : 24}  height={isMobile ? 12 : 24}/>}
                            {pizza.category.includes("Мясные") && <MeatIcon width={isMobile ? 12 : 24}  height={isMobile ? 12 : 24} />}
                            {pizza.category.includes("Сырные") && <CheesyIcon width={isMobile ? 12 : 24}  height={isMobile ? 12 : 24} />}
                            {pizza.category.includes("Веганские") && <VeganIcon width={isMobile ? 12 : 24}  height={isMobile ? 12 : 24} />}
                        </div>

                        <div className="relative flex items-center justify-center w-26 h-26 sm:w-50 sm:h-50 before:content-[''] before:absolute before:top-0 before:left-0 before:w-full before:h-full before:border before:border-dashed before:rounded-full after:content-[''] after:absolute after:top-2 after:sm:top-4 after:left-2 after:sm:left-4 after:w-22 after:sm:w-42 after:h-22 after:sm:h-42 after:border after:border-dashed after:rounded-full">
                            <motion.img
                                key={selectedSizes[pizza.id]?.size}
                                initial={{ opacity: 0, x: isMobile ? -80 : -180, rotate: -180 }}
                                transition={{ duration: 1, ease: 'easeInOut' }}
                                whileInView={{ opacity: 1, x: 0, rotate: 0 }}
                                className={`relative z-10 ${selectedSizes[pizza.id]?.size == 20 ? "w-19 h-19 sm:w-38 sm:h-38" : selectedSizes[pizza.id]?.size == 30 ? "w-22 h-22 sm:w-45 sm:h-45" : "w-26 h-26 sm:w-50 sm:h-50"} ml-1 mt-1 sm:ml-2 sm:mt-2  object-cover`} src={pizza.image} alt="pizza img"
                            />
                        </div>
                        <div className="flex sm:items-center flex-col flex-1">
                            <h3 className="sm:mt-5 --font-heading text-[18px] sm:text-[20px] lg:text-[24px] font-extrabold sm:text-center leading-[30px] group-hover:text-[#E52D2D] transition-colors duration-300">{pizza.name}</h3>
                            <p className="mt-1 sm:text-center text-[11px] sm:text-[12px] text-[#848A9A] flex-1">{pizza.description}</p>
                            <span className="mt-2 text-[12px]">Размер, см:</span>
                            <ul className="mt-1 w-fit flex gap-1 bg-[#EFF0F1] rounded-[4px] p-[3px]">
                                {Object.entries(pizza.sizes).map(([size, price]) => (
                                    <li
                                        key={size}
                                        className={`${selectedSizes[pizza.id]?.size === Number(size) ? 'bg-white shadow' : 'hover:bg-gray-100 text-[#82909F]'} py-[2px] px-3 sm:px-5 rounded-[2px] cursor-pointer hover:bg-gray-100 transition text-[12px] font-bold`}
                                        onClick={() => setSelectedSizes(prev => ({ ...prev, [pizza.id]: { size: Number(size), price } }))}
                                    >
                                        {size}
                                    </li>
                                ))}
                            </ul>
                            <span className="mt-3 text-[px] font-bold">от {selectedSizes[pizza.id]?.price} руб.</span>
                            <button
                                className={`
                                max-w-[196px] text-center w-full mt-3 py-2 lg:py-4  rounded-[5px] text-white --font-heading text-[16px] lg:text-[18px] font-black uppercase
                                bg-[#E52D2D] border border-transparent
                                transition-colors duration-200 ease-in-out

                                hover:bg-[#FF3C3C]
                                active:bg-[#BF221E]
                                focus:bg-[#E52D2D] focus:ring-2 focus:ring-[#8FC9FF] focus:outline-none
                                disabled:bg-[#DBDBDB] disabled:text-[#939393] disabled:border border-transparent
                            `}
                                onClick={() => handleOrder({
                                    id: pizza.id,
                                    name: pizza.name,
                                    size: selectedSizes[pizza.id]!.size,
                                    price: selectedSizes[pizza.id]!.price,
                                    img: pizza.image,
                                    category: pizza.category,
                                    quantity: 1 
                                })}
                                disabled={pendingBtn[pizza.id]}
                            >
                                {pendingBtn[pizza.id] ? "Добавлено" : "Заказать"}
                            </button>
                        </div>
                    </article>
                ))}
            </div>
        </section>
    )
}
24