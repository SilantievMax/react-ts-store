import Catalog from 'components/Catalog/Catalog'
import Footer from 'components/Footer/Footer'
import Header from 'components/Header/Header'
import Layout from 'components/Layout/Layout'
import React, { FC } from 'react'

const App: FC = () => {
	return (
		<>
			<Header />
			<Layout>
				<Catalog />
			</Layout>
			<Footer />
		</>
	)
}

export default App
