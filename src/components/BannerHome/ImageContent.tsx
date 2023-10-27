'use client'
import Image from 'next/image'
import React, {
	FC,
	HTMLAttributes,
	useContext,
	useEffect,
	useState,
} from 'react'
import { ThemeContext } from './Root'
import styles from './ImageContent.module.scss'

interface ImageContentProps
	extends HTMLAttributes<HTMLDivElement> {
	src: string
	min?: boolean
}

export const ImageContent: FC<ImageContentProps> = ({
	src,
	min,
}) => {
	const themeContext = useContext(ThemeContext)
	const [theme, setTheme] = useState('false')

	const minList = ['thirteen', 'fourteen', 'fifteen']

	useEffect(() => {
		if (minList.includes(themeContext)) {
			setTheme('true')
		} else {
			setTheme('false')
		}
	}, [themeContext])

	return (
		<>
			{themeContext === 'twelve' ? null : (
				<div
					className={`bv-col ${styles.Content} ps-relative ds-flex-center`}>
					<div
						className={`${styles.Image} ${
							min ? styles.true : styles[theme]
						}`}
						style={{
							backgroundImage: `${src}`,
						}}
					/>
				</div>
			)}
		</>
	)
}
