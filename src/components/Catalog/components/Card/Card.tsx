import React, { FC } from 'react'
import { Link } from 'react-router-dom'
import { IProduc } from 'types/types'

import ButtonCard from 'components/generic/ButtonCard/ButtonCard'

import basket from 'assets/svg/basket-w.svg'
import g from 'assets/svg/g.svg'
import ml from 'assets/svg/ml.svg'

import styles from './Card.module.scss'

interface CardProps {
  product: IProduc
}

const Card: FC<CardProps> = ({ product }) => {
  const weight = product.specifications.weight
  const isWeight = weight[weight.length - 1] === 'л' ? ml : g

  return (
    <div className={styles.card}>
      <div className={styles.img_card}>
        <img className={styles.img} src={product.url_img} alt={product.title} />
      </div>
      <div className={styles.block_weight}>
        <div
          style={{
            backgroundImage: `url(${isWeight})`
          }}
          className={styles.weight_img}
        ></div>
        <span className={styles.weight}>{weight}</span>
      </div>
      <Link to={'product/' + product.id} className={styles.heading}>
        <span>{product.specifications.brand} </span>
        {product.title}
      </Link>
      <ul className={styles.list}>
        <li className={styles.item}>
          Штрихкод:
          <span>{product.barcode}</span>
        </li>
        <li className={styles.item}>
          Производитель:
          <span>{product.specifications.manufacturer}</span>
        </li>
        <li className={styles.item}>
          Бренд:
          <span>{product.specifications.brand}</span>
        </li>
      </ul>
      <div className={styles.card_price}>
        <span>{product.price} ₸</span> <ButtonCard text='В КОРЗИНУ' svg={basket} />
      </div>
    </div>
  )
}

export default Card
