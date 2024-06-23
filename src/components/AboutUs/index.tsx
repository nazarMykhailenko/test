import React from 'react'
import { useTranslation } from 'react-i18next'
import { TranslationKeys } from '../../i18n'
import './AboutUs.scss'

export const About: React.FC = () => {
	const { t } = useTranslation()
	return (
		<div className='about xl:mb-20 lg:mb-16 sm:mb-8 mb-4 2xl:text-lg xl:text-base lg:text-sm sm:text-xs text-[10px]'>
			<div className='about_container'>
				<div className='flex items-center gap-4 lg:mb-7 sm:mb-5 mb-4'>
					<div
						className={`h-[1px] grow ${
							[].length ? 'bg-[#e7eae8]' : 'bg-[#eaedeb]'
						}`}
					></div>
					<div className='sm:text-2xl text-base font-medium bg-white p-2 rounded-lg'>
						{t(TranslationKeys.ABOUT_US)}
					</div>
					<div
						className={`h-[1px] grow ${
							[].length ? 'bg-[#e7eae8]' : 'bg-[#eaedeb]'
						}`}
					></div>
				</div>

				<div className='w-full flex items-start bg-[#d9d9d9] rounded-lg sm:p-7 p-3'>
					<div className='xl:w-[50%] lg:w-[70%] sm:w-[80%] w-full max-w-[40rem] bg-[#f2f2f2] lg:px-6 sm:px-4 px-3  lg:py-8 sm:py-4 py-2 rounded-lg'>
						Lorem, ipsum dolor sit amet consectetur adipisicing elit.
						Dignissimos facere quibusdam nobis quam consequuntur voluptatibus
						ad, fuga officiis excepturi blanditiis placeat, doloremque molestias
						cumque eum explicabo earum atque cum tenetur, veniam cupiditate
						inventore veritatis nemo beatae ea? Libero cum explicabo suscipit
						itaque quis magni! Consequatur recusandae quis omnis maxime voluptas
						numquam cum voluptatum dolore tempore culpa, explicabo dolores
						deleniti illum veritatis accusamus eaque! Odit praesentium, earum,
						adipisci odio nulla consequatur vitae vel voluptatum quos veritatis
						labore necessitatibus vero reprehenderit! Ipsum amet, magnam
						molestias, nemo neque ratione ea cupiditate eius et inventore sint
						veritatis molestiae impedit, deserunt perferendis nulla corrupti
						necessitatibus.
					</div>
				</div>
			</div>
		</div>
	)
}
