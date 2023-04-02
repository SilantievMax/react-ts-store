import React from 'react'

import BreadCrumbs from 'components/BreadCrumbs/BreadCrumbs'
import CardProduct from 'components/CardProduct/CardProduct'

import styles from './Card.module.scss'

const Card = () => {
  return (
    <div>
      <BreadCrumbs />
      <CardProduct />
    </div>
  )
}

export default Card
