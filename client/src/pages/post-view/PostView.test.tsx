import React from 'react'
import { render } from '@testing-library/react'
import { PostView } from './PostView'

jest.mock('react-router-dom', () => ({
    useLocation: jest.fn().mockReturnValue({
      pathname: '/another-route',
      search: '',
      hash: '',
      state: null,
      key: '5nvxpbdafa',
    }),
    useHistory: jest.fn().mockReturnValue({

    }),
}));

describe('PostView', () => {
  it('should render the PostView component', () => {
    const { container } = render(<PostView/>)
    expect(container).toBeTruthy()
  })
})
