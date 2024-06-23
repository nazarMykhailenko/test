import React from 'react'
import { GoodsDisplay } from '../components/GoodsDisplay'
import { AdvantagesBlock } from '../components/AdvantagesBlock'
import { ClothesOrShoes } from '../components/ClothesOrShoes'
import { Products } from '../components/Products'
import { Help } from '../components/Help'
import { About } from '../components/AboutUs'

export const HomePage: React.FC = () => {
	return (
		<div className='grow bg-[#defaff]'>
			<GoodsDisplay />
			<AdvantagesBlock />
			<ClothesOrShoes />
			<Products />
			<Help />
			<About />
		</div>
	)
}
