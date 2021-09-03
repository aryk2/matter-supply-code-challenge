import React from 'react'
import { render } from '@testing-library/react'
import { CreatePost } from './CreatePost'

describe('CreatePost', () => {
  it('should render the CreatePost component', () => {
    const { container } = render(<CreatePost/>)
    expect(container).toBeTruthy()
  })
})
