import React from 'react'
import { GoodsDisplay } from '../components/GoodsDisplay'
import { AdvantagesBlock } from '../components/AdvantagesBlock'
import { ClothesOrShoes } from '../components/ClothesOrShoes'
import { Products } from '../components/Products'

export const HomePage: React.FC = () => {
	return (
		<div className='grow bg-[#defaff]'>
			<GoodsDisplay />
			<AdvantagesBlock />
			<ClothesOrShoes />
			<Products />
		</div>
	)
}
