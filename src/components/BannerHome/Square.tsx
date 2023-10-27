import React, {
	FC,
	HTMLAttributes,
	useContext,
} from 'react'
import { ThemeContext } from './Root'

import styles from './Square.module.scss'

interface SquareProps
	extends HTMLAttributes<HTMLDivElement> {}

export const Square: FC<SquareProps> = () => {
	const themeContext = useContext(ThemeContext)

	return (
		<div
			data-theme={themeContext}
			className={`${styles.Content} w-100 ps-absolute`}>
			<div className='bv-row h-100 align-stretch'>
				{themeContext === 'sixteen' ? null : (
					<div className='bv-col is-05' />
				)}
				<div className='bv-col ps-relative'>
					<div className={`${styles.Square} ps-absolute`} />
				</div>
			</div>
		</div>
	)
}
