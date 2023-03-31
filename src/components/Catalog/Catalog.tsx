import { useAppDispatch, useAppSelector } from 'hooks/redux'
import React, { FC, useEffect } from 'react'

import AsideParameters from 'components/Catalog/AsideParameters/AsideParameters'
import Cards from 'components/Catalog/Cards/Cards'
import ListTypeCare from 'components/Catalog/components/ListTypeCare/ListTypeCare'
import TypeCare from 'components/Catalog/components/ListTypeCare/TypeCare/TypeCare'
import Sorting from 'components/Catalog/components/Sorting/Sorting'
import Loading from 'components/generic/Loading/Loading'

import { fetchProducts } from 'store/reducers/ProductSlice'

import styles from './Catalog.module.scss'

const Catalog: FC = () => {
  const dispatch = useAppDispatch()

  useEffect(() => {
    setTimeout(() => dispatch(fetchProducts()), 1000)
  }, [])

  const { products, isLoading } = useAppSelector(state => state.productReduxer)

  return (
    <div className={styles.sorting}>
      <Sorting heading='Косметика и гигиена' />
      <ListTypeCare />
      <div className={styles.section}>
        <AsideParameters />
        {isLoading ? <Loading /> : <Cards products={products} />}
      </div>
      <div style={{ textAlign: 'center' }}>Кнопки постраничного перехода</div>
    </div>
  )
}

export default Catalog
