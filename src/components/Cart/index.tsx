import React from 'react'
import { useTranslation } from 'react-i18next'
import { TranslationKeys } from '../../i18n'
import { CartItem } from './CartItem'
import close from '../../assets/close.svg'
import empty_cart from '../../assets/empty_cart.svg'

interface ICartProps {
	setCartOpen: React.Dispatch<React.SetStateAction<boolean>>
}

export const Cart: React.FC<ICartProps> = ({ setCartOpen }) => {
	const { t } = useTranslation()

	return (
		<div className='fixed top-0 bottom-0 right-0 left-0 h-screen w-screen bg-black bg-opacity-20 flex items-center justify-center'>
			<div
				className={`sm:translate-y-0 -translate-y-[12%] overflow-y-scroll relative max-h-[60vh] lg:w-7/12 w-11/12 pt-7 md:pb-24 xl:pb-18 lg:10 pb-8  px-4 bg-white rounded-2xl`}
				// bg-[#fafafa] if cart is not empty
			>
				<div
					className='cursor-pointer absolute top-3 right-4 sm:w-6 w-5'
					onClick={() => setCartOpen(false)}
				>
					<img src={close} alt='close' />
				</div>

				<div className='flex items-center gap-4 sm:mb-10 mb-4'>
					<div
						className={`h-[1px] grow ${
							[].length ? 'bg-[#e7eae8]' : 'bg-[#eaedeb]'
						}`}
					></div>
					<div className='sm:text-2xl text-base font-medium'>
						{t(TranslationKeys.CART)}
					</div>
					<div
						className={`h-[1px] grow ${
							[].length ? 'bg-[#e7eae8]' : 'bg-[#eaedeb]'
						}`}
					></div>
				</div>

				{[].length ? (
					<div>
						<div className='mb-5'>
							{[].map(() => (
								<CartItem />
							))}
						</div>
						<div className='w-full h-[1px] bg-[#e7eae8] mb-4'></div>
						<div className='flex sm:flex-row flex-col sm:gap-0 gap-4 items-center justify-between sm:text-base text-sm'>
							<div
								onClick={() => setCartOpen(false)}
								className='text-[#426F77] underline cursor-pointer'
							>
								{t(TranslationKeys.CONTINUE_BUYING)}
							</div>
							<div className='flex items-center gap-4'>
								<div className='flex flex-col items-center justify-center px-2 border border-[#426F77] bg-white rounded-lg font-medium h-14'>
									<div className='text-sm'>{t(TranslationKeys.TOTAL_SUM)}</div>
									<div>5100 грн</div>
								</div>
								<div className='bg-[#426F77] hover:bg-[#376068] transition text-white font-thin rounded-lg h-14 flex items-center justify-center px-4 cursor-pointer'>
									{t(TranslationKeys.MAKE_AN_ORDER)}
								</div>
							</div>
						</div>
					</div>
				) : (
					<div className='flex flex-col items-center gap-5'>
						<img
							className='lg:w-60 sm:w-48 w-36 sm:-translate-x-5 -translate-x-4'
							src={empty_cart}
							alt='empty_cart'
						/>
						<div className='text-[#D9D9D9] sm:text-lg text-sm'>
							{t(TranslationKeys.EMPTY_CART)}
						</div>
					</div>
				)}
			</div>
		</div>
	)
}
