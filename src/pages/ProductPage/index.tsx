import React from 'react'
import { useParams, Link } from 'react-router-dom'
import './ProductPage.scss'
import { ProductMap } from './ProductMap'
import { Description } from './Description'
import { Recommendations } from './Recommendations'

export const ProductPage: React.FC = () => {
	const { id } = useParams()

	return (
		<div className='grow bg-[#defaff] pt-2'>
			<div className='product_page_container'>
				<div className='flex gap-2 font-light mb-2'>
					<div>
						<Link to='/'>Main</Link>
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
