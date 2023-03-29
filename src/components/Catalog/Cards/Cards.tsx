import React, { FC } from 'react'

import Card from 'components/Catalog/components/Card/Card'

import styles from './Cards.module.scss'

const Cards: FC = () => {
  return (
    <div className={styles.cards}>
      <Card />
      <Card />
    </div>
  )
}

export default Cards
