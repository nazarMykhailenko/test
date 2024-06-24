import React from 'react'
import { useTranslation } from 'react-i18next'
import { TranslationKeys } from '../../i18n'
import { ProductItem } from '../ProductItem'
import './Products.scss'

export const Products: React.FC = () => {
	const { t } = useTranslation()
	return (
		<div className='products xl:mb-20 lg:mb-16 sm:mb-8 mb-4 2xl:text-lg xl:text-base lg:text-sm sm:text-xs text-[10px]'>
			<div className='products_container'>
				<div className='bg-white md:px-14 xl:px-10 px-5 md:py-10 xl:py-8 py-4 rounded-lg shadow-lg'>
					<div className='md:mb-20 xl:mb-14 sm:mb-10 mb-5'>
						<div className='flex items-center gap-4 sm:mb-7 mb-4'>
							<div
								className={`h-[1px] grow ${
									[].length ? 'bg-[#e7eae8]' : 'bg-[#eaedeb]'
								}`}
							></div>
							<div className='sm:text-2xl text-base font-medium'>
								{t(TranslationKeys.NEW_DROPS)}
							</div>
							<div
								className={`h-[1px] grow ${
									[].length ? 'bg-[#e7eae8]' : 'bg-[#eaedeb]'
								}`}
							></div>
						</div>

						<div className='grid grid-cols-2 lg:grid-cols-4 2xl:gap-x-24 xl:gap-x-10 lg:gap-x-5 sm:gap-x-10 gap-x-5 sm:gap-y-10 gap-y-5'>
							<ProductItem />
							<ProductItem />
							<ProductItem />
							<ProductItem />
						</div>
					</div>

					<div>
						<div className='flex items-center gap-4 sm:mb-7 mb-4'>
							<div
								className={`h-[1px] grow ${
									[].length ? 'bg-[#e7eae8]' : 'bg-[#eaedeb]'
								}`}
							></div>
							<div className='sm:text-2xl text-base font-medium'>
								{t(TranslationKeys.GOODS)}
							</div>
							<div
								className={`h-[1px] grow ${
									[].length ? 'bg-[#e7eae8]' : 'bg-[#eaedeb]'
								}`}
							></div>
						</div>

						<div className='grid grid-cols-2 lg:grid-cols-4 2xl:gap-x-24 xl:gap-x-10 lg:gap-x-5 sm:gap-x-10 gap-x-5 sm:gap-y-10 gap-y-5'>
							<ProductItem />
							<ProductItem />
							<ProductItem />
							<ProductItem />
						</div>
					</div>
				</div>
			</div>
		</div>
	)
}
