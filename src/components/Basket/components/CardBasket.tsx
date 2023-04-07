import React, { FC } from 'react'
import { IProduc } from 'types/types'

import Button from 'components/generic/Button/Button'

import del from 'assets/svg/delete.svg'

import styles from './CardBasket.module.scss'

interface CardBasketProps {
  data: IProduc
}

const CardBasket: FC<CardBasketProps> = ({ data }) => {
  return (
    <>
      <div className={styles.card}>
        <img className={styles.img} src={data.url_img} alt='' />
        <ul className={styles.list}>
          <li className={styles.item1}>{data.specifications.weight}</li>
          <li className={styles.item2}>{data.title}</li>
          <li className={styles.item3}>{data.description}</li>
        </ul>
        <div className={styles.price}>{data.price}</div>
        <Button text='' svg={del} />
      </div>
    </>
  )
}

export default CardBasket
