import React from 'react'
import { Link } from 'react-router-dom'
import { useTranslation } from 'react-i18next'
import { TranslationKeys } from '../../i18n'
import up_button from '../../assets/up_button.svg'
import down_button from '../../assets/down_button.svg'
import little_cart_icon from '../../assets/little_cart_icon.svg'

export const ProductItem: React.FC = () => {
	const { t } = useTranslation()
	return (
		<div className='bg-[#d9d9d9] p-1 rounded-lg'>
			<Link
				to='/products/1'
				className='block bg-white w-full md:h-64 sm:h-56 h-48 rounded-lg mb-1'
			>
				{/* <img src="" alt="" /> */}
			</Link>
			<div className='px-2'>
				<div className='font-medium sm:mb-2 mb-1 sm:text-left text-center'>
					{t(TranslationKeys.PRODUCT_NAME)}
				</div>
				<div className='flex items-center sm:justify-between justify-center sm:mb-0 mb-1'>
					<div>1800 грн</div>
					<div className='sm:flex hidden items-center gap-1'>
						<div className='flex items-center'>
							<div className='p-1 cursor-pointer'>
								<img src={down_button} alt='down_button' />
							</div>
							<div>{/* Quantity of the item */}</div>
							<div className='p-1 cursor-pointer'>
								<img src={up_button} alt='up_button' />
							</div>
						</div>

						<div className='md:text-3xl text-2xl font-thin bg-[#36bbfe] md:h-10 h-8 md:w-10 w-8 rounded-full flex items-center justify-center text-white cursor-pointer'>
							+
						</div>
					</div>
				</div>
				<div className='cursor-pointer w-full py-2 border border-[#426f77] text-[#426f77] rounded-lg sm:hidden flex items-center justify-center gap-1'>
					<div>
						<img src={little_cart_icon} alt='little_cart_icon' />
					</div>
					<div className='leading-[0]'>В корзину</div>
				</div>
			</div>
		</div>
	)
}
