'use client'
import { useState } from 'react'
import { motion } from 'framer-motion'

import CrossIcon from '~/src/icons/CrossIcon'
import SharpIcon from '~/src/icons/SharpIcon'
import MeatIcon from '~/src/icons/MeatIcon'
import CheesyIcon from '~/src/icons/CheesyIcon'
import VeganIcon from '~/src/icons/VeganIcon'

import { usePopupStore } from '~/src/store/popupStore'

export function Order() {
	const { popup, closePopup, delOrder, updateOrder, clearOrders } = usePopupStore()
	const totalSum = usePopupStore(state => state.sumOrder())

	const [name, setName] = useState("")
	const [phone, setPhone] = useState("")
	const [address, setAddress] = useState("")

	const [errors, setErrors] = useState({ name: "", phone: "", address: "" })

	if (!popup.isOpen) return null

	const handleSubmit = () => {
		const newErrors = { name: "", phone: "", address: "" }
		let hasError = false

		if (!/^[a-zA-Zа-яА-ЯёЁ\s]+$/.test(name)) {
			newErrors.name = "Имя должно состоять только из букв"
			hasError = true
		}

		if (!/^(\+7|8)?[\s\-]?\(?\d{3}\)?[\s\-]?\d{3}[\s\-]?\d{2}[\s\-]?\d{2}$/.test(phone)) {
			newErrors.phone = "Введите корректный номер телефона"
			hasError = true
		}

		if (!address.trim()) {
			newErrors.address = "Адрес обязателен"
			hasError = true
		}

		setErrors(newErrors)

		if (!hasError) {
			clearOrders()
			setName("")
			setPhone("")
			setAddress("")
			setErrors({ name: "", phone: "", address: "" })
		}
	}
	return (
		<div
			className="fixed inset-0 bg-[#000000e8] flex items-center justify-center z-110 "
			onClick={closePopup}
		>
			<div
				className="bg-white rounded-lg pt-4 sm:pt-8 px-4 sm:px-8 pb-6 sm:pb-10 mx-4 w-full max-w-[700px] relative max-h-[90vh] overflow-y-auto hide-scrollbar"
				onClick={(e) => e.stopPropagation()}
			>
				<div className="flex justify-between items-center border-b border-b-1 border-[#DCDFE2] pb-6">
					<h2 className="--font-heading text-[32px] sm:text-[40px] font-extrabold">Ваш заказ</h2>
					<button onClick={closePopup}>
						<CrossIcon color='#000000' width={20} height={20} />
					</button>
				</div>
				<div className="flex flex-col gap-2 mt-2">
					{popup.orders.map((item) => (
						<div className="py-2 sm:py-4 pl-2 sm:pl-3 pr-4 sm:pr-8 relative flex items-center flex-col sm:flex-row mt-2 pb-2 border-b border-b-1 border-[#DCDFE2]">
							<div className="absolute left-1 top-3 flex flex-col gap-1">
								{item.category.includes("Острые") && <SharpIcon width={12} height={12} />}
								{item.category.includes("Мясные") && <MeatIcon width={12} height={12} />}
								{item.category.includes("Сырные") && <CheesyIcon width={12} height={12} />}
								{item.category.includes("Веганские") && <VeganIcon width={12} height={12} />}
							</div>
							<div className="flex items-center flex-wrap w-full sm:w-auto">
								<div className="relative flex items-center justify-center w-26 h-26 before:content-[''] before:absolute before:top-0 before:left-0 before:w-full before:h-full before:border before:border-dashed before:rounded-full after:content-[''] after:absolute after:top-2 after:left-2 after:w-22 after:h-22 after:border after:border-dashed after:rounded-full">
									<motion.img
										key={item.size}
										initial={{ opacity: 0, x: -80, rotate: -180 }}
										transition={{ duration: 1, ease: 'easeInOut' }}
										animate={{ opacity: 1, x: 0, rotate: 0 }}
										className={`relative z-10 ${item.size == 20 ? "w-19 h-19" : item.size == 30 ? "w-22 h-22" : "w-26 h-26"} ml-1 mt-1  object-cover`} src={item.img} alt={`${item.name} пицца`}
									/>
								</div>
								<div className="ml-4">
									<h3 className="text-[18px] font-extrabold">{item.name}</h3>
									<p className="text-[12px] mt-2">{item.size} см</p>
								</div>
							</div>
							<div className="flex flex-1 justify-end mt-5 sm:m-0 w-full sm:w-auto">
								<div className="flex items-center gap-2">
									<button
										onClick={() => updateOrder(item.id, item.size, "minus")}
										className={`flex items-center justify-center w-6 h-6 rounded-full ${item.quantity === 1 ? "bg-[#EEF0F3]" : "bg-[#C5CBD5] active:bg-[#E52D2D]"}`}
										disabled={item.quantity === 1}
									>
										<img src="/images/svg/minus.svg" alt="minus icon" />
									</button>
									<p className="py-2 px-5 border-1 rounded-[4px] text-[16px]">{item.quantity}</p>
									<button
										onClick={() => updateOrder(item.id, item.size, "plus")}
										className={`flex items-center justify-center w-6 h-6 rounded-full bg-[#C5CBD5] active:bg-[#E52D2D]`}
									>
										<img src="/images/svg/plus.svg" alt="plus icon" />
									</button>
								</div>
								<p className="--font-heading text-[24px] font-extrabold min-w-35 text-right">{item.price * item.quantity} руб</p>
							</div>
							<button className="absolute right-2 top-2" onClick={() => delOrder(item.id, item.size)}>
								<CrossIcon color='#A9A9A9' width={8} height={8} />
							</button>
						</div>
					))}

				</div>
				<p className="w-full text-right --font-heading text-[18px] font-extrabold">Сумма заказа:
					<span className="ml-5 mb-4 --font-heading text-[32px] font-extrabold">{totalSum}</span> руб
				</p>
				<h4 className="mb-3 --font-heading text-[18px] font-extrabold">Контакты</h4>
				<div className="flex flex-col gap-6">
					<div className="flex flex-col sm:flex-row gap-6 sm:gap-8">
						<div className="relative w-full">
							<input
								type="text"
								id="name"
								value={name}
								onChange={(e) => setName(e.target.value)}
								placeholder=" "
								className={`
									peer w-full border border-[#C4C7CA] p-3 rounded-[4px]
									hover:border-black
									focus:border-black focus:ring-2 focus:ring-[#8FC9FF] focus:outline-none
									${errors.name ? "border-[#FB7A7A]" : "border-[#C4C7CA]"}
								`}
							/>
							<label
								htmlFor="name"
								className={`
									absolute left-3 top-3 text-base transition-all duration-200 bg-white px-1
									peer-placeholder-shown:text-gray-400 peer-placeholder-shown:top-3
									peer-focus:text-[#8FC9FF] peer-focus:top-[-8px] peer-focus:text-sm
									peer-not-placeholder-shown:top-[-8px] peer-not-placeholder-shown:text-sm
									${errors.name ? "text-[#FB7A7A]" : "text-gray-400"}
								`}
							>
								Ваше имя
							</label>
							{errors.name && <p className="text-[#FB7A7A] text-[13px] mt-1">{errors.name}</p>}
						</div>

						<div className="relative w-full">
							<input
								type="text"
								id="phone"
								value={phone}
								onChange={(e) => {
									let val = e.target.value.replace(/\D/g, '');

									if (!val.startsWith('7')) val = '7' + val.slice(1);

									val = val.slice(0, 11);

									if (val.length >= 1) val = '+' + val[0] + val.slice(1);
									if (val.length > 2) val = val.replace(/^(\+7)(\d{0,3})/, '$1 ($2)');
									if (val.length > 6) val = val.replace(/^(\+7 \(\d{3}\))(\d{0,3})/, '$1 $2');
									if (val.length > 10) val = val.replace(/^(\+7 \(\d{3}\) \d{3})(\d{0,2})/, '$1-$2');
									if (val.length > 13) val = val.replace(/^(\+7 \(\d{3}\) \d{3}-\d{2})(\d{0,2})/, '$1-$2');

									setPhone(val);
								}}
								placeholder=" "
								className={`
									peer w-full border p-3 rounded-[4px]
									hover:border-black focus:border-black focus:ring-2 focus:ring-[#8FC9FF] focus:outline-none
									${errors.phone ? "border-[#FB7A7A]" : "border-[#C4C7CA]"}
									`}
							/>
							<label
								htmlFor="phone"
								className={`
									absolute left-3 top-3 text-base transition-all duration-200 bg-white px-1
									peer-placeholder-shown:text-gray-400 peer-placeholder-shown:top-3
									peer-focus:text-[#8FC9FF] peer-focus:top-[-8px] peer-focus:text-sm
									peer-not-placeholder-shown:top-[-8px] peer-not-placeholder-shown:text-sm
									${errors.phone ? "text-[#FB7A7A]" : "text-gray-400"}
								`}
							>
								Телефон
							</label>
							{errors.phone && <p className="text-[#FB7A7A] text-[13px] mt-1">{errors.phone}</p>}
						</div>
					</div>
					<div className="relative w-full mb-8">
						<input
							type="text"
							id="address"
							placeholder=" "
							value={address}
							onChange={(e) => setAddress(e.target.value)}
							className={`
								peer w-full border p-3 rounded-[4px]
								hover:border-black focus:border-black focus:ring-2 focus:ring-[#8FC9FF] focus:outline-none
								${errors.address ? "border-[#FB7A7A]" : "border-[#C4C7CA]"}
							`}
						/>
						<label
							htmlFor="address"
							className={`
								absolute left-3 top-3 text-base transition-all duration-200 bg-white px-1
								peer-placeholder-shown:text-gray-400 peer-placeholder-shown:top-3
								peer-focus:text-[#8FC9FF] peer-focus:top-[-8px] peer-focus:text-sm
								peer-not-placeholder-shown:top-[-8px] peer-not-placeholder-shown:text-sm
								${errors.address ? "text-[#FB7A7A]" : "text-gray-400"}
							`}
						>
							Адрес доставки
						</label>
						{errors.address && <p className="text-[#FB7A7A] text-[13px] mt-1">{errors.address}</p>}
					</div>
				</div>
				<h4 className="mb-3 --font-heading text-[18px] font-extrabold">Способ оплаты</h4>
				<label className=" mb-4 flex gap-5 items-center cursor-pointer">
					<input
						type="radio"
						name="payment"
						defaultChecked
						className="peer hidden"
					/>
					<div
						className="
                            w-5 h-5 rounded-full border-2 border-gray-400
                            hover:border-black peer-checked:border-black
                            relative flex-shrink-0
                            transition-colors duration-150

                            after:content-['']
                            after:absolute after:inset-0 after:m-auto
                            after:w-3 after:h-3
                            after:rounded-full after:bg-[#E52D2D]
                            after:scale-0
                            peer-checked:after:scale-100
                            after:transition-transform
                        "
					/>
					Оплата наличными или картой курьеру
				</label>
				<label className="mb-8 flex gap-5 items-center cursor-pointer">
					<input
						type="radio"
						name="payment"
						className="peer hidden"
					/>
					<div
						className="
                        w-5 h-5 rounded-full border-2 border-gray-400
                        hover:border-black peer-checked:border-black
                        relative
                        transition-colors duration-150

                        after:content-['']
                        after:absolute after:inset-0 after:m-auto
                        after:w-3 after:h-3
                        after:rounded-full after:bg-[#E52D2D]
                        after:scale-0
                        peer-checked:after:scale-100
                        after:transition-transform
                        "
					/>
					Оплата картой онлайн на сайте
				</label>
				<button
					onClick={() => handleSubmit()}
					className={`
						w-full sm:w-auto py-4 px-8 rounded-[5px] text-white --font-heading text-[18px] font-black uppercase
						bg-[#E52D2D] border border-transparent
						transition-colors duration-200 ease-in-out

						hover:bg-[#FF3C3C]
						active:bg-[#BF221E]
						focus:bg-[#E52D2D] focus:ring-2 focus:ring-[#8FC9FF] focus:outline-none
						disabled:bg-[#DBDBDB] disabled:text-[#939393] disabled:border border-transparent
					`}
				>Оформить заказ</button>
				<p className="mt-6 text-[#848A9A] text-[12px]">Нажимая кнопку «Оформить заказ» вы соглашаетесь с политикой конфиденциальности</p>
			</div>
		</div>
	)
}
