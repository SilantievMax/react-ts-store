import { useAppDispatch, useAppSelector } from 'hooks/redux'
import React, { FC, useEffect, useState } from 'react'

import { fetchProducts } from 'utils/jsonGetProducts'

import { sortingType } from 'store/reducers/ProductSlice'

import styles from './TypeCare.module.scss'

interface TypeCareProps {
  text: string
  isAsideBloc: boolean
}

const TypeCare: FC<TypeCareProps> = ({ text, isAsideBloc }) => {
  const dispatch = useAppDispatch()

  return (
    <label className={`${styles.label} ${isAsideBloc && styles.unlabel}`}>
      {text}
      <input onChange={e => dispatch(sortingType(e.target.value))} className={styles.input} value={text} type='radio' name='typecare' />
    </label>
  )
}

export default TypeCare
