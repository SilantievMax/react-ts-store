import { useAppSelector } from 'hooks/redux'
import React, { FC, useState } from 'react'

import Input, { InputVariant } from 'components/generic/Input/Input'

import search from 'assets/svg/search.svg'

import styles from './ParamsManufacturer.module.scss'

// interface ParamsManufacturerProps {
//   getManufacturer: () => void
// }

const ParamsManufacturer: FC = ({}) => {
  const { manufacturerProduct } = useAppSelector(state => state.sortingReduxer)
  const [manufacturer, setManufacturer] = useState([])
  

  return (
    <div className={styles.continer}>
      <h4 className={styles.heading}>Производитель</h4>
      <div className={styles.input_block}>
        <Input variant={InputVariant.gray} placeholder='Поиск...' svg={search} />
      </div>
      <form className={styles.inputs}>
        {manufacturerProduct.map(manufacturer => (
          <label className={styles.label}>
            <input className={styles.input} name='' type='checkbox' />
            {manufacturer.name}
            <span>({manufacturer.count})</span>
          </label>
        ))}
      </form>
    </div>
  )
}

export default ParamsManufacturer
