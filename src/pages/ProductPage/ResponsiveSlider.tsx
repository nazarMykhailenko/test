import React from 'react'
import { Swiper, SwiperSlide } from 'swiper/react'
import { Navigation } from 'swiper/modules'
import { NavigationButtons } from './NavigationButtons'

const img =
	'https://s3-alpha-sig.figma.com/img/8657/fb59/6ceeb391fef4840b6b84c96926e6b8b7?Expires=1719792000&Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4&Signature=EoifQB0OR-~VY6kp2xfmrAku~4dlS3woDKzS5mOxWuRTIKfWwk2X9jajIRCbQo091iNl6i5OKzaLqUDDUTlfRBbBUrphEZYquBgB93k91UR-i8mc7UVXm3dBX7Av~Jno9gsI99zXyUGtK3oytp00OOBWPqiZ--FAVAF0aFiwXariqi7ThWShUmn1DIxmx8ao~OcKCHHggr5ykkN7FvZVcYD9FzXfIKDBoRaSPaH54YqQEMN2wmQbFAzwBshyULbct3i93wGc8FmLUKDfauMr-YXJfiRaqUZzYQrnNdQCYa~vrm21bXWJaxq3W3dS1PUZownhYCV4QBkREN91wi9ogQ__'

export const ResponsiveSlider: React.FC = () => {
	return (
		<div className='lg:hidden block w-full rounded-lg relative'>
			<Swiper slidesPerView={1} modules={[Navigation]} loop={true}>
				{Array(10)
					.fill(img)
					.map(() => (
						<SwiperSlide>
							<div>
								<img
									className='object-cover cursor-pointer sm:h-[24rem] h-[18rem] w-full overflow-hidden rounded-lg'
									src={img}
									alt=''
								/>
							</div>
						</SwiperSlide>
					))}

				<NavigationButtons />
			</Swiper>
		</div>
	)
}
