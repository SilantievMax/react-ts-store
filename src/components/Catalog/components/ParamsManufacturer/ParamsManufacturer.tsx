import { useAppSelector } from 'hooks/redux'
import React, { FC } from 'react'

import Input, { InputVariant } from 'components/generic/Input/Input'

import search from 'assets/svg/search.svg'

import styles from './ParamsManufacturer.module.scss'

const ParamsManufacturer: FC = () => {
  const { manufacturerProduct } = useAppSelector(state => state.sortingReduxer)

  return (
    <div className={styles.continer}>
      <h4 className={styles.heading}>Производитель</h4>
      <div className={styles.input_block}>
        <Input
          variant={InputVariant.gray}
          placeholder='Поиск...'
          svg={search}
        />
      </div>
      <div className={styles.inputs}>
        {manufacturerProduct.map(manufacturer => (
          <label className={styles.label}>
            <input className={styles.input} type='checkbox' />
            {manufacturer.name}
            <span>({manufacturer.count / 2})</span>
          </label>
        ))}
      </div>
    </div>
  )
}

export default ParamsManufacturer
