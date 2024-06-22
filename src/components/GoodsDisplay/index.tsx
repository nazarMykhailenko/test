import React from 'react'
import { Swiper, SwiperSlide } from 'swiper/react'
import { Navigation } from 'swiper/modules'
import { NavigationButtons } from './NavigationButtons'
import 'swiper/swiper-bundle.css'
import './GoodsDisplay.scss'

export const GoodsDisplay: React.FC = () => {
	return (
		<div className='w-full xl:h-[34rem] lg:h-[28rem] sm:h-[20rem] h-40 relative'>
			{/* Slider */}
			<Swiper
				modules={[Navigation]}
				slidesPerView={1}
				loop={true}
				// spaceBetween={50}
				observer={true}
				observeParents={true}
				parallax={true}
				onSlideChange={() => console.log('slide change')}
				onSwiper={(swiper) => console.log(swiper)}
			>
				<SwiperSlide>
					<div className='bg-[#d9d9d9] h-full'>
						1{/* <img src="" alt="" /> */}
					</div>
				</SwiperSlide>
				<SwiperSlide>
					<div className='bg-[#d9d9d9] h-full'>
						2{/* <img src="" alt="" /> */}
					</div>
				</SwiperSlide>
				<SwiperSlide>
					<div className='bg-[#d9d9d9] h-full'>
						3{/* <img src="" alt="" /> */}
					</div>
				</SwiperSlide>
				<SwiperSlide>
					<div className='bg-[#d9d9d9] h-full'>
						4{/* <img src="" alt="" /> */}
					</div>
				</SwiperSlide>

				<NavigationButtons />
			</Swiper>
		</div>
	)
}
