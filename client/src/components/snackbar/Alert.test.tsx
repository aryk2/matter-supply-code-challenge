import React from 'react'
import { render } from '@testing-library/react'
import { Alerts } from './Alert'

describe('Alerts', () => {
  it('should render the Alerts component', () => {
    const { container } = render(<Alerts/>)
    expect(container).toBeTruthy()
  })
})
