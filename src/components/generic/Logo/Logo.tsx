import React, { FC } from 'react'

import logoBlack from 'assets/svg/logo-black.svg'
import logoWhite from 'assets/svg/logo-white.svg'

import styles from './Logo.module.scss'

interface LogoProps {
  itColorBlack?: boolean
}

const Logo: FC<LogoProps> = ({ itColorBlack }) => {
  return (
    <div>
      <a href='#'>
        <img
          className={styles.img}
          src={itColorBlack ? logoBlack : logoWhite}
          alt='logo'
        />
      </a>
    </div>
  )
}

export default Logo
