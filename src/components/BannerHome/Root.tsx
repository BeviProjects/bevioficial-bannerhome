'use client'
import React, {
	FC,
	HTMLAttributes,
	ReactNode,
	createContext,
} from 'react'

import styles from './Root.module.scss'

const ThemeContext = createContext('')

interface RootProps extends HTMLAttributes<HTMLDivElement> {
	theme:
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
	children: ReactNode
	className?: string
	height?: string
}

const Root: FC<RootProps> = ({
	theme,
	children,
	className,
	height,
	...props
}) => {
	return (
		<ThemeContext.Provider value={theme}>
			<div
				data-theme={theme}
				className={`${styles.Root} ${className}`}
				style={{ height: height ? height : '80vh' }}
				{...props}>
				<div className='bv-container-md h-100'>
					<div className='bv-row align-stretch h-100 ps-relative gap-lg'>
						{children}
					</div>
				</div>
			</div>
		</ThemeContext.Provider>
	)
}

export { Root, ThemeContext }
