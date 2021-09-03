import React from 'react'
import { render } from '@testing-library/react'
import { BackdropSpinner } from './BackdropSpinner'

describe('BackdropSpinner', () => {
  it('should render the BackdropSpinner component', () => {
    const { container } = render(<BackdropSpinner open={true}/>)
    expect(container).toBeTruthy()
  })
})
