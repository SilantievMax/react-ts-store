import React, { FC } from 'react'

import styles from './Layout.module.scss'

interface LayoutProps {
  children?: React.ReactChild | React.ReactNode
}

const Layout: FC<LayoutProps> = ({ children }) => {
  return <div className={styles.layout}>{children}</div>
}

export default Layout
