import React, { FC } from 'react'
import { Link } from 'react-router-dom'

import Basket from 'components/generic/Basket/Basket'
import Button from 'components/generic/Button/Button'
import Input, { InputVariant } from 'components/generic/Input/Input'
import Logo from 'components/generic/Logo/Logo'
import Operator from 'components/generic/Operator/Operator'

import arrow from 'assets/svg/arrow.svg'
import catalog from 'assets/svg/catalog.svg'
import search from 'assets/svg/search.svg'

import styles from './BottomHeader.module.scss'

const BottomHeader: FC = () => {
  return (
    <div className={styles.continer}>
      <Logo itColorBlack />
      <Button text='Каталог' svg={catalog} />
      <Input variant={InputVariant.gray} svg={search} placeholder='Поиск...' />
      <Operator />
      <Button text='Прайс-лист' svg={arrow} />
      <Link to={'basket'}>
        <Basket />
      </Link>
    </div>
  )
}

export default BottomHeader
