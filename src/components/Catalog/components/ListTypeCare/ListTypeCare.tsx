import React, { FC } from 'react'

import styles from './ListTypeCare.module.scss'
import TypeCare from './TypeCare/TypeCare'

interface ListTypeCareProps {
  heading?: string
}

const ListTypeCare: FC<ListTypeCareProps> = ({ heading }) => {
  const isAsideBloc = heading ? true : false
  return (
    <div className={`${styles.type_care} ${heading && styles.inAside}`}>
      <h4 className={styles.heading}>{heading}</h4>

      <TypeCare isAsideBloc={isAsideBloc} text='Уход за телом' />
      <TypeCare isAsideBloc={isAsideBloc} text='Уход за телом' />
      <TypeCare isAsideBloc={isAsideBloc} text='Уход за телом' />
      <TypeCare isAsideBloc={isAsideBloc} text='Уход за телом' />
      <TypeCare isAsideBloc={isAsideBloc} text='Уход за телом' />
      <TypeCare isAsideBloc={isAsideBloc} text='Уход за телом' />
    </div>
  )
}

export default ListTypeCare
