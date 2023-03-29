import React, { FC } from 'react'

import ButtonCard from 'components/generic/ButtonCard/ButtonCard'

import basket from 'assets/svg/basket-w.svg'
import g from 'assets/svg/g.svg'
import ml from 'assets/svg/ml.svg'

import styles from './Card.module.scss'

const Card: FC = () => {
  return (
    <div className={styles.card}>
      <img
        className={styles.img}
        src='https://avatars.mds.yandex.net/get-mpic/5288781/img_id4157364499445907505.jpeg/orig'
        alt=''
      />
      <div className={styles.block_weight}>
        <div
          style={{ backgroundImage: `url(${ml && g})` }}
          className={styles.weight_img}
        ></div>
        <span className={styles.weight}>450 мл</span>
      </div>
      <h4 className={styles.heading}>
        <span>AOS</span> средство для мытья посуды Crystal
      </h4>
      <ul className={styles.list}>
        <li className={styles.item}>
          Штрихкод:
          <span>4604049097548</span>
        </li>
        <li className={styles.item}>
          Производитель:
          <span>Нэфис</span>
        </li>
        <li className={styles.item}>
          Бренд:
          <span>AOS</span>
        </li>
      </ul>
      <div className={styles.card_price}>
        <span>48,76 ₸</span> <ButtonCard text='В КОРЗИНУ' svg={basket} />
      </div>
    </div>
  )
}

export default Card
