import React from 'react'
import { render } from '@testing-library/react'
import { AppMenu } from './AppMenu'

describe('AppMenu', () => {
  it('should render the AppMenu component', () => {
    const { container } = render(<AppMenu/>)
    expect(container).toBeTruthy()
  })
})
