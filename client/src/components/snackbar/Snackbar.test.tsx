import React from 'react'
import { render } from '@testing-library/react'
import { Snackbar } from './Snackbar'

describe('Snackbar', () => {
  it('should render the Snackbar component', () => {
    const { container } = render(<Snackbar/>)
    expect(container).toBeTruthy()
  })
})
