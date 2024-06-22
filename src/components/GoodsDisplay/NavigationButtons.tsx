import React from 'react'
import { TranslationKeys } from '../../i18n'
import { useTranslation } from 'react-i18next'
import left from '../../assets/left.svg'
import right from '../../assets/right.svg'
import { useSwiper } from 'swiper/react'

export const NavigationButtons: React.FC = () => {
	const { t } = useTranslation()
	const swiper = useSwiper()

	return (
		<div className='absolute sm:top-1/2 top-[40%] sm:left-[10%] left-0 -translate-y-1/2 z-[2] w-full sm:w-auto flex flex-col sm:items-center px-4 py-2 sm:p-0'>
			<div className='xl:text-[56px] lg:text-[46px] sm:text-[40px] text-2xl font-medium sm:mb-3'>
				{t(TranslationKeys.GOODS)}
			</div>
			<div className='text-base mb-3 sm:block hidden'>
				{t(TranslationKeys.YOUR_GOODS)}
			</div>
			<div className='bg-white transition hover:bg-[#f8f8f8] text-[#4c5f36] px-4 py-2 rounded-lg cursor-pointer lg:mb-10 mb-8  sm:block hidden'>
				{t(TranslationKeys.GO_TO_ITEMS)}
			</div>

			<div className='flex gap-6 justify-between sm:justify-start translate-y-10'>
				<div
					className='lg:w-14 sm:w-12 w-8 lg:h-14 sm:h-12 h-8 flex items-center justify-center rounded-full bg-[#bcbcbc] border-2 border-[#9e9e9e] cursor-pointer'
					onClick={() => swiper.slidePrev()}
				>
					<img className='sm:w-auto w-[6px]' src={left} alt='left' />
				</div>
				<div
					className='lg:w-14 sm:w-12 w-8 lg:h-14 sm:h-12 h-8 flex items-center justify-center rounded-full bg-[#bcbcbc] border-2 border-[#9e9e9e] cursor-pointer'
					onClick={() => swiper.slideNext()}
				>
					<img className='sm:w-auto w-[6px]' src={right} alt='right' />
				</div>
			</div>
		</div>
	)
}
