'use client'
import { useState, useEffect } from 'react'

export function Instagram() {
  const images = Array.from({ length: 10 }, (_, i) => `/images/gallery/inst-${i + 1}.png`)

  const [windowWidth, setWindowWidth] = useState(0)

  useEffect(() => {
    setWindowWidth(window.innerWidth)
    const handleResize = () => setWindowWidth(window.innerWidth)
    window.addEventListener('resize', handleResize)
    return () => window.removeEventListener('resize', handleResize)
  }, [])

  return (
    <section className="flex flex-col items-center w-full mt-15 sm:mt-20 lg:mt-26 max-w-[1920px] mx-auto">
      <h2 className="--font-heading text-[28px] sm:text-[40px] lg:text-[52px] text-center font-black leading-[35px] tracking-[1px]">Следите за нами в Instagram</h2>
      <span className="mt-1 sm:mt-3 --font-heading text-[16px] sm:text-[20px] lg:text-[24px] text-[#848A9A] font-extrabold cursor-pointer">@pizzamenu</span>
      <div className="mt-5 lg:mt-12 grid grid-rows-2 grid-cols-2 sm:grid-cols-3 lg:grid-cols-5 overflow-hidden">
        {images.map((src, i) => {
          if (windowWidth < 640 && i >= 4) return null
          if (windowWidth >= 640 && windowWidth < 1024 && i >= 6) return null 
          return <img key={src} src={src} alt="inst img"/>
        })}
      </div>
    </section>
  )
}

