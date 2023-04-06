import { useAppDispatch, useAppSelector } from 'hooks/redux'
import React, { FC, useEffect } from 'react'

import AsideParameters from 'components/Catalog/AsideParameters/AsideParameters'
import Cards from 'components/Catalog/Cards/Cards'
import ListTypeCare from 'components/Catalog/components/ListTypeCare/ListTypeCare'

import Loading from 'components/generic/Loading/Loading'

import { getManufacturer, getTypeProduct, grtPriceProduct } from 'store/reducers/SortingSlice'

import styles from './Catalog.module.scss'

const Catalog: FC = () => {
  const dispatch = useAppDispatch()

  const { products, isLoading } = useAppSelector(state => state.productReduxer)

  useEffect(() => {
    dispatch(getTypeProduct(products))
    dispatch(grtPriceProduct(products))
    dispatch(getManufacturer(products))
  }, [products])

  return (
    <div className={styles.sorting}>
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
