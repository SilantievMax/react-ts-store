import { useAppDispatch, useAppSelector } from 'hooks/redux'
import React, { FC, useEffect } from 'react'
import { useParams } from 'react-router-dom'

import BreadCrumbs from 'components/BreadCrumbs/BreadCrumbs'
import Card from 'components/Card/Card'

import { getProducOne } from 'store/reducers/ProductSlice'

const CardProduct: FC = () => {
  const dispatch = useAppDispatch()
  const { id } = useParams()

  useEffect(() => {
    dispatch(getProducOne(id))
  }, [id])
  const { product } = useAppSelector(state => state.productReduxer)

  return (
    <div>
      <BreadCrumbs title={product?.title} />
      <Card data={product} />
    </div>
  )
}

export default CardProduct
