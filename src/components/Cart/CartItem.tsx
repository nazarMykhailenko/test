import React from 'react'
import { useTranslation } from 'react-i18next'
import { TranslationKeys } from '../../i18n'
import { LanguageCodes } from '../../i18n'
import bin from '../../assets/bin.svg'
import up_button from '../../assets/up_button.svg'
import down_button from '../../assets/down_button.svg'

// interface ICartItemProps {
// 	id: number
// 	item_number: string
// 	img: string
// 	name: {
// 		name_ua: string
// 		name_ru: string
// 	}
// 	size: string
// 	color: {
// 		color_ua: string
// 		color_ru: string
// 	}
// 	quantity: number
// 	price: number
// }

export const CartItem: React.FC = () =>
	// {
	// id,
	// img,
	// item_number,
	// name,
	// size,
	// color,
	// quantity,
	// price,
	// }
	{
		const { i18n } = useTranslation()
		return (
			<div className='hover:-translate-y-1 hover:shadow-lg transition-all bg-white flex items-center gap-x-4 justify-between p-2 rounded-lg [&:not(:last-child)]:mb-5'>
				<div className='flex items-center gap-3'>
					<div className='w-20 h-20 overflow-hidden rounded-lg'>
						<img className='object-cover' src={'img'} alt='image' />
					</div>
					<div>
						<div className='flex sm:flex-row flex-col sm:items-center items-start gap-2 mb-2 sm:text-base text-sm'>
							<div className='font-medium'>
								{i18n.language === LanguageCodes.UA
									? 'name.name_ua'
									: 'name.name_ua'}
							</div>
							<div className='border border-black p-[2px] text-sm rounded'>
								{'size'}
							</div>
							<div className='border border-black p-[2px] text-sm rounded'>
								{i18n.language === LanguageCodes.UA
									? 'color.color_ua'
									: 'color.color_ua'}
							</div>
						</div>
						<div className='text-xs text-[#AFAFAF]'>{'item_number'}</div>
					</div>
				</div>
				<div className='flex sm:flex-row flex-col items-center 2xl:gap-20 xl:gap-10 gap-x-5 gap-y-2'>
					<div className='flex items-center gap-3 border border-[#e4e4e4] p-1 rounded'>
						<div className='cursor-pointer'>
							<img className='sm:w-4 w-3' src={down_button} alt='down_button' />
						</div>
						<div className='sm:text-base text-sm'>{'quantity'}</div>
						<div className='cursor-pointer'>
							<img className='sm:w-4 w-3' src={up_button} alt='up_button' />
						</div>
					</div>
					<div className='font-medium sm:text-base text-sm'>{'price'} грн</div>
					<div className='cursor-pointer'>
						<img className='sm:w-6 w-5' src={bin} alt='breakInside: ' />
					</div>
				</div>
			</div>
		)
	}
