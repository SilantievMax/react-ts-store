import Input, { InputVariant } from 'components/generic/Input/Input'
import React, { FC } from 'react'
import styles from './ParamsManufacturer.module.scss'
import search from 'assets/svg/search.svg'

const ParamsManufacturer: FC = () => {
	return (
		<div className={styles.continer}>
			<h4 className={styles.heading}>Производитель</h4>
			<div className={styles.input_block}>
				<Input
					variant={InputVariant.gray}
					placeholder='Поиск...'
					svg={search}
				/>
			</div>
			<div className={styles.inputs}>
				<label className={styles.label}>
					<input className={styles.input} type='checkbox' />
					Grifon
					<span>(34)</span>
				</label>
				<label className={styles.label}>
					<input className={styles.input} type='checkbox' />
					Boyscout
					<span>(34)</span>
				</label>
				<label className={styles.label}>
					<input className={styles.input} type='checkbox' />
					Paclan
					<span>(34)</span>
				</label>
				<label className={styles.label}>
					<input className={styles.input} type='checkbox' />
					Булгари Грин
					<span>(34)</span>
				</label>
			</div>
		</div>
	)
}

export default ParamsManufacturer
