import { useAppSelector } from 'hooks/redux'
import React, { FC } from 'react'

const BasketPages: FC = () => {
  const { basket } = useAppSelector(state => state.basketReduxer)
  return <div>{basket}</div>
}

export default BasketPages
