import { useAppDispatch, useAppSelector } from 'hooks/redux'
import React, { FC, useEffect } from 'react'

import { getTypeProduct } from 'store/reducers/SortingSlice'

import styles from './ListTypeCare.module.scss'
import TypeCare from './TypeCare/TypeCare'

interface ListTypeCareProps {
  heading?: string
}

const ListTypeCare: FC<ListTypeCareProps> = ({ heading }) => {
  const isAsideBloc = heading ? true : false
  const dispatch = useAppDispatch()
  const { products } = useAppSelector(state => state.productReduxer)
  const { typeProducts } = useAppSelector(state => state.sortingReduxer)

  useEffect(() => {
    dispatch(getTypeProduct(products))
  }, [products])

  return (
    <div className={`${styles.type_care} ${heading && styles.inAside}`}>
      <h4 className={styles.heading}>{heading}</h4>

      {typeProducts &&
        typeProducts.map((product, index) => (
          <TypeCare key={index} isAsideBloc={isAsideBloc} text={product} />
        ))}
    </div>
  )
}

export default ListTypeCare
