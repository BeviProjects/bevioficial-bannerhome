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

interface HatTag extends HTMLAttributes<HTMLSpanElement> {
	children: ReactNode
	color?: string
	className?: string
}

export const HatTag: FC<HatTag> = ({
	children,
	className,
	color,
	...props
}) => {
	const [theme, setTheme] = useState('')
	const themeContext = useContext(ThemeContext)

	const primaryOneList = ['two', 'eight', 'ten', 'thirteen']
	const primaryTwoList = ['seven', 'eleven', 'sixteen']
	const violetSixtyList = [
		'one',
		'three',
		'four',
		'five',
		'six',
		'nine',
		'twelve',
		'fourteen',
		'fifteen',
	]

	useEffect(() => {
		if (primaryOneList.includes(themeContext)) {
			setTheme('primary-01')
		} else if (primaryTwoList.includes(themeContext)) {
			setTheme('primary-02')
		} else if (violetSixtyList.includes(themeContext)) {
			setTheme('violet-60')
		}
	}, [themeContext])

	return (
		<span
			data-theme={themeContext}
			className={`title-xs sm:title-3xs color-${
				color ? color : theme
			} ${className}`}
			{...props}>
			{children}
		</span>
	)
}
