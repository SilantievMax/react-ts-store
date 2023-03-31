import React, { FC } from 'react'
import { IProduc } from 'types/types'

import Card from 'components/Catalog/components/Card/Card'

import styles from './Cards.module.scss'

interface CardProps {
  products: IProduc[]
}

const Cards: FC<CardProps> = ({ products }) => {
  return (
    <div className={styles.cards}>
      {products.map(product => (
        <Card key={product.id} product={product} />
      ))}
    </div>
  )
}

export default Cards
