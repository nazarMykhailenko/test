import React from 'react'
import logo from '../../assets/logo.png'
import './Menu.scss'

interface IMenuProps {
	isMenuOpen: boolean
	setMenuOpen: React.Dispatch<React.SetStateAction<boolean>>
}

export const Menu: React.FC<IMenuProps> = ({ isMenuOpen, setMenuOpen }) => {
	return (
		<div className={`menu__body ${isMenuOpen && '_active'} lg:hidden block`}>
			<div className='pt-16'>
				<img
					src={logo}
					alt='Logo'
					className='sm:w-52 w-40 block mx-auto mb-6'
				/>
				<ul className='flex flex-col items-start '>
					<li className='w-full p-4 [&:not(:last-child)]:border-b border-white'>
						<a href='#' className='text-white text-lg block hover:underline'>
							Item
						</a>
					</li>
					<li className='w-full p-4 [&:not(:last-child)]:border-b border-white'>
						<a href='#' className='text-white text-lg block hover:underline'>
							Item
						</a>
					</li>
					<li className='w-full p-4 [&:not(:last-child)]:border-b border-white'>
						<a href='#' className='text-white text-lg block hover:underline'>
							Item
						</a>
					</li>
					<li className='w-full p-4 [&:not(:last-child)]:border-b border-white'>
						<a href='#' className='text-white text-lg block hover:underline'>
							Item
						</a>
					</li>
				</ul>
			</div>
		</div>
	)
}
