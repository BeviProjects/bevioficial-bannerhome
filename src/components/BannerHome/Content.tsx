import React, {
	FC,
	HTMLAttributes,
	ReactNode,
	useContext,
	createContext,
} from 'react'
import { ThemeContext } from './Root'

import styles from './Content.module.scss'

const SizeContext = createContext('')

interface ContentProps
	extends HTMLAttributes<HTMLDivElement> {
	size?: 'auto' | 'md' | 'sm' | 'xs'
	quote?: boolean
	children: ReactNode
	className?: string
}

const Content: FC<ContentProps> = ({
	size = 'auto',
	children,
	className,
	...props
}) => {
	const themeContext = useContext(ThemeContext)
	return (
		<SizeContext.Provider value={size}>
			<div
				data-theme={themeContext}
				className={`bv-col is-05 ${styles.Column} ds-flex flow-col-nw justify-center align-start p-block-16 lg:pb-00 lg:pt-10`}
				{...props}>
				<div
					className={`${styles.Content} ds-flex flow-col-nw justify-center align-start gap-lg`}>
					{children}
				</div>
			</div>
		</SizeContext.Provider>
	)
}

export { Content, SizeContext }
