import { useAppDispatch } from 'hooks/redux'
import React, { FC, useEffect } from 'react'
import { Route, Routes } from 'react-router-dom'

import BasketPages from 'pages/BasketPages'
import CardProductPages from 'pages/CardProductPages'
import CatalogProductsPages from 'pages/CatalogProductsPages'

import Footer from 'components/Footer/Footer'
import Header from 'components/Header/Header'
import Layout from 'components/generic/Layout/Layout'

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
          <Route path='/' element={<CatalogProductsPages />} />
          <Route path='/product/:id' element={<CardProductPages />} />
          <Route path='/basket' element={<BasketPages />} />
        </Routes>
      </Layout>
      <Footer />
    </>
  )
}

export default App
