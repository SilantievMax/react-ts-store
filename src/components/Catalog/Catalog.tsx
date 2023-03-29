import React, { FC } from 'react'
import styles from './Catalog.module.scss'
import Sorting from 'components/Catalog/components/Sorting/Sorting'
import TypeCare from 'components/Catalog/components/ListTypeCare/TypeCare/TypeCare'
import AsideParameters from 'components/Catalog/components/AsideParameters/AsideParameters'
import ListTypeCare from './components/ListTypeCare/ListTypeCare'

const Catalog: FC = () => {
	return (
		<div className={styles.sorting}>
			<Sorting heading='Косметика и гигиена' />
			<ListTypeCare />
			<div className={styles.section}>
				<AsideParameters />
				<section> section</section>
			</div>
			<div style={{ textAlign: 'center' }}>Кнопки постраничного перехода</div>
		</div>
	)
}

export default Catalog
