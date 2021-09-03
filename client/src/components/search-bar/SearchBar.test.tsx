import React from 'react'
import { render } from '@testing-library/react'
import { SearchBar } from './SearchBar'

describe('SearchBar', () => {
  it('should render the SearchBar component', () => {
    const { container } = render(<SearchBar
      searchTerm={''}
      searchBoxExpanded={true}
      handleChange={jest.fn()}
      handleSubmit={jest.fn()}
    > </SearchBar>)
    expect(container).toBeTruthy()
  })
})
