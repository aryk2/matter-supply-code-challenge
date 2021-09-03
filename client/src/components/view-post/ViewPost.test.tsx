import React from 'react'
import { render } from '@testing-library/react'
import { ViewPost } from './ViewPost'

jest.mock('react-router-dom', () => ({
    useLocation: jest.fn().mockReturnValue({
      pathname: '/another-route',
      search: '',
      hash: '',
      state: null,
      key: '5nvxpbdafa',
    }),
}));

describe('ViewPost', () => {
  it('should render the ViewPost component', () => {
    const { container } = render(<ViewPost/>)
    expect(container).toBeTruthy()
  })
})
