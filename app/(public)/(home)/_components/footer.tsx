'use client'
import Link from 'next/link'

export function Footer() {
    return (
        <footer id="footer" className="z-10 w-full bg-black transition-shadow duration-300">
            <div className="flex flex-col sm:flex-row gap-3 sm:gap-0 justify-between items-center max-w-[1350px] w-full mx-auto pt-6 lg:pt-8 pb-10 sm:pb-6 lg:pb-8 px-4 sm:px-8 text-white">
                <div className="flex flex-col sm:flex-row gap-6 sm:gap-0 items-center">
                    <img
                        src="/images/svg/logo-invert.svg"
                        alt="logo"
                        className="cursor-pointer w-20 sm:w-22 lg:w-30"
                        onClick={() => window.scrollTo({
                            top: 0,
                            left: 0,
                            behavior: "smooth"
                        })}
                    />
                    <Link href="tel:+79184326587" className="flex flex-col sm:ml-20 lg:ml-25 items-center sm:items-start">
                        <p className="--font-heading text-[24px] font-extrabold tracking-[1px]">+7 (918) 432-65-87</p>
                        <span className="text-[12px]">Ежедневно с 9:00 до 23:00</span>
                    </Link>
                </div>
                <Link href="/" className="text-[12px]">Политика конфиденциальности</Link>
            </div>
        </footer>
    )
}