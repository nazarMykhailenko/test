import React from 'react'
import { Swiper, SwiperSlide } from 'swiper/react'
import { useTranslation } from 'react-i18next'
import { TranslationKeys } from '../../i18n'
import color_icon from '../../assets/color_icon.svg'
import size_icon from '../../assets/size_icon.svg'
import up_button from '../../assets/up_button.svg'
import down_button from '../../assets/down_button.svg'
import { ResponsiveSlider } from './ResponsiveSlider'

const img =
	'https://s3-alpha-sig.figma.com/img/8657/fb59/6ceeb391fef4840b6b84c96926e6b8b7?Expires=1719792000&Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4&Signature=EoifQB0OR-~VY6kp2xfmrAku~4dlS3woDKzS5mOxWuRTIKfWwk2X9jajIRCbQo091iNl6i5OKzaLqUDDUTlfRBbBUrphEZYquBgB93k91UR-i8mc7UVXm3dBX7Av~Jno9gsI99zXyUGtK3oytp00OOBWPqiZ--FAVAF0aFiwXariqi7ThWShUmn1DIxmx8ao~OcKCHHggr5ykkN7FvZVcYD9FzXfIKDBoRaSPaH54YqQEMN2wmQbFAzwBshyULbct3i93wGc8FmLUKDfauMr-YXJfiRaqUZzYQrnNdQCYa~vrm21bXWJaxq3W3dS1PUZownhYCV4QBkREN91wi9ogQ__'

export const ProductMap: React.FC = () => {
	const [bigImgUrl, setBigImageUrl] = React.useState(img)
	const { t } = useTranslation()
	return (
		<div className='w-full bg-white  shadow-lg rounded-lg flex lg:flex-row flex-col lg:pt-2 sm:py-4 py-2'>
			<div className='lg:w-1/2 w-full lg:pl-2 lg:pr-7 sm:px-5 px-2 sm:pb-7 pb-2 lg:border-r-2 border-[#c8e2e7]'>
				<div className='mb-7 lg:block hidden'>
					<img
						className='md:h-[28rem] h-[22rem] w-full object-cover rounded-lg'
						src={bigImgUrl}
						alt='Big display image'
					/>
				</div>
				<div className='lg:block hidden'>
					<Swiper slidesPerView={5} spaceBetween={80}>
						{Array(10)
							.fill(img)
							.map((item) => (
								<SwiperSlide>
									<div className='h-20 w-20'>
										<img
											onClick={() => setBigImageUrl(item)}
											className='object-cover rounded-lg cursor-pointer h-full w-full'
											src={item}
											alt=''
										/>
									</div>
								</SwiperSlide>
							))}
					</Swiper>
				</div>
				{/* Responsive slider */}
				<ResponsiveSlider />
			</div>

			<div className='lg:w-1/2 flex lg:items-center lg:justify-center sm:px-5 px-2 lg:px-0 sm:text-base text-sm'>
				<div>
					<div className='lg:text-2xl text-xl sm:text-base font-medium sm:mb-3 mb-1'>
						Name of the product
					</div>
					<div className='mb-2 bg-[#cbf0ce] text-[#41d145] px-2 py-[2px] text-sm rounded-lg inline-flex items-center justify-between gap-2'>
						<div className='h-[3px] w-[3px] bg-[#41d145]'></div>
						<div>{t(TranslationKeys.AVAILABLE)}</div>
					</div>

					<div className='mb-2'>
						<div className='flex items-center gap-2 font-medium mb-1'>
							<div>
								<img src={size_icon} alt='size_icon' />
							</div>
							<div>{t(TranslationKeys.SIZE)}</div>
						</div>
						<div className='flex items-center gap-2 text-base'>
							<div className='cursor-pointer border border-black p-[2px] text-sm rounded'>
								42-44
							</div>
							<div className='cursor-pointer border border-black p-[2px] text-sm rounded'>
								46-48
							</div>
						</div>
					</div>

					<div className='sm:mb-5 mb-2'>
						<div className='flex items-center gap-2 font-medium mb-1'>
							<div>
								<img src={color_icon} alt='color_icon' />
							</div>
							<div>{t(TranslationKeys.COLOR)}</div>
						</div>
						<div className='flex items-center gap-2 text-base'>
							<div className='cursor-pointer border border-black p-[2px] text-sm rounded'>
								Color 1
							</div>
							<div className='cursor-pointer border border-black p-[2px] text-sm rounded'>
								Color 2
							</div>
							<div className='cursor-pointer border border-black p-[2px] text-sm rounded'>
								Color 3
							</div>
							<div className='cursor-pointer border border-black p-[2px] text-sm rounded'>
								Color 4
							</div>
						</div>
					</div>

					<div className='lg:text-2xl text-xl sm:text-base font-medium sm:mb-5 mb-2'>
						1700 грн
					</div>
					<div className='flex items-center justify-between sm:gap-10 gap-8'>
						<div className='flex items-center gap-2 bg-[#426f77] text-white font-light px-6 py-2 rounded-lg cursor-pointer'>
							<div>{t(TranslationKeys.ADD_TO_CART)}</div>
							<div>
								<svg
									width='16'
									height='16'
									viewBox='0 0 16 16'
									fill='none'
									xmlns='http://www.w3.org/2000/svg'
								>
									<path
										d='M15.8297 4.18947C15.7839 4.12433 15.7231 4.07117 15.6524 4.03446C15.5817 3.99774 15.5032 3.97855 15.4235 3.9785H4.81203L4.00878 1.2085C3.69378 0.11775 2.94527 0 2.63827 0H0.496516C0.222 0 0 0.22225 0 0.4965C0 0.77075 0.22225 0.992984 0.4965 0.992984H2.638C2.70575 0.992984 2.9125 0.992984 3.05352 1.48023L5.81677 11.6355C5.87677 11.8497 6.07202 11.9977 6.29475 11.9977H13.0442C13.2538 11.9977 13.4408 11.8665 13.5115 11.6692L15.8905 4.64297C15.9453 4.49072 15.9225 4.32122 15.8298 4.18947H15.8297ZM12.6948 11.005H6.67161L5.09111 4.97175H14.7176L12.6948 11.005ZM11.7101 13.004C11.0196 13.004 10.4601 13.5635 10.4601 14.254C10.4601 14.9445 11.0196 15.504 11.7101 15.504C12.4006 15.504 12.9601 14.9445 12.9601 14.254C12.9601 13.5635 12.4006 13.004 11.7101 13.004ZM7.21011 13.004C6.51961 13.004 5.96011 13.5635 5.96011 14.254C5.96011 14.9445 6.51961 15.504 7.21011 15.504C7.90061 15.504 8.46011 14.9445 8.46011 14.254C8.46011 13.5635 7.90061 13.004 7.21011 13.004Z'
										fill='white'
									/>
								</svg>
							</div>
						</div>
						<div className='flex items-center gap-3 border border-[#e4e4e4] p-1 rounded'>
							<div className='cursor-pointer'>
								<img
									className='sm:w-4 w-3'
									src={down_button}
									alt='down_button'
								/>
							</div>
							<div className='sm:text-base text-sm'>1</div>
							<div className='cursor-pointer'>
								<img className='sm:w-4 w-3' src={up_button} alt='up_button' />
							</div>
						</div>
					</div>
				</div>
			</div>
		</div>
	)
}
