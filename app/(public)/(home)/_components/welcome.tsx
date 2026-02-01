'use client'
import { motion } from "framer-motion";

export function Welcome() {
    return (
        <>
            <div className="relative flex max-w-[1920px] w-full pl-4 sm:pl-8 justify-between">
                <img className="absolute right-0 sm:-right-16 lg:right-0 top-5 sm:top-10 w-75 sm:w-118 lg:w-132 xl:w-200 2xl:w-236" src="/images/welcome/bg.png" alt='welcome bg' />
                <img className="absolute right-54 sm:right-70 lg:right-100 xl:right-160 2xl:right-175 top-26 sm:top-44 lg:top-52 xl:top-80 w-25 sm:w-38 lg:w-38 xl:w-50 2xl:w-75 z-10" src="/images/welcome/leaves.png" alt='welcome leaves' />
                <motion.img
                    className="h-48 sm:h-68 lg:h-80 xl:h-130 2xl:h-150 absolute right-22 sm:right-30 lg:right-50 xl:right-60 2xl:right-75 top-3 sm:top-8 xl:top-6 2xl:top-2 z-20"
                    src="/images/welcome/pizza.png"
                    animate={{ rotate: [0, 360] }}
                    transition={{
                        rotate: { repeat: Infinity, duration: 12, ease: "linear" },
                    }}
                    alt='pizza bg'
                />
            </div>
            <section className="flex max-w-[1350px] w-full px-4 sm:px-8 justify-between">
                <div className="flex flex-col mt-55 sm:mt-80 md:mt-12 xl:mt-32 2xl:mt-39">
                    <h1 className="mb-3 --font-heading text-[40px] sm:text-[48px] lg:text-[72px] font-black tracking-[1px]">Пицца на заказ</h1>
                    <p className="max-w-[350px] lg:max-w-[440px] mb-4 sm:mb-6 lg:mb-8 text-[16px] lg:text-[24px]">Бесплатная и быстрая доставка за час в любое удобное для вас время</p>
                    <button
                        className={`
                            py-4 px-16 rounded-[5px] text-white --font-heading text-[18px] font-black uppercase
                            bg-[#E52D2D] border border-transparent
                            transition-colors duration-200 ease-in-out

                            hover:bg-[#FF3C3C]
                            active:bg-[#BF221E]
                            focus:bg-[#E52D2D] focus:ring-2 focus:ring-[#8FC9FF] focus:outline-none
                            disabled:bg-[#DBDBDB] disabled:text-[#939393] disabled:border border-transparent
                        `}
                        onClick={() => document.getElementById('menu')?.scrollIntoView({ behavior: "smooth" })}
                    >Выбрать пиццу</button>
                </div>
            </section>
        </>
    )
}
