import React from 'react'
import { useTranslation } from 'react-i18next'
import { TranslationKeys } from '../../i18n'
import quality from '../../assets/quality.svg'
import speed_supply from '../../assets/speed_supply.svg'
import own_production from '../../assets/own_production.svg'
import prices from '../../assets/prices.svg'
import './AdvantagesBlock.scss'

export const AdvantagesBlock: React.FC = () => {
	const { t } = useTranslation()
	return (
		<div className='advantages_block bg-white sm:py-7 py-4 2xl:text-lg xl:text-base lg:text-sm sm:text-xs text-[10px]'>
			<div className='advantages_block_container grid lg:grid-cols-4 grid-cols-2 gap-x-6 sm:gap-y-10 gap-y-7 grid-column-end'>
				<div className='flex flex-col items-center justify-between'>
					<div className='inline-block'>
						<img className='sm:w-auto w-[80%]' src={quality} alt='quality' />
					</div>
					<div className='text-center'>{t(TranslationKeys.QUALITY)}</div>
				</div>

				<div className='flex flex-col items-center justify-between'>
					<div className='inline-block'>
						<img
							className='sm:w-auto w-[80%]'
							src={speed_supply}
							alt='speed_supply'
						/>
					</div>
					<div className='text-center'>{t(TranslationKeys.SPEED_SUPPLY)}</div>
				</div>

				<div className='flex flex-col items-center justify-between'>
					<div className='inline-block'>
						<img
							className='sm:w-auto w-[80%]'
							src={own_production}
							alt='own_production'
						/>
					</div>
					<div className='text-center'>{t(TranslationKeys.OWN_PRODUCTION)}</div>
				</div>

				<div className='flex flex-col items-center justify-between'>
					<div className='inline-block'>
						<img className='sm:w-auto w-[80%]' src={prices} alt='prices' />
					</div>
					<div className='text-center'>{t(TranslationKeys.PRICES)}</div>
				</div>
			</div>
		</div>
	)
}
