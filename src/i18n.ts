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
	CLOTHES = 'clothes',
	SHOES = 'shoes',
	NEW_DROPS = 'new_drops',
	PRODUCT_NAME = 'product_name',
	SEND = 'send',
	NEED_HELP = 'need_help',
	HELP_TEXT = 'help_text',
	WILL_RESPOND = 'will_respond',
	YOUR_NAME = 'your_name',
	ABOUT_US = 'about_us',
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
			[TranslationKeys.CLOTHES]: 'Одяг',
			[TranslationKeys.SHOES]: 'Взуття',
			[TranslationKeys.NEW_DROPS]: 'Нові надходження',
			[TranslationKeys.PRODUCT_NAME]: 'Назва',
			[TranslationKeys.SEND]: 'ВІДПРАВИТИ',
			[TranslationKeys.NEED_HELP]: 'Потрібна допомога?',
			[TranslationKeys.HELP_TEXT]:
				'Телефонуйте нам за контактним номером або заповніть форму ',
			[TranslationKeys.WILL_RESPOND]: 'і ми відповімо на всі ваші запитання',
			[TranslationKeys.YOUR_NAME]: 'Ваше імʼя',
			[TranslationKeys.ABOUT_US]: 'Про нас',
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
			[TranslationKeys.CLOTHES]: 'Одежда',
			[TranslationKeys.SHOES]: 'Обувь',
			[TranslationKeys.NEW_DROPS]: 'Новые поступления',
			[TranslationKeys.PRODUCT_NAME]: 'Название',
			[TranslationKeys.SEND]: 'ОТПРАВИТЬ',
			[TranslationKeys.NEED_HELP]: 'Нужна помощь?',
			[TranslationKeys.HELP_TEXT]:
				'Звоните нам по контактному номеру или заполните форму ',
			[TranslationKeys.WILL_RESPOND]: 'и мы ответим на все ваши вопросы',
			[TranslationKeys.YOUR_NAME]: 'Ваше имя',
			[TranslationKeys.ABOUT_US]: 'О нас',
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
