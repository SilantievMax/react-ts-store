import React, { FC } from 'react'

import Nav, { NavVariant } from 'components/generic/Nav/Nav'

import styles from './TopHeader.module.scss'

const TopHeader: FC = () => {
  return (
    <div className={styles.wrapper}>
      <div className={styles.left_block}>
        <a
          href='https://yandex.ru/maps/20809/kokshetau/house/YkAYcgdnT0cGQFtpfX53eX1gYw==/?ll=69.410177%2C53.267530&z=16.19'
          target='_blank'
          className={styles.contact}
        >
          г. Кокчетав, ул. Ж. Ташенова 129Б <span>(Рынок Восточный)</span>
        </a>
        <a href='mailto:opt.sultan@mail.ru' className={styles.contact}>
          opt.sultan@mail.ru
          <span>На связи в любое время</span>
        </a>
      </div>
      <div className={styles.right_block}>
        <Nav variant={NavVariant.header} />
      </div>
    </div>
  )
}

export default TopHeader
