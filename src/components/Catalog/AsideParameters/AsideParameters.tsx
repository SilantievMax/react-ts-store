import React, { FC } from 'react'

import ParamsManufacturer from 'components/Catalog/components/ParamsManufacturer/ParamsManufacturer'
import ParamsPrice from 'components/Catalog/components/ParamsPrice/ParamsPrice'
import Button from 'components/generic/Button/Button'

import deleteSvg from 'assets/svg/delete.svg'

import ListTypeCare from '../components/ListTypeCare/ListTypeCare'

import styles from './AsideParameters.module.scss'

const AsideParameters: FC = () => {
  return (
    <aside>
      <ParamsPrice />
      <ParamsManufacturer />
      <div className={styles.btns}>
        <Button text='Показать' />
        <Button text='' svg={deleteSvg} />
      </div>
      <div>
        <ListTypeCare heading='Уход за телом...' />
      </div>
    </aside>
  )
}

export default AsideParameters
