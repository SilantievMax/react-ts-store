import { useAppSelector } from 'hooks/redux'
import React, { FC, useEffect, useState } from 'react'

import styles from './ParamsPrice.module.scss'

const ParamsPrice: FC = () => {
  const { priceProduct } = useAppSelector(state => state.sortingReduxer)
  const [minPrice, setMinPrice] = useState(priceProduct[0])
  const [maxPrice, setMaxPrice] = useState(priceProduct[1])

  useEffect(() => {
    setMinPrice(priceProduct[0])
    setMaxPrice(priceProduct[1])
  }, [priceProduct])

  // const validMinPrice = (e: React.ChangeEvent<HTMLInputElement>) => {
  //   if (priceProduct[1] > +e.target.value) {
  //     setMinPrice(+e.target.value)
  //   }
  // }

  return (
    <div className={styles.continer}>
      <h4 className={styles.heading}>ПОДБОР ПО ПАРАМЕТРАМ</h4>
      <div className={styles.text}>
        Цена <span>₸</span>
      </div>
      <div className={styles.inputs}>
        <input onChange={e => setMinPrice(+e.target.value)} value={minPrice} className={styles.input} type='number' />
        -
        <input onChange={e => setMaxPrice(+e.target.value)} value={maxPrice} className={styles.input} type='number' />
      </div>
    </div>
  )
}

export default ParamsPrice
