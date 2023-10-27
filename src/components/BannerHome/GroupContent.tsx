import React, {
	FC,
	HTMLAttributes,
	ReactNode,
	useContext,
} from 'react'
import styles from './GroupContent.module.scss'
import { ThemeContext } from './Root'

interface GroupContentProps
	extends HTMLAttributes<HTMLDivElement> {
	quote?: boolean
	gap?: '0' | 'xs' | 'sm' | 'md' | 'lg' | 'xl'
	children: ReactNode
}

export const GroupContent: FC<GroupContentProps> = ({
	quote,
	gap = 'md',
	children,
}) => {
	const themeContext = useContext(ThemeContext)
	return (
		<div
			data-theme={themeContext}
			className={`ps-relative ds-flex-start flow-col-nw gap-${gap} ${
				quote && styles.Quote
			}`}>
			{children}
		</div>
	)
}
