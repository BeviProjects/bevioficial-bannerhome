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
import { SizeContext } from './Content'

interface TitleProps
	extends HTMLAttributes<HTMLHeadingElement> {
	size?: string
	color?: string
	children: ReactNode
	className?: string
}

export const Title: FC<TitleProps> = ({
	size,
	color,
	children,
	className,
}) => {
	const [titleSize, setTitleSize] = useState('md')
	const [theme, setTheme] = useState('')
	const themeContext = useContext(ThemeContext)
	const sizeContext = useContext(SizeContext)

	// Theme
	const primaryOneList = ['two', 'eight', 'ten', 'thirteen']
	const primaryTwoList = [
		'one',
		'three',
		'four',
		'five',
		'nine',
		'eleven',
		'fourteen',
		'fifteen',
	]
	const primaryThreeList = ['seven', 'sixteen']
	const violetFortytyList = ['six', 'twelve']

	useEffect(() => {
		if (primaryOneList.includes(themeContext)) {
			setTheme('primary-01')
		} else if (primaryTwoList.includes(themeContext)) {
			setTheme('primary-02')
		} else if (primaryThreeList.includes(themeContext)) {
			setTheme('primary-03')
		} else if (violetFortytyList.includes(themeContext)) {
			setTheme('violet-40')
		}
	}, [themeContext])

	// Size
	useEffect(() => {
		if (sizeContext === 'auto') {
			const childrenString = String(children)
			if (childrenString.length <= 12) {
				setTitleSize('md sm:title-md')
			} else if (childrenString.length <= 15) {
				setTitleSize('sm sm:title-md')
			} else {
				setTitleSize('xs sm:title-md')
			}
		} else {
			setTitleSize(sizeContext)
		}
	}, [sizeContext, children])

	return (
		<h2
			data-theme={themeContext}
			className={`display-${titleSize} w-100 font-weight-600 color-${
				color ? color : theme
			} text-align-${
				themeContext === 'twelve' ? 'center' : 'left'
			} ${className}`}>
			{children}
		</h2>
	)
}
