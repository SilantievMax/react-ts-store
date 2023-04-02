import React from 'react'

import styles from './BreadCrumbs.module.scss'

const BreadCrumbs = () => {
  return (
    <div className={styles.card}>
      <span className={styles.text}>Главная</span>
      <span className={styles.text}>Каталог</span>
      <span className={styles.text}>Название товара</span>
    </div>
  )
}

export default BreadCrumbs
