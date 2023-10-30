import { BannerHome } from './components/BannerHome'

type bannerType = {
	id: string
	icon?: string
	title: string
	description?: string
	textBtn?: string
	typeBg?: string
	typeContent?: string
	theme: theme
	size?: 'auto' | 'md' | 'sm' | 'xs'
	verticalLine?: boolean
	linkBtn?: string
	targetLink?: 'self' | 'blank'
	hatTag?: string
	imgMain: string
	createdAt: string
}

type theme =
	| 'one'
	| 'two'
	| 'three'
	| 'four'
	| 'five'
	| 'six'
	| 'seven'
	| 'eight'
	| 'nine'
	| 'ten'
	| 'eleven'
	| 'twelve'
	| 'thirteen'
	| 'fourteen'
	| 'fifteen'
	| 'sixteen'

const data: bannerType[] = [
	{
		id: '1',
		icon: 'bank',
		title: 'Vem pra Bevi',
		description:
			'Enter a catchy caption for your customers here. Be creative and share good ideas.',
		textBtn: 'Seja parceiro Bevi',
		typeBg: 'primary-02',
		typeContent: 'light-01',
		theme: 'one',
		size: 'md',
		verticalLine: false,
		linkBtn: 'https://www.google.com',
		targetLink: 'self',
		hatTag: 'A número 1',
		imgMain: 'url(/src/assets/image/image-01.png)',
		createdAt: '2023-09-05 14:42:56',
	},
	{
		id: '2',
		icon: 'bank',
		title: 'Vem pra Bevi',
		description:
			'Enter a catchy caption for your customers here. Be creative and share good ideas.',
		textBtn: 'Seja parceiro Bevi',
		typeBg: 'primary-02',
		typeContent: 'light-01',
		theme: 'two',
		size: 'xs',
		verticalLine: true,
		linkBtn: '',
		targetLink: 'self',
		hatTag: 'A número 1',
		imgMain: 'url(/src/assets/image/image-01.png)',
		createdAt: '2023-09-05 14:42:56',
	},
	{
		id: '3',
		icon: 'bank',
		title: 'Vem pra Bevi',
		description:
			'Enter a catchy caption for your customers here. Be creative and share good ideas.',
		textBtn: 'Seja parceiro Bevi',
		typeBg: 'primary-02',
		typeContent: 'light-01',
		theme: 'three',
		size: 'xs',
		verticalLine: false,
		linkBtn: 'https://www.google.com',
		targetLink: 'self',
		hatTag: '',
		imgMain: 'url(/src/assets/image/image-01.png)',
		createdAt: '2023-09-05 14:42:56',
	},
]

function App() {
	return (
		<div className='App'>
			<section>
				{data.map((e, index) => (
					<BannerHome.Root key={index} theme={e.theme}>
						<BannerHome.Square />
						<BannerHome.Content size={e.size}>
							{e.icon && <BannerHome.Icon name={e.icon} />}
							<BannerHome.GroupContent
								quote={e.verticalLine}>
								{e.hatTag && (
									<BannerHome.HatTag>
										{e.hatTag}
									</BannerHome.HatTag>
								)}
								<BannerHome.Title>
									{e.title}
								</BannerHome.Title>
								{e.description && (
									<BannerHome.Description>
										{e.description}
									</BannerHome.Description>
								)}
							</BannerHome.GroupContent>
							{e.linkBtn && (
								<BannerHome.Button
									href={e.linkBtn}
									target={e.targetLink}>
									{e.textBtn ? e.textBtn : 'Clique aqui'}
								</BannerHome.Button>
							)}
						</BannerHome.Content>
						<BannerHome.ImageContent src={e.imgMain} />
					</BannerHome.Root>
				))}
			</section>
		</div>
	)
}

export default App
