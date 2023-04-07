import { useAppDispatch, useAppSelector } from 'hooks/redux'
import React, { FC, useEffect } from 'react'

import BreadCrumbs from 'components/BreadCrumbs/BreadCrumbs'

import styles from './Basket.module.scss'
import CardBasket from './components/CardBasket'
import { parsingProduct } from 'store/reducers/BasketSlice'

const Basket: FC = () => {
  const dispatch = useAppDispatch()
  const { products } = useAppSelector(state => state.basketReduxer)


  useEffect(() => {
    dispatch(parsingProduct())
  }, [])

  return (
    <>
      <BreadCrumbs />
      <h6 className={styles.heading}>Корзина</h6>
      {products && products.map(product => <CardBasket data={product} />)}
    </>
  )
}

export default Basket

