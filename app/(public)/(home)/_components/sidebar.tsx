'use client'

import { AnimatePresence, motion } from 'framer-motion'
import Link from 'next/link'
import React from 'react'

import { useMenuStore } from '~/src/store/menuStore'

export function Sidebar() {
  const { isOpen, closeMenu } = useMenuStore()

  return (
    <AnimatePresence>
      {isOpen && (
        <div className='fixed inset-0 z-120' onClick={closeMenu}>
          <motion.div
            className='absolute flex flex-col h-full justify-between right-0 top-0 w-full sm:w-80 w-full bg-[#313945] h-full pt-30 pb-10 px-15'
            initial={{ x: 320 }}
            animate={{ x: 0 }}
            exit={{ x: 320}}
            transition={{ duration: 0.3 }}
            onClick={(e) => e.stopPropagation()}
          >
            <img
              className='absolute top-3 left-4 block sm:hidden'
              src="/images/svg/logo-invert.svg"
              alt="cross icon"
              onClick={closeMenu}
            />
            <img
              className='absolute top-5 sm:top-14 right-6 sm:right-11 cursor-pointer'
              src="/images/svg/cross.svg"
              alt="cross icon"
              onClick={closeMenu}
            />
            <nav>
              <ul className="flex flex-col gap-6 --font-heading uppercase text-[18px] font-bold text-[#FFFFFF] text-center tracking-[1px]">
                <li className="pb-6 border-b border-b-1 border-[#1D2228] cursor-pointer"
                  onClick={() => {
                    closeMenu()
                    document.getElementById('menu')?.scrollIntoView({ behavior: "smooth" })}
                  }
                >Меню</li>
                <li className="pb-6 border-b border-b-1 border-[#1D2228] cursor-pointer"
                  onClick={() => {
                    closeMenu()
                    document.getElementById('about')?.scrollIntoView({ behavior: "smooth" })}
                  }
                >О нас</li>
                <li className="cursor-pointer"
                  onClick={() => {
                    closeMenu()
                    document.getElementById('footer')?.scrollIntoView({ behavior: "smooth" })}
                  }
                >Контакты</li>
              </ul>
            </nav>
            <div className="text-center">
              <p className="text-[#A8B0BC] text-[12px] uppercase">Заказать по телефону</p>
              <Link className="--font-heading text-[#fff] text-[24px] uppercase" href="">+7 (918) 432-65-87</Link>
              <p className="text-[#A8B0BC] text-[12px]">Ежедневно с 9:00 до 23:00</p>
              <p className="block sm:hidden mt-10 --font-heading text-[#fff] text-[12px] font-bold uppercase">English</p>
            </div>
          </motion.div>
        </div>
      )}
    </AnimatePresence>
  )
}