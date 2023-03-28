import React, { FC } from 'react'
import operator from 'assets/img/operator.png'

import styles from './Operator.module.scss'

interface OperatorProps {
    footer?: boolean
}

const Operator: FC<OperatorProps> = ({footer}) => {
	return (
		<div className={styles.card}>
			<div className={styles.card_operator}>
				<a className={`${styles.card_tel} ${footer && styles.card_f}`} href='tel:+77774900091'>
					+7 (777) 490-00-91
				</a>
				<span className={`${styles.card_time} ${footer && styles.card_f}`}>время работы: 9:00-20:00</span>
				<a className={`${styles.card_link} ${footer && styles.card_f}`} href='#'>
					Заказать звонок
				</a>
			</div>
			{!footer && <img className={styles.card_img} src={operator} alt='operator' />}
		</div>
	)
}

export default Operator
