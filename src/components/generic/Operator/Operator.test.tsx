import { render, screen } from '@testing-library/react'
import React from 'react'

import Operator from './Operator'

describe('studentAssessment', () => {
  test('Operator test render phone', () => {
    render(<Operator />)
    const phone = screen.getByRole('phone')
    expect(phone).toHaveTextContent('+7 (777) 490-00-91')
  })

  test('Operator test render time', () => {
    render(<Operator />)
    const role = screen.getByRole('time')
    expect(role).toHaveTextContent('время работы: 9:00-20:00')
  })

  test('Operator test render operator', () => {
    render(<Operator />)
    const operator = screen.getByRole('operator')
    expect(operator).toHaveTextContent('Заказать звонок')
  })
})
