import { useAppSelector } from 'hooks/redux'
import { FC } from 'react'

import basker from 'assets/svg/basket.svg'

import styles from './Basket.module.scss'

const Basket: FC = () => {
  const { basket } = useAppSelector(state => state.basketReduxer)

  return (
    <div className={styles.basker}>
      <div className={styles.basker_top}>
        <img src={basker} alt='basker' />
        <span className={styles.basker_notifications}>{basket.length}</span>
      </div>
      <div className={styles.basker_bottom}>
        <span className={styles.basker_text}>Корзина</span>
        <span className={styles.basker_pice}>12 478 ₸</span>
      </div>
    </div>
  )
}

export default Basket
