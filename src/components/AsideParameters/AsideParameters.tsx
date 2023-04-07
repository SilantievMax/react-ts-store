import React, { FC, useState } from 'react'

import ParamsManufacturer from 'components/AsideParameters/components/ParamsManufacturer/ParamsManufacturer'
import ParamsPrice from 'components/AsideParameters/components/ParamsPrice/ParamsPrice'
import Button from 'components/generic/Button/Button'

import deleteSvg from 'assets/svg/delete.svg'

import ListTypeCare from '../Catalog/components/ListTypeCare/ListTypeCare'

import styles from './AsideParameters.module.scss'

interface Imanufacturer {
  name: string
  count: number
}

const AsideParameters: FC = () => {
  const [manufacturer, setManufacturer] = useState()
  const [price, setPrice] = useState()
  const sortingByParams = () => {
    console.log('sorting')
    // console.log(manufacturer)
    // console.log(price)
  }

  const remiveParams = () => {
    console.log('remove')
  }
  return (
    <aside>
      <ParamsPrice />
      <ParamsManufacturer />
      <div className={styles.btns}>
        <Button onClick={sortingByParams} text='Показать' />
        <Button onClick={remiveParams} text='' svg={deleteSvg} />
      </div>
      <div>
        <ListTypeCare heading=' ' />
      </div>
    </aside>
  )
}

export default AsideParameters
