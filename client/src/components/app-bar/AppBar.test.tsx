import React from 'react'
import { render } from '@testing-library/react'
import { AppBar } from './AppBar'

describe('AppBar', () => {
  it('should render the AppBar component', () => {
    const { container } = render(<AppBar> </AppBar>)
    expect(container).toBeTruthy()
  })
})
