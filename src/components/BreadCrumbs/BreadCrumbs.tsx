import React, { FC } from 'react'
import { Link } from 'react-router-dom'

import styles from './BreadCrumbs.module.scss'

interface BreadCrumbsProps {
  title: string
}

const BreadCrumbs: FC<BreadCrumbsProps> = ({ title }) => {
  return (
    <div className={styles.card}>
      <Link to='/' className={styles.text}>
        Главная
      </Link>
      <Link to='/' className={styles.text}>
        Каталог
      </Link>
      <span className={styles.text}>{title}</span>
    </div>
  )
}

export default BreadCrumbs
