'use client'

import { useState, useEffect } from 'react'
import { Swiper, SwiperSlide } from "swiper/react";
import { Pagination } from "swiper/modules";
import 'swiper/css'
import 'swiper/css/pagination'

const slides = [
    {
        img: '/images/stocks/stock-1.png',
        title: 'Закажи 2 пиццы – 3-я в подарок',
        text: 'При заказе 2-х больших пицц – средняя пицца в подарок'
    },
    {
        img: '/images/stocks/stock-2.png',
        title: 'Напиток в подарок',
        text: 'Скидка на заказ от 3 000 рублей + напиток в подарок'
    },
    {
        img: '/images/stocks/stock-3.png',
        title: '25% при первом заказе',
        text: 'Скидка новым клиентам!'
    }
]

export function Stocks() {
    const [isMobile, setIsMobile] = useState<boolean | null>(null);

    useEffect(() => {
        const checkWidth = () => setIsMobile(window.innerWidth < 640)
        checkWidth()
        window.addEventListener('resize', checkWidth)
        return () => window.removeEventListener('resize', checkWidth)
    }, [])
    if (isMobile === null) return null;

    if (isMobile) {
        return (
            <Swiper
                spaceBetween={16}
                slidesPerView={'auto'}
                grabCursor
                allowTouchMove={true}
                pagination={{ clickable: true }}
                modules={[Pagination]}
                className="!pb-8 !px-4 mt-15"
            >
                {slides.map((slide, i) => (
                    <SwiperSlide key={i} className="!w-full">
                        <article className="flex flex-col">
                            <img src={slide.img} className="rounded-[5px]" alt="stock img" />
                            <h2 className="mt-3 --font-heading text-[20px] font-extrabold">{slide.title}</h2>
                            <p className="mt-2 text-[14px]">{slide.text}</p>
                        </article>
                    </SwiperSlide>
                ))}
            </Swiper>
        )
    } else {
        return (
            <div className="flex gap-8 max-w-[1350px] w-full px-8 justify-between mt-15 sm:mt-22 lg:mt-28 xl:mt-54 2xl:mt-70">
                {slides.map((slide, i) => (
                    <article key={i} className="flex flex-col w-[30%]">
                        <img src={slide.img} className="rounded-[5px]" alt="stock img" />
                        <h2 className="mt-3 --font-heading text-[20px] lg:text-[24px] leading-[25px] lg:leading-[30px] font-extrabold">{slide.title}</h2>
                        <p className="mt-2 text-[14px]">{slide.text}</p>
                    </article>
                ))}
            </div>
        )
    }

}
