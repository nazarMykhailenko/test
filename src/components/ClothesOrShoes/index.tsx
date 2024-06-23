import React from 'react'
import { useTranslation } from 'react-i18next'
import { TranslationKeys } from '../../i18n'
import './ClothesOrShoes.scss'

export const ClothesOrShoes: React.FC = () => {
	const { t } = useTranslation()

	return (
		<div className='clothes_or_shoes sm:py-7 py-4 text-white font-light 2xl:text-lg xl:text-base lg:text-sm sm:text-xs text-[10px]'>
			<div className='clothes_or_shoes_container flex lg:flex-row flex-col items-center justify-center gap-x-20 sm:gap-y-10 gap-y-5'>
				<div className='w-full bg-[#dadada] lg:h-48 sm:h-44 h-32 max-w-[40rem] relative rounded-lg shadow-lg cursor-pointer'>
					<div className='absolute left-1/2 -translate-x-1/2 bottom-5'>
						{t(TranslationKeys.CLOTHES)}
					</div>
				</div>
				<div className='w-full bg-[#dadada] lg:h-48 sm:h-44 h-32 max-w-[40rem] relative rounded-lg shadow-lg cursor-pointer'>
					<div className='absolute left-1/2 -translate-x-1/2 bottom-5'>
						{t(TranslationKeys.SHOES)}
					</div>
				</div>
			</div>
		</div>
	)
}
