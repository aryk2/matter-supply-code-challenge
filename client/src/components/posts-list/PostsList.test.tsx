import React from 'react'
import { render } from '@testing-library/react'
import { PostsList } from './PostsList'

describe('PostsList', () => {
  it('should render the PostsList component', () => {
    const { container } = render(<PostsList posts={[]} searchTerm={''}/>)
    expect(container).toBeTruthy()
  })
})
