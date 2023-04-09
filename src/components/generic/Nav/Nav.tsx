import React, { FC } from 'react'

import styles from './Nav.module.scss'

export enum NavVariant {
  header = 'header',
  footer = 'footer'
}

interface NavProps {
  variant: NavVariant
}

const Nav: FC<NavProps> = ({ variant }) => {
  return (
    <nav className={`${variant === NavVariant.header ? styles.nav_header : ''} ${variant === NavVariant.footer ? styles.nav_footer : ''}`}>
      <a role='nav' href='#' className={styles.link}>
        О компании
      </a>
      <a role='nav' href='#' className={styles.link}>
        Доставка и оплата
      </a>
      <a role='nav' href='#' className={styles.link}>
        Возврат
      </a>
      <a role='nav' href='#' className={styles.link}>
        Контакты
      </a>
    </nav>
  )
}

export default Nav
