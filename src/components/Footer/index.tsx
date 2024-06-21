import React from 'react'
import { useTranslation } from 'react-i18next'
import { TranslationKeys } from '../../i18n'
import logo from '../../assets/logo.png'
import tick from '../../assets/tick.svg'
import verifier_logo from '../../assets/verifier_logo.png'
import visa from '../../assets/visa_logo.png'
import mastercard from '../../assets/mastercard_logo.png'
import telegram_logo from '../../assets/telegram_logo.png'
import telegram_icon from '../../assets/telegram_icon.svg'
import viber_icon from '../../assets/viber_icon.svg'
import chat_icon from '../../assets/chat_icon.svg'
import './Footer.scss'

export const Footer: React.FC = () => {
	const { t } = useTranslation()

	return (
		<footer className='font-light bg-[#426F77] text-white sm:pt-10 pt-8 sm:pb-16 pb-10 2xl:text-lg xl:text-base lg:text-sm text-xs'>
			<div className='footer_container flex items-center justify-between lg:flex-row flex-col gap-y-6'>
				<div className='lg:hidden flex cursor-pointer items-center gap-3 bg-[#305359] p-1 rounded-lg px-6'>
					<div>
						<img src={telegram_logo} alt='telegram_logo' />
					</div>
					<div className='max-w-28'>
						{t(TranslationKeys.SUBSCRIBE_TELEGRAM)}
					</div>
				</div>

				<div className='lg:flex hidden gap-28'>
					<div className='flex flex-col gap-14'>
						<div>
							<div>
								<img className='object-cover' src={logo} alt='logo' />
							</div>
						</div>

						<div className='flex-col items-center flex'>
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
					</div>

					<div className='flex flex-col gap-14'>
						<div className='flex flex-col items-center gap-4'>
							<div>{t(TranslationKeys.PAY_OPTIONS)}:</div>
							<div className='flex gap-2'>
								<img className='cursor-pointer' src={visa} alt='visa' />
								<img
									className='cursor-pointer'
									src={mastercard}
									alt='mastercard'
								/>
							</div>
						</div>
						<div className='cursor-pointer flex items-center gap-3 bg-[#305359] p-1 rounded-lg'>
							<div>
								<img src={telegram_logo} alt='telegram_logo' />
							</div>
							<div className='2xl:max-w-48 max-w-40'>
								{t(TranslationKeys.SUBSCRIBE_TELEGRAM)}
							</div>
						</div>
					</div>
				</div>

				<div className='lg:flex hidden flex-col gap-4 text-sm'>
					<div>
						<div className='text-end mb-2 font-thin'>
							{t(TranslationKeys.SCHEDULE)}
						</div>
						<div className='flex flex-col items-end'>
							<span>ПН-ПТ: 10:00 - 18:00</span>
							<span>{t(TranslationKeys.SCHEDULE_WEEKENDS)}</span>
						</div>
					</div>

					<div>
						<div className='text-end mb-2 font-thin'>
							{t(TranslationKeys.CONNECTION)}
						</div>
						<div className='flex flex-col items-end mb-1'>
							<span>+380 (99) 333-33-33</span>
							<span>+380 (68) 333-33-33</span>
						</div>
						<div>
							<ul className='flex gap-4 text-xs'>
								<li className='flex items-center gap-1'>
									<span>
										<img src={viber_icon} alt='viber_icon' />
									</span>
									<span>Viber</span>
								</li>

								<li className='flex items-center gap-1'>
									<span>
										<img src={telegram_icon} alt='telegram_icon' />
									</span>
									<span>Telegram</span>
								</li>

								<li className='flex items-center gap-1'>
									<span>
										<img src={chat_icon} alt='chat_icon' />
									</span>
									<span>Чат</span>
								</li>
							</ul>
						</div>
					</div>

					<div>
						<div className='text-end lg:mb-2 sm:mb-1 mb-[1px] font-thin'>
							E-mail
						</div>
						<div className='text-end'>yoursbrand@mail.com</div>
					</div>
				</div>

				<div className='lg:hidden flex justify-center gap-10'>
					<div>
						<div className='mb-3'>
							<div className='text-start mb-2 font-thin'>
								{t(TranslationKeys.CONNECTION)}
							</div>
							<div className='flex flex-col items-end mb-1'>
								<span>+380 (99) 333-33-33</span>
								<span>+380 (68) 333-33-33</span>
							</div>
						</div>

						<div className='flex gap-3'>
							<div className='cursor-pointer'>
								<img src={chat_icon} alt='chat_icon' />
							</div>
							<div className='cursor-pointer'>
								<img src={viber_icon} alt='viber_icon' />
							</div>
							<div className='cursor-pointer'>
								<img src={telegram_icon} alt='telegram_icon' />
							</div>
						</div>
					</div>

					<div>
						<div className='mb-3'>
							<div className='text-end mb-2 font-thin'>
								{t(TranslationKeys.SCHEDULE)}
							</div>
							<div className='flex flex-col items-end'>
								<span>ПН-ПТ: 10:00 - 18:00</span>
								<span>{t(TranslationKeys.SCHEDULE_WEEKENDS)}</span>
							</div>
						</div>

						<div>
							<div className='text-end mb-2 font-thin'>E-mail</div>
							<div className='text-end'>yoursbrand@mail.com</div>
						</div>
					</div>
				</div>

				<div className='lg:hidden flex flex-col items-center gap-10'>
					<div>
						<img src={logo} alt='logo' />
					</div>

					<div className='flex gap-x-8'>
						<div className='flex-col items-center flex'>
							<div className='flex items-center self-center text-center'>
								<img src={tick} alt='tick' />
								<span className='sm:ml-2 ml-0 max-w-36'>
									{t(TranslationKeys.VERIFIER)}
								</span>
							</div>
							<div>
								<img
									className='sm:w-full w-40'
									src={verifier_logo}
									alt='verifier_logo'
								/>
							</div>
						</div>

						<div className='flex flex-col items-center gap-4'>
							<div>{t(TranslationKeys.PAY_OPTIONS)}:</div>
							<div className='flex gap-2'>
								<img
									className='cursor-pointer sm:w-full w-16'
									src={visa}
									alt='visa'
								/>
								<img
									className='cursor-pointer sm:w-full w-16'
									src={mastercard}
									alt='mastercard'
								/>
							</div>
						</div>
					</div>
				</div>
			</div>
		</footer>
	)
}
