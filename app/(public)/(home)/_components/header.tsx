'use client'
import { useState, useEffect } from 'react'
import Link from 'next/link'

import { useMenuStore } from '~/src/store/menuStore'
import { usePopupStore } from '~/src/store/popupStore'

export function Header() {
	const [scrolled, setScrolled] = useState(false)
	const { openMenu } = useMenuStore()
	const { openPopup } = usePopupStore()

	const totalQuantity = usePopupStore(state => state.quantityOrder())

	useEffect(() => {
		const handleScroll = () => {
			setScrolled(window.scrollY > 0)
		}
		window.addEventListener('scroll', handleScroll)
		return () => window.removeEventListener('scroll', handleScroll)
	}, [])

	return (
		<header className={`sticky top-0 z-90 w-full bg-white transition-shadow duration-300 ${scrolled ? 'shadow-md' : ''}`}>
			<div className="max-w-[1350px] w-full mx-auto flex justify-between items-center py-3 sm:py-8 lg:py-11 px-4 sm:px-8">
				<div className="flex items-center gap-x-22">
					<img 
						src="/images/svg/logo.svg" 
						alt="logo" 
						className="cursor-pointer w-21 sm:w-32 lg:w-45"
						onClick={() => window.scrollTo({ 
							top: 0,
							left: 0,
							behavior: "smooth" 
						})}
					/>
					<nav className="hidden xl:block">
						<ul className="flex gap-x-15 --font-heading uppercase text-[18px] font-black tracking-[1px]">
							<li
								className="hover:text-[#E52D2D] cursor-pointer "
								onClick={() => document.getElementById("menu")?.scrollIntoView({ behavior: "smooth" })}
							>Меню</li>
							<li
								className="hover:text-[#E52D2D] cursor-pointer"
								onClick={() => document.getElementById("about")?.scrollIntoView({ behavior: "smooth" })}
							>О нас</li>
							<li
								className="hover:text-[#E52D2D] cursor-pointer"
								onClick={() => document.getElementById("footer")?.scrollIntoView({ behavior: "smooth" })}
							>Контакты</li>
						</ul>
					</nav>
				</div>
				<div className="flex items-center">
					<Link href="tel:+79184326587" className="flex items-center gap-3">
						<img className="w-8 sm:w-10" src="/images/svg/telephone.svg" alt="tel icon" />
						<div className="hidden lg:flex flex-col">
							<p className="--font-heading text-[24px] font-black">+7 (918) 432-65-87</p>
							<span className="text-[#848A9A] text-[12px] font-normal">Ежедневно с 9:00 до 23:00</span>
						</div>
					</Link>  
					<div 
						className="relative flex items-center gap-3 ml-6 sm:ml-8 lg:ml-15 cursor-pointer"
					  	onClick={openPopup}
					>
						<img className="w-8 sm:w-10" src="/images/svg/cart.svg" alt="cart icon" />
						<p className="absolute flex items-center justify-center text-[11px] text-[#FFFFFF] font-bold w-5 h-5 rounded-full -top-2 bg-[#E52D2D] left-6 z-100">{totalQuantity}</p>

						<div className=" hidden lg:block">
							<p className="--font-heading text-[18px] font-black uppercase tracking-[1px] leading-[15px]">Ваш заказ</p>
							<span className="text-[#848A9A] text-[12px] font-normal leading-[15px]">Итальянская и ещё 2 пиццы</span>
						</div>
					</div>
					<span className="w-12 h-12 rounded-full bg-gray-100 hidden sm:flex flex-col items-center justify-center --font-heading text-[18px] font-black uppercase ml-17 lg:ml-10">EN</span>
					<img onClick={openMenu} className="block xl:hidden ml-7 sm:ml-8 cursor-pointer" src="/images/svg/menu.svg" alt="menu icon" />
				</div>
			</div>
		</header>
	)
}