import React, { FC } from 'react'

import AsideParameters from 'components/Catalog/AsideParameters/AsideParameters'
import Cards from 'components/Catalog/Cards/Cards'
import ListTypeCare from 'components/Catalog/components/ListTypeCare/ListTypeCare'
import TypeCare from 'components/Catalog/components/ListTypeCare/TypeCare/TypeCare'
import Sorting from 'components/Catalog/components/Sorting/Sorting'

import styles from './Catalog.module.scss'

const Catalog: FC = () => {
  return (
    <div className={styles.sorting}>
      <Sorting heading='Косметика и гигиена' />
      <ListTypeCare />
      <div className={styles.section}>
        <AsideParameters />
        <Cards />
      </div>
      <div style={{ textAlign: 'center' }}>Кнопки постраничного перехода</div>
    </div>
  )
}

export default Catalog
