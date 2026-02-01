import React from 'react'

export function About() {
    return (
    <section id="about" className="flex flex-col items-center gap-5 sm:gap-3 lg:gap-8 w-full mt-5 sm:mt-20 lg:mt-23 px-4 sm:px-8 max-w-[900px] mx-auto">
        <div className="flex items-start sm:items-center gap-4 sm:gap-6 w-full">
            <img className="rounded-[32px] sm:rounded-[100px] lg:rounded-[130px] w-20 sm:w-63 lg:w-75" src="/images/about/about-1.png" alt="about img" />
            <div className="max-w-[420px]">
                <h3 className="--font-heading text-[20px] sm:text-[24px] lg:text-[32px] font-extrabold leading-[25px] sm:leading-[30px] lg:leading-[40px]">Изготавливаем пиццу по своим рецептам в лучших традициях</h3>
                <p className="mt-1 sm:mt-3 text-[12px] sm:text-[14px]">Наша пицца получается сочной, вкусной и главное хрустящей с нежной и аппетитной начинкой, готовим по своим итальянским рецептам</p>
            </div>
        </div>
        <div className="flex flex-row-reverse sm:flex-row items-start justify-end sm:items-center gap-4 sm:gap-6 w-full">
            <div className="max-w-[420px]">
                <h3 className="--font-heading text-[20px] sm:text-[24px] lg:text-[32px] font-extrabold leading-[25px] sm:leading-[30px] lg:leading-[40px]">Используем только свежие ингридиенты</h3>
                <p className="mt-1 sm:mt-3 text-[12px] sm:text-[14px]">Ежедневно заготавливаем продукты и овощи для наших пицц, соблюдаем все сроки хранения</p>
            </div>
            <img className="rounded-[32px] sm:rounded-[100px] lg:rounded-[130px] w-20 sm:w-63 lg:w-75" src="/images/about/about-2.png" alt="about img" />
        </div>
        <div className="flex items-start sm:items-center gap-4 sm:gap-6 w-full">
            <img className="rounded-[32px] sm:rounded-[100px] lg:rounded-[130px] w-20 sm:w-63 lg:w-75" src="/images/about/about-3.png" alt="about img" />
            <div className="max-w-[420px]">
                <h3 className="--font-heading text-[20px] sm:text-[24px] lg:text-[32px] font-extrabold leading-[25px] sm:leading-[30px] lg:leading-[40px]">Доставка в течение 60 минут или заказ за нас счёт</h3>
                <p className="mt-1 sm:mt-3 text-[12px] sm:text-[14px]">Все наши курьеры – фанаты серии Need for Speed и призеры гонок World Rally Championship и World Superbike во всех категориях</p>
            </div>
        </div>
    </section>
    )
}

export default About
