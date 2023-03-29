import React, { FC } from 'react'

import styles from './TypeCare.module.scss'

interface TypeCareProps {
	text: string
	isAsideBloc: boolean
}

const TypeCare: FC<TypeCareProps> = ({ text, isAsideBloc }) => {
	return (
		<label className={`${styles.label} ${isAsideBloc && styles.unlabel}`}>
			{text}
			<input className={styles.input} type='radio' name='typecare' />
		</label>
	)
}

export default TypeCare
