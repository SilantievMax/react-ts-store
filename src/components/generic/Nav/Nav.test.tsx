import { render, screen } from '@testing-library/react'
import React from 'react'

import Nav, { NavVariant } from './Nav'

test('Operator test render Nav', () => {
  render(<Nav variant={NavVariant.header} />)
  const arryElement = screen.getAllByRole('nav')
  expect(arryElement[0]).toHaveTextContent('О компании')
  expect(arryElement[1]).toHaveTextContent('Доставка и оплата')
  expect(arryElement[2]).toHaveTextContent('Возврат')
  expect(arryElement[3]).toHaveTextContent('Контакты')
})
