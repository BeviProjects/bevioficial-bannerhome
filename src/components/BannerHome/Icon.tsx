'use client'
import { BvIcon } from 'bevi-icon'
import React, {
	FC,
	HTMLAttributes,
	useContext,
	useEffect,
	useState,
} from 'react'

import { ThemeContext } from './Root'
import { SizeContext } from './Content'

interface IconProps
	extends HTMLAttributes<HTMLOrSVGElement> {
	name: string
	variant?: string
	size?: number
}

export const Icon: FC<IconProps> = ({ name }) => {
	const themeContext = useContext(ThemeContext)
	const sizeContext = useContext(SizeContext)

	const [iconColor, setIconColor] = useState('primary-02')
	const [iconVariant, setIconVariant] = useState('light')
	const [iconSize, setIconSize] = useState(4)

	const primaryOneList = ['two', 'eight', 'ten', 'thirteen']
	const primaryTwoList = [
		'one',
		'three',
		'four',
		'nine',
		'eleven',
		'fourteen',
		'fifteen',
	]
	const primaryThreeList = ['seven', 'sixteen']
	const violetSixtyList = ['five']
	const variantDuoList = ['six', 'twelve']

	useEffect(() => {
		if (primaryOneList.includes(themeContext)) {
			setIconColor('primary-01')
			setIconVariant('dark')
		} else if (primaryTwoList.includes(themeContext)) {
			setIconColor('primary-02')
			setIconVariant('light')
		} else if (primaryThreeList.includes(themeContext)) {
			setIconColor('primary-03')
			setIconVariant('light')
		} else if (violetSixtyList.includes(themeContext)) {
			setIconColor('violet-60')
			setIconVariant('light')
		} else if (variantDuoList.includes(themeContext)) {
			setIconVariant('duo')
		}
	}, [themeContext])

	useEffect(() => {
		if (sizeContext === 'xs') {
			setIconSize(2)
		} else {
			setIconSize(4)
		}
	}, [sizeContext])

	// five

	return (
		<BvIcon
			name={name}
			variant={iconVariant}
			size={iconSize}
			className={`color-${iconColor}`}
		/>
	)
}
