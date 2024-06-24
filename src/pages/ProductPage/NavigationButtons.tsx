import React from 'react'
import { useSwiper } from 'swiper/react'
import left from '../../assets/left.svg'
import right from '../../assets/right.svg'

export const NavigationButtons: React.FC = () => {
	const swiper = useSwiper()
	return (
		<>
			<div
				className='lg:w-14 sm:w-12 w-8 lg:h-14 sm:h-12 h-8 flex items-center justify-center rounded-full bg-[#bcbcbc] border-2 border-[#9e9e9e] cursor-pointer absolute left-0 top-1/2 -translate-y-1/2 z-[1]'
				onClick={() => swiper.slidePrev()}
			>
				<img className='sm:w-auto w-[6px]' src={left} alt='left' />
			</div>

			<div
				className='lg:w-14 sm:w-12 w-8 lg:h-14 sm:h-12 h-8 flex items-center justify-center rounded-full bg-[#bcbcbc] border-2 border-[#9e9e9e] cursor-pointer absolute right-0 top-1/2 -translate-y-1/2 z-[1]'
				onClick={() => swiper.slideNext()}
			>
				<img className='sm:w-auto w-[6px]' src={right} alt='right' />
			</div>
		</>
	)
}
