import React from 'react'
import { render } from '@testing-library/react'
import { PostCreate } from './PostCreate'

describe('PostCreate', () => {
  it('should render the PostCreate component', () => {
    const { container } = render(<PostCreate/>)
    expect(container).toBeTruthy()
  })
})
