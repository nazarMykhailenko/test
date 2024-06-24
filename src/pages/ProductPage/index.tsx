import React from 'react'
import { useTranslation } from 'react-i18next'
import { TranslationKeys } from '../../i18n'
import { useParams, Link } from 'react-router-dom'
import { ProductMap } from './ProductMap'
import { Description } from './Description'
import { Recommendations } from './Recommendations'
import './ProductPage.scss'

export const ProductPage: React.FC = () => {
	const { id } = useParams()
	const { t } = useTranslation()

	return (
		<div className='grow bg-[#defaff] pt-2'>
			<div className='product_page_container'>
				<div className='flex gap-2 font-light mb-2'>
					<div>
						<Link to='/'>{t(TranslationKeys.MAIN)}</Link>
					</div>
					<div>{'>'}</div>
					<Link to={`/products/${id}`}>Карта товара</Link>
				</div>

				<div className='lg:mb-10 sm:mb-8 mb-4 sm:w-4/5 w-full mx-auto'>
					<ProductMap />
				</div>

				<div className='lg:mb-10 sm:mb-8 mb-4 sm:w-4/5 w-full mx-auto'>
					<Description />
				</div>

				<div className='xl:mb-20 lg:mb-14 sm:10 mb-4'>
					<Recommendations />
				</div>
			</div>
		</div>
	)
}
