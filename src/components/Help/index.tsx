import React from 'react'
import { useTranslation } from 'react-i18next'
import { TranslationKeys } from '../../i18n'
import './Help.scss'

export const Help: React.FC = () => {
	const { t } = useTranslation()
	const [name, setName] = React.useState('')
	const [phone, setPhone] = React.useState('')
	const handleNameChange = (e: React.ChangeEvent<HTMLInputElement>) => {
		setName(e.target.value)
	}
	const handlePhoneChange = (e: React.ChangeEvent<HTMLInputElement>) => {
		setPhone(e.target.value)
	}

	return (
		<div className='help xl:mb-10 lg:mb-8 sm:mb-5 mb-4 2xl:text-lg xl:text-base lg:text-sm sm:text-xs text-[10px]'>
			<div className='help_container'>
				<div className='bg-white md:px-14 xl:px-10 px-5 md:py-10 xl:py-8 py-4 rounded-lg shadow-lg flex sm:flex-row flex-col sm:items-end sm:justify-between gap-y-4'>
					<div className='sm:mr-28'>
						<div className='xl:text-3xl sm:text-2xl text-xl font-medium'>
							{t(TranslationKeys.NEED_HELP)}
						</div>
						<div className='text-[#9d9d9d] mb-3'>
							<span className='font-medium'>
								{t(TranslationKeys.HELP_TEXT)}
							</span>
							<span>{t(TranslationKeys.WILL_RESPOND)}</span>
						</div>
						<div className='flex sm:justify-start text-[#426f77] justify-between items-center gap-8 font-medium mb-5'>
							<div>+380 (99) 333-33-33</div>
							<div>+380 (68) 333-33-33</div>
						</div>
						<div>
							<div className='flex sm:flex-row flex-col gap-x-4 gap-y-2'>
								<input
									className='px-4 py-2 outline-none border border-[#b5b5b5] rounded-md'
									placeholder={t(TranslationKeys.YOUR_NAME)}
									type='text'
									value={name}
									onChange={handleNameChange}
								/>
								<input
									className='px-4 py-2 outline-none border border-[#b5b5b5] rounded-md'
									placeholder='+380 (__) ___ __ __'
									type='tel'
									value={phone}
									onChange={handlePhoneChange}
								/>
							</div>
						</div>
					</div>
					<div className='flex justify-center uppercase sm:text-lg text-sm px-4 py-2 bg-[#426f77] rounded-lg text-white font-light cursor-pointer'>
						{t(TranslationKeys.SEND)}
					</div>
				</div>
			</div>
		</div>
	)
}
