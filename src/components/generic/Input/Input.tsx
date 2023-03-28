import React, { FC } from 'react'
import styles from './Input.module.scss'

export enum InputVariant {
	white = 'white',
	gray = 'gray'
}

interface InputProps {
	placeholder: string
	variant: InputVariant
	svg?: string
}

const Input: FC<InputProps> = ({ svg, placeholder, variant }) => {
	return (
		<div
			className={`${styles.input} ${
				variant === InputVariant.white ? styles.input_white : ''
			} ${variant === InputVariant.gray ? styles.input_gray : ''}`}
		>
			<input type='text' placeholder={placeholder} />
			{svg && <img src={svg} alt='input' />}
		</div>
	)
}

export default Input
