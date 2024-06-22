import i18n from 'i18next'
import { initReactI18next } from 'react-i18next'

export enum TranslationKeys {
	VERIFIER = 'verifier',
	SCHEDULE = 'schedule',
	SCHEDULE_WEEKENDS = 'schedule_weekends',
	CONNECTION = 'connection',
	PHONE = 'phone',
	CART = 'cart',
	EMPTY_CART = 'empty_cart',
	CONTINUE_BUYING = 'continue_buying',
	TOTAL_SUM = 'total_sum',
	MAKE_AN_ORDER = 'make_an_order',
	PAY_OPTIONS = 'pay_options',
	SUBSCRIBE_TELEGRAM = 'subscribe_telegram',
	GOODS = 'goods',
	YOUR_GOODS = 'your_goods',
	GO_TO_ITEMS = 'go_to_items',
	QUALITY = 'quality',
	SPEED_SUPPLY = 'speed_supply',
	OWN_PRODUCTION = 'own_production',
	PRICES = 'prices',
}
export enum LanguageCodes {
	UA = 'ua',
	RU = 'ru',
}

const resources = {
	[LanguageCodes.UA]: {
		translation: {
			[TranslationKeys.VERIFIER]: 'Верификований підприємець',
			[TranslationKeys.SCHEDULE]: 'Графік роботи',
			[TranslationKeys.SCHEDULE_WEEKENDS]: 'СБ-НД: 10:00 - 16:00',
			[TranslationKeys.CONNECTION]: 'Звʼязок',
			[TranslationKeys.PHONE]: 'Зателефонувати',
			[TranslationKeys.CART]: 'Кошик',
			[TranslationKeys.EMPTY_CART]: 'Упс, ваш кошик порожній!',
			[TranslationKeys.CONTINUE_BUYING]: 'Продовжити покупки',
			[TranslationKeys.TOTAL_SUM]: 'Всього',
			[TranslationKeys.MAKE_AN_ORDER]: 'Оформити замовлення',
			[TranslationKeys.PAY_OPTIONS]: 'Сплачуйте',
			[TranslationKeys.SUBSCRIBE_TELEGRAM]:
				'Підписуйтесь на наш Telegram канал',
			[TranslationKeys.GOODS]: 'Товари',
			[TranslationKeys.YOUR_GOODS]: 'Тут можуть бути ваші товари',
			[TranslationKeys.GO_TO_ITEMS]: 'Перейти до каталогу',
			[TranslationKeys.QUALITY]: 'Висока якість',
			[TranslationKeys.SPEED_SUPPLY]: 'Швидке постачання продукції',
			[TranslationKeys.OWN_PRODUCTION]: 'Власне виробництво',
			[TranslationKeys.PRICES]: 'Адекватні ціни',
		},
	},
	[LanguageCodes.RU]: {
		translation: {
			[TranslationKeys.VERIFIER]: 'Верифицированный предприниматель',
			[TranslationKeys.SCHEDULE]: 'График работы',
			[TranslationKeys.SCHEDULE_WEEKENDS]: 'СБ-ВС: 10:00 - 16:00',
			[TranslationKeys.CONNECTION]: 'Связь',
			[TranslationKeys.PHONE]: 'Позвонить',
			[TranslationKeys.CART]: 'Корзина',
			[TranslationKeys.EMPTY_CART]: 'Упс, ваша корзина пуста!',
			[TranslationKeys.CONTINUE_BUYING]: 'Продолжить покупки',
			[TranslationKeys.TOTAL_SUM]: 'Всего',
			[TranslationKeys.MAKE_AN_ORDER]: 'Оформить заказ',
			[TranslationKeys.PAY_OPTIONS]: 'Платите',
			[TranslationKeys.SUBSCRIBE_TELEGRAM]:
				'Подписывайтесь на наш Telegram канал',
			[TranslationKeys.GOODS]: 'Товары',
			[TranslationKeys.YOUR_GOODS]: 'Здесь могут быть ваши товары',
			[TranslationKeys.GO_TO_ITEMS]: 'Перейти к каталогу',
			[TranslationKeys.QUALITY]: 'Высокое качество',
			[TranslationKeys.SPEED_SUPPLY]: 'Быстрая поставка продукции',
			[TranslationKeys.OWN_PRODUCTION]: 'Собственное производство',
			[TranslationKeys.PRICES]: 'Адекватные цены',
		},
	},
}

i18n.use(initReactI18next).init({
	resources,
	lng: 'ua',
	interpolation: {
		escapeValue: false,
	},
})

export default i18n
