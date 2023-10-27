'use client'
import React, {
	FC,
	HTMLAttributes,
	ReactNode,
	useContext,
	useEffect,
	useState,
} from 'react'
import { ThemeContext } from './Root'
import styles from './Button.module.scss'

interface ButtonProps
	extends HTMLAttributes<HTMLLinkElement> {
	bgc?: string
	color?: string
	href: string
	children: ReactNode
	target?: string
	className?: string
}

export const Button: FC<ButtonProps> = ({
	bgc,
	color,
	href,
	children,
	target = 'self',
	className,
}) => {
	const [theme, setTheme] = useState({ bgc: '', color: '' })
	const themeContext = useContext(ThemeContext)

	// Theme
	const primaryOneList = ['two', 'eight', 'ten', 'thirteen']
	const primaryTwoList = [
		'one',
		'three',
		'four',
		'five',
		'six',
		'seven',
		'nine',
		'eleven',
		'twelve',
		'fourteen',
		'fifteen',
		'sixteen',
	]

	useEffect(() => {
		if (primaryOneList.includes(themeContext)) {
			setTheme({ bgc: 'primary-01', color: 'primary-03' })
		} else if (primaryTwoList.includes(themeContext)) {
			setTheme({ bgc: 'primary-02', color: 'primary-01' })
		}
	}, [themeContext])

	return (
		<a
			href={href}
			className={`${styles.Button} bgc-${
				bgc ? bgc : theme.bgc
			} color-${color ? color : theme.color} ${className}`}
			target={`_${target}`}
			rel='noopener noreferrer'>
			{children}
			<i className='bv-chevron-forward-solid' />
		</a>
	)
}
