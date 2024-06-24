import React from 'react'
import { useTranslation } from 'react-i18next'
import { TranslationKeys } from '../../i18n'

export const Description: React.FC = () => {
	const [isMore, setMore] = React.useState(false)
	const { t } = useTranslation()

	return (
		<div
			className={`${
				isMore ? 'bg-white' : 'bg-gradient-to-t from-[#818181] to-white '
			} md:px-14 xl:px-10 px-5 md:py-10 xl:py-8 py-4 rounded-lg shadow-lg transition-all relative 2xl:text-lg xl:text-base lg:text-sm sm:text-xs text-[10px]`}
		>
			<div className='flex items-center gap-4 sm:mb-7 mb-4'>
				<div
					className={`h-[1px] grow ${
						[].length ? 'bg-[#e7eae8]' : 'bg-[#eaedeb]'
					}`}
				></div>
				<div className='sm:text-2xl text-base font-medium'>
					{t(TranslationKeys.DESCRIPTION)}
				</div>
				<div
					className={`h-[1px] grow ${
						[].length ? 'bg-[#e7eae8]' : 'bg-[#eaedeb]'
					}`}
				></div>
			</div>
			<div>
				<div className='text-center text-sm sm:text-xl font-medium mb-2 sm:mb-3'>
					Name of the product
				</div>
				<p className={`${!isMore ? 'h-80 overflow-hidden' : 'mb-3'}`}>
					Lorem ipsum dolor sit amet consectetur adipisicing elit. Quo
					consequuntur inventore in facilis nam voluptates deserunt suscipit
					ipsum tenetur aut eligendi quidem libero recusandae quos earum
					excepturi, voluptate expedita velit officiis odit alias nesciunt. Quas
					veritatis similique dolore sint nemo, debitis illo possimus? Error
					velit cum amet nesciunt tempora iste atque excepturi consequuntur
					expedita illum aliquid, ad maiores soluta voluptatem dolorem ipsam
					enim. Eaque voluptatum perspiciatis nulla architecto sit dolorem
					fugiat omnis deleniti eveniet, accusamus itaque quos laboriosam optio,
					alias non tempore facilis! Maiores dolore eum vero at eius, illum,
					reiciendis esse deleniti fuga laborum sunt aliquam doloremque est
					voluptates a impedit. Maiores dolorem nam nostrum quae sapiente modi
					ipsum officia quia. Culpa at quidem ullam dolore dolor perferendis
					laboriosam atque veniam sapiente possimus adipisci obcaecati alias
					eius, suscipit voluptas. Quibusdam deserunt odit, commodi obcaecati
					modi doloribus nam velit. Consequatur excepturi suscipit voluptates
					perspiciatis, fugiat tempora veritatis beatae. Enim voluptatibus
					obcaecati saepe, maxime reprehenderit, voluptate veniam doloremque est
					cupiditate harum reiciendis ducimus quae ipsam, debitis soluta vitae
					necessitatibus quidem asperiores explicabo? Reiciendis hic ipsam odio
					esse voluptatum optio laborum dignissimos deserunt harum. Placeat
					voluptas cumque harum! Laborum quia recusandae nisi maiores tempore
					obcaecati suscipit beatae minus, architecto blanditiis dolorem
					aliquam! Lorem ipsum dolor sit amet consectetur adipisicing elit. Eum
					assumenda nesciunt et fuga minima, vitae tempora ullam optio quod
					consequuntur, similique debitis incidunt? Consequuntur dolorem vitae
					dolores libero, mollitia suscipit? Lorem ipsum dolor sit amet
					consectetur adipisicing elit. Eum assumenda nesciunt et fuga minima,
					vitae tempora ullam optio quod consequuntur, similique debitis
					incidunt? Consequuntur dolorem vitae dolores libero, mollitia
					suscipit?
				</p>
				<div
					className={`flex justify-center ${
						!isMore && 'absolute bottom-5 left-1/2 -translate-x-1/2'
					}`}
				>
					<div
						className='inline-flex items-center gap-2 bg-[#426f77] text-white font-light px-6 py-2 rounded-lg cursor-pointer'
						onClick={() => setMore((prev) => !prev)}
					>
						<div>
							{isMore ? t(TranslationKeys.LESS) : t(TranslationKeys.MORE)}
						</div>
						<div>
							{isMore ? (
								<svg
									width='15'
									height='9'
									viewBox='0 0 15 9'
									fill='none'
									xmlns='http://www.w3.org/2000/svg'
								>
									<path
										d='M10.5655 5.51986L7.443 2.23874L4.42972 5.40433C2.04967 7.92294 1.30727 8.56992 0.826887 8.56992C0.259169 8.56992 0.128156 8.38507 0.237333 7.64566C0.259169 7.46081 1.76581 5.70471 3.57814 3.78687C6.11104 1.08341 7.02812 0.251579 7.443 0.251579C7.85787 0.251579 8.77495 1.08341 11.286 3.78687C13.0984 5.70471 14.6487 7.48391 14.7142 7.69187C14.8452 8.10779 14.3648 8.80098 13.9499 8.80098C13.8189 8.80098 12.2904 7.32217 10.5655 5.51986Z'
										fill='white'
									/>
								</svg>
							) : (
								<svg
									width='15'
									height='9'
									viewBox='0 0 15 9'
									fill='none'
									xmlns='http://www.w3.org/2000/svg'
								>
									<path
										d='M4.64158 3.5327L7.76403 6.81382L10.7773 3.64823C13.1574 1.12962 13.8998 0.482639 14.3801 0.482639C14.9479 0.482639 15.0789 0.667492 14.9697 1.4069C14.9479 1.59175 13.4412 3.34785 11.6289 5.26568C9.09599 7.96915 8.17891 8.80098 7.76403 8.80098C7.34916 8.80098 6.43208 7.96914 3.92101 5.26568C2.10868 3.34784 0.558371 1.56864 0.492865 1.36069C0.361853 0.944768 0.842231 0.251573 1.2571 0.251573C1.38811 0.251573 2.91659 1.73039 4.64158 3.5327Z'
										fill='white'
									/>
								</svg>
							)}
						</div>
					</div>
				</div>
			</div>
		</div>
	)
}
