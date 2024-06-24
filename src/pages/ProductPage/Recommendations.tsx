import React from 'react'
import { ProductItem } from '../../components/ProductItem'
import { TranslationKeys } from '../../i18n'
import { useTranslation } from 'react-i18next'

export const Recommendations: React.FC = () => {
	const { t } = useTranslation()
	return (
		<div className='bg-white md:px-14 xl:px-10 px-5 md:py-10 xl:py-8 py-4 rounded-lg shadow-lg 2xl:text-lg xl:text-base lg:text-sm sm:text-xs text-[10px]'>
			<div className='flex items-center gap-4 sm:mb-7 mb-4'>
				<div
					className={`h-[1px] grow ${
						[].length ? 'bg-[#e7eae8]' : 'bg-[#eaedeb]'
					}`}
				></div>
				<div className='sm:text-2xl text-base font-medium'>
					{t(TranslationKeys.RECOMMEND)}
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
	)
}
