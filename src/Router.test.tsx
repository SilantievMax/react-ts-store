import { render, screen } from '@testing-library/react'
import userEvent from '@testing-library/user-event'
import React from 'react'
import { Provider } from 'react-redux'
import { BrowserRouter } from 'react-router-dom'

import { setupStore } from 'store/store'

import App from './App'

const store = setupStore()

describe('Test routers', () => {
  test('router test', () => {
    render(
      <BrowserRouter>
        <Provider store={store}>
          <App />
        </Provider>
      </BrowserRouter>
    )
    const CatalogProductsPages = screen.getByTestId('catalog-products-pages')
    // const CardProductPages = screen.getByTestId('CardProductPages')
    // const BasketPages = screen.getByTestId('BasketPages')
    userEvent.click(CatalogProductsPages)
    expect(screen.getByTestId('catalog-products-pages')).toBeInTheDocument()
    // userEvent.click(CardProductPages)
    // expect(screen.getByTestId('CardProductPages')).toBeInTheDocument()
    // userEvent.click(BasketPages)
    // expect(screen.getByTestId('BasketPages')).toBeInTheDocument()
  })
})
