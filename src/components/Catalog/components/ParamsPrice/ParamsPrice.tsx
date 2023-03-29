import React, { FC } from 'react'

import styles from './ParamsPrice.module.scss'

const ParamsPrice: FC = () => {
  return (
    <div className={styles.continer}>
      <h4 className={styles.heading}>ПОДБОР ПО ПАРАМЕТРАМ</h4>
      <div className={styles.text}>
        Цена <span>₸</span>
      </div>
      <div className={styles.inputs}>
        <input value='0' className={styles.input} type='number' />
        -
        <input value='1000000' className={styles.input} type='number' />
      </div>
    </div>
  )
}

export default ParamsPrice
