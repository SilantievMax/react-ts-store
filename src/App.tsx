import React, { FC } from 'react'
import { Route, Routes } from 'react-router-dom'

import CardProduct from 'pages/CardProduct'
import CardProducts from 'pages/CardProducts'

import Catalog from 'components/Catalog/Catalog'
import Footer from 'components/Footer/Footer'
import Header from 'components/Header/Header'
import Layout from 'components/Layout/Layout'

const App: FC = () => {
  return (
    <>
      <Header />
      <Layout>
        <Routes>
          <Route path='/' element={<CardProducts />} />
          <Route path='/product/:id' element={<CardProduct />} />
        </Routes>
      </Layout>
      <Footer />
    </>
  )
}

export default App
