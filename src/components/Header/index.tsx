import React from 'react'
import { useTranslation } from 'react-i18next'
import { TranslationKeys } from '../../i18n'
import { LanguageSelector } from './LanguageSelector'
import { Cart } from '../Cart'
import logo from '../../assets/logo.png'
import verifier_logo from '../../assets/verifier_logo.png'
import tick from '../../assets/tick.svg'
import telegram_icon from '../../assets/telegram_icon.svg'
import viber_icon from '../../assets/viber_icon.svg'
import chat_icon from '../../assets/chat_icon.svg'
import cart from '../../assets/cart.svg'
import './Header.scss'
import { Menu } from './Menu'

export const Header: React.FC = () => {
	const [isMenuOpen, setMenuOpen] = React.useState(false)
	const [isCartOpen, setCartOpen] = React.useState(false)
	const { t } = useTranslation()
	return (
		<header>
			{/* Top header */}
			<div className='top_header bg-[#defaff] relative font-light 3xl:py-6 xl:py-4 lg:py-3 py-2'>
				<div className='header__container flex items-center justify-between'>
					{/* Burger */}
					<div
						className={`burger ${isMenuOpen && '_active'} lg:hidden block`}
						onClick={() => setMenuOpen((prev) => !prev)}
					>
						<div className='header__icon'>
							<span></span>
						</div>
					</div>

					{/* Phone */}
					<div className='lg:hidden p-1 bg-[#426f77] rounded-lg font-thin sm:text-base text-[10px] text-white'>
						{t(TranslationKeys.PHONE)}
					</div>

					{/* Logo */}
					<div>
						<img
							className='object-cover xl:w-full sm:w-40 w-16'
							src={logo}
							alt='logo'
						/>
					</div>

					{/* Info */}
					<div className='flex items-center 3xl:gap-32 md:gap-20 xl:gap-10 lg:gap-5 2xl:text-lg xl:text-base lg:text-sm sm:text-xs text-[10px]  lg:border-l-2 lg:border-r-2 border-white 3xl:px-10 md:px-8 xl:px-6 lg:px-4'>
						<div className='flex-col items-center lg:flex hidden'>
							<div className='flex items-center self-center text-center'>
								<img src={tick} alt='tick' />
								<span className='ml-2 max-w-36'>
									{t(TranslationKeys.VERIFIER)}
								</span>
							</div>
							<div>
								<img src={verifier_logo} alt='verifier_logo' />
							</div>
						</div>

						<div>
							<div className='text-center lg:mb-2 sm:mb-1 mb-[1px]'>
								{t(TranslationKeys.SCHEDULE)}
							</div>
							<div className='flex flex-col font-semibold'>
								<span>ПН-ПТ: 10:00 - 18:00</span>
								<span>{t(TranslationKeys.SCHEDULE_WEEKENDS)}</span>
							</div>
						</div>

						<div className='lg:flex hidden flex-col font-semibold'>
							<span>+380 (99) 333-33-33</span>
							<span>+380 (68) 333-33-33</span>
						</div>
					</div>

					{/* Connections */}
					<div className='2xl:text-lg xl:text-base lg:text-sm test-sm lg:block hidden'>
						<div className='mb-2 text-center'>
							{t(TranslationKeys.CONNECTION)}
						</div>
						<ul className='flex flex-col gap-1 font-medium'>
							<li className='flex items-center gap-4'>
								<span>
									<img src={viber_icon} alt='viber_icon' />
								</span>
								<span>Viber</span>
							</li>

							<li className='flex items-center gap-4'>
								<span>
									<img src={telegram_icon} alt='telegram_icon' />
								</span>
								<span>Telegram</span>
							</li>

							<li className='flex items-center gap-4'>
								<span>
									<img src={chat_icon} alt='chat_icon' />
								</span>
								<span>Чат</span>
							</li>
						</ul>
					</div>

					{/* Language Selector */}
					<LanguageSelector />

					{/* Cart */}
					<div
						className='lg:hidden block relative cursor-pointer'
						onClick={() => setCartOpen((prev) => !prev)}
					>
						<img src={cart} alt='cart' />
						<div className='absolute -top-2 -right-1 inline-flex items-center justify-center text-[11px] text-white font-thin bg-[#426f77] rounded-full w-3 h-3'>
							0
						</div>
					</div>
				</div>
			</div>

			{/* Bottom header */}
			<div className='bottom_header bg-white lg:block hidden'>
				<div className='header__container flex items-center justify-between 2xl:text-lg xl:text-base lg:text-sm'>
					<div>
						<ul className='flex gap-10'>
							<li>Item</li>
							<li>Item</li>
							<li>Item</li>
							<li>Item</li>
						</ul>
					</div>

					<div
						className='bg-[#defaff] flex flex-col justify-center h-full p-2 2xl:gap-4 gap-2 cursor-pointer'
						onClick={() => setCartOpen((prev) => !prev)}
					>
						<div className='flex items-center gap-7'>
							<span>
								<img className='md:w-6 w-4' src={cart} alt='cart' />
							</span>
							<span className='inline-flex items-center justify-center text-white font-thin bg-[#426f77] rounded-full md:w-6 w-4 md:h-6 h-4 md:text-base text-sm'>
								0
							</span>
						</div>
						<div className='font-medium'>0 грн</div>
					</div>
				</div>
			</div>

			<Menu isMenuOpen={isMenuOpen} setMenuOpen={setMenuOpen} />
			{isCartOpen && <Cart setCartOpen={setCartOpen} />}
		</header>
	)
}
