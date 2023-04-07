import { useAppSelector } from 'hooks/redux'
import React, { FC } from 'react'

import styles from './ListTypeCare.module.scss'
import TypeCare from '../TypeCare/TypeCare'

interface ListTypeCareProps {
  heading?: string
}

const ListTypeCare: FC<ListTypeCareProps> = ({ heading }) => {
  const isAsideBloc = heading ? true : false
  const { typeProducts } = useAppSelector(state => state.sortingReduxer)

  return (
    <div className={`${styles.type_care} ${heading && styles.inAside}`}>
      <h4 className={styles.heading}>{heading}</h4>

      {typeProducts && typeProducts.map((product, index) => <TypeCare key={index} isAsideBloc={isAsideBloc} text={product} />)}
    </div>
  )
}

export default ListTypeCare
