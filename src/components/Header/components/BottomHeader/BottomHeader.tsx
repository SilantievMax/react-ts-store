import React, { FC } from 'react'
import basker from 'assets/svg/basket.svg'
import catalog from 'assets/svg/catalog.svg'
import arrow from 'assets/svg/arrow.svg'
import search from 'assets/svg/search.svg'

import styles from './BottomHeader.module.scss'
import Button from 'components/generic/Button/Button'
import Input, { InputVariant } from 'components/generic/Input/Input'
import Logo from 'components/generic/Logo/Logo'
import Operator from 'components/generic/Operator/Operator'

const Basket: FC = () => {
	return (
		<div className={styles.basker}>
			<div className={styles.basker_top}>
				<img src={basker} alt='basker' />
				<span className={styles.basker_notifications}>3</span>
			</div>
			<div className={styles.basker_bottom}>
				<span className={styles.basker_text}>Корзина</span>
				<span className={styles.basker_pice}>12 478 ₸</span>
			</div>
		</div>
	)
}

const BottomHeader: FC = () => {
	return (
		<div className={styles.continer}>
			<Logo itColorBlack />
			<Button text='Каталог' svg={catalog} />
			<Input variant={InputVariant.gray} svg={search} placeholder='Поиск...' />
			<Operator />
			<Button text='Прайс-лист' svg={arrow} />
			<Basket />
		</div>
	)
}

export default BottomHeader
