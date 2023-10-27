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

interface DescriptionProps
	extends HTMLAttributes<HTMLParagraphElement> {
	size?: string
	color?: string
	children: ReactNode
	className?: string
}

export const Description: FC<DescriptionProps> = ({
	size = 'lg',
	color,
	children,
	className,
}) => {
	const [theme, setTheme] = useState('')
	const themeContext = useContext(ThemeContext)

	// Theme
	const primaryThreeList = [
		'one',
		'three',
		'four',
		'five',
		'seven',
		'nine',
		'eleven',
		'fourteen',
		'fourteen',
		'sixteen',
	]
	const grayFiftyList = ['six', 'twelve']
	const violetFortytyList = [
		'two',
		'eight',
		'ten',
		'thirteen',
	]

	useEffect(() => {
		if (primaryThreeList.includes(themeContext)) {
			setTheme('primary-03')
		} else if (grayFiftyList.includes(themeContext)) {
			setTheme('gray-50')
		} else if (violetFortytyList.includes(themeContext)) {
			setTheme('violet-40')
		}
	}, [themeContext])

	return (
		<p
			className={`font-size-${size} sm:font-size-md color-${
				color ? color : theme
			} text-align-${
				themeContext === 'twelve' ? 'center' : 'left'
			} ${className}`}>
			{children}
		</p>
	)
}
