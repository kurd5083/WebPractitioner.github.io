import React from 'react'

export function Delivery() {
    return (
        <section className="w-full mt-15 sm:mt-20 lg:mt-25 pt-6 sm:pt-10 lg:pt-10 pb-10 sm:pb-15 lg:pb-20 px-4 sm:px-8 bg-[#F8F6F3]">
            <div className="flex flex-col gap-6 max-w-[1350px] mx-auto">
                <h2 className="text-center --font-heading text-[28px] sm:text-[40px] lg:text-[52px] font-black tracking-[1px]">Доставка и оплата</h2>
                <div className="flex flex-col sm:flex-row gap-3 sm:gap-8">
                    <div className="flex flex-row sm:flex-col lg:flex-row items-start gap-3 lg:gap-6 pt-6 lg:pt-8 pb-10 lg:pb-8 px-5 lg:px-6 b bg-white rounded-[5px]">
                        <img className="w-12 h-12 sm:w-15 sm:h-15 lg:w-20 lg:h-20" src="/images/delivery/order.svg" alt="order icon" />
                        <div>
                            <h3 className="--font-heading text-[18px] text-[20px] lg:text-[24px] leading-[30px] font-extrabold">Заказ</h3>
                            <p className="mt-1 text-[12px]">После оформления заказа мы свяжемся с вами для уточнения деталей.</p>
                        </div>
                    </div>
                    <div className="flex flex-row sm:flex-col lg:flex-row items-start gap-3 lg:gap-6 pt-6 lg:pt-8 pb-10 lg:pb-8 px-5 lg:px-6 b bg-white rounded-[5px]">
                        <img className="w-12 h-12 sm:w-15 sm:h-15 lg:w-20 lg:h-20" src="/images/delivery/delivery.svg" alt="delivery icon" />
                        <div>
                            <h3 className="--font-heading text-[18px] text-[20px] lg:text-[24px] leading-[30px] font-extrabold">Доставка курьером</h3>
                            <p className="mt-1 text-[12px]">После оформления заказа мы свяжемся с вами для уточнения деталей.</p>
                        </div>
                    </div>
                    <div className="flex flex-row sm:flex-col lg:flex-row items-start gap-3 lg:gap-6 pt-6 lg:pt-8 pb-10 lg:pb-8 px-5 lg:px-6 b bg-white rounded-[5px]">
                        <img className="w-12 h-12 sm:w-15 sm:h-15 lg:w-20 lg:h-20" src="/images/delivery/pay.svg" alt="pay icon" />
                        <div>
                            <h3 className="--font-heading text-[18px] text-[20px] lg:text-[24px] leading-[30px] font-extrabold">Оплата</h3>
                            <p className="mt-1 text-[12px]">После оформления заказа мы свяжемся с вами для уточнения деталей.</p>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    )
}

export default Delivery
