import { useAppDispatch, useAppSelector } from 'hooks/redux'
import React, { FC, useEffect } from 'react'
import { useParams } from 'react-router-dom'

import BreadCrumbs from 'components/BreadCrumbs/BreadCrumbs'
import CardOneProduct from 'components/CardOneProduct/CardOneProduct'

import { getProducOne } from 'store/reducers/ProductSlice'

const CardProductPages: FC = () => {
  const dispatch = useAppDispatch()
  const { id } = useParams()

  const { product } = useAppSelector(state => state.productReduxer)

  useEffect(() => {
    dispatch(getProducOne(id))
  }, [])

  return (
    <div>
      <BreadCrumbs title={product?.title} />
      <CardOneProduct data={product} />
    </div>
  )
}

export default CardProductPages
