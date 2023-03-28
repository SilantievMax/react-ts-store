import React, { FC } from 'react'
import TopHeader from 'components/Header/components/TopHeader/TopHeader'
import BottomHeader from 'components/Header/components/BottomHeader/BottomHeader'

import styles from './Header.module.scss'
import Layout from 'components/Layout/Layout'

interface HeaderProps {}

const Header: FC<HeaderProps> = () => {
	return (
		<header>
			<Layout>
				<TopHeader />
			</Layout>
			<div className={styles.line}></div>
			<Layout>
				<BottomHeader />
			</Layout>
		</header>
	)
}

export default Header
