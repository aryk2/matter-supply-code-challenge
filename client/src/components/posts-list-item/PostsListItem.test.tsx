import React from 'react'
import { render } from '@testing-library/react'
import { PostsListItem } from './PostsListItem'

describe('PostsListItem', () => {
  it('should render the PostsListItem component', () => {
    const { container } = render(<PostsListItem post={{title: ''}} index={0}/>)
    expect(container).toBeTruthy()
  })
})
