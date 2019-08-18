import React from 'react'
import { render } from '@testing-library/react'
import HelloWorld from '../HelloWorld'

describe('HelloWorld', () => {
  it('renders a message', () => {
    const { queryByText } = render(<HelloWorld />)
    expect(queryByText('Hello, world!')).not.toBeNull()
  })
})
