import React, { FC } from 'react'

import BottomHeader from 'components/Header/components/BottomHeader/BottomHeader'
import TopHeader from 'components/Header/components/TopHeader/TopHeader'
import Layout from 'components/Layout/Layout'

import styles from './Header.module.scss'

interface HeaderProps {}

const Header: FC<HeaderProps> = () => {
  return (
    <header className={styles.header}>
      <Layout>
        <TopHeader />
      </Layout>
      <div className={styles.line}></div>
      <Layout>
        <BottomHeader />
      </Layout>
      <div className={styles.line}></div>
    </header>
  )
}

export default Header
