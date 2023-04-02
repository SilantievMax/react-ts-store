import { useAppDispatch } from 'hooks/redux'
import React, { FC, useEffect } from 'react'
import { Route, Routes } from 'react-router-dom'

import CardProduct from 'pages/CardProduct'
import CardProducts from 'pages/CardProducts'

import Catalog from 'components/Catalog/Catalog'
import Footer from 'components/Footer/Footer'
import Header from 'components/Header/Header'
import Layout from 'components/Layout/Layout'

import { fetchProducts } from 'utils/jsonGetProducts'

const App: FC = () => {
  const dispatch = useAppDispatch()

  useEffect(() => {
    dispatch(fetchProducts())
  }, [])
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
