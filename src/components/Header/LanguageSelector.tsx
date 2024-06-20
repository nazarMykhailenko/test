import React from 'react'
import { useTranslation } from 'react-i18next'
import { LanguageCodes } from '../../i18n'

export const LanguageSelector: React.FC = () => {
	const { i18n } = useTranslation()
	const changeLanguage = (code: string) => {
		i18n.changeLanguage(code)
	}

	return (
		<div className='lg:absolute lg:top-1/2 lg:-translate-y-1/2 lg:right-3 flex items-center text-white rounded-lg font-thin 3xl:text-lg xl:text-base lg:text-sm 3xl:px-2 px-1 3xl:py-2 lg:py-2 xl:py-1 bg-[#426f77]'>
			<div
				className={`cursor-pointer ${
					i18n.language === LanguageCodes.RU && 'font-semibold'
				} lg:block ${i18n.language === LanguageCodes.RU && 'hidden'}`}
				onClick={() => changeLanguage(LanguageCodes.RU)}
			>
				Ru
			</div>
			<div className='h-5 w-[1px] bg-white mx-2 lg:block hidden'></div>
			<div
				className={`cursor-pointer ${
					i18n.language === LanguageCodes.UA && 'font-semibold'
				} lg:block ${i18n.language === LanguageCodes.UA && 'hidden'}`}
				onClick={() => changeLanguage(LanguageCodes.UA)}
			>
				Ua
			</div>
		</div>
	)
}
