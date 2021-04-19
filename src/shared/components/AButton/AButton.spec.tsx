import React from 'react'
import { render, fireEvent, cleanup } from '@testing-library/react'

import { AButton } from './index'
import { App } from '../../../config/app'

describe('Tests for AButton component', () => {
  afterAll(() => {
    cleanup()
  })
  it('should render a AButton with text', () => {
    const testText = 'Hello World'
    const DOMTree = render(
      <App>
        <AButton>{testText}</AButton>
      </App>,
    )

    const buttonElement = DOMTree.getByTestId('a-button')

    expect(buttonElement).toHaveTextContent(testText)
  })
  it('should call a function on click', () => {
    const onClickMock = jest.fn()
    const DOMTree = render(
      <App>
        <AButton onClick={onClickMock}>Hello World</AButton>
      </App>,
    )

    const buttonElement = DOMTree.getByTestId('a-button')
    fireEvent.click(buttonElement)

    expect(onClickMock).toHaveBeenCalled()
  })
  it('button should have default color prop', () => {
    const DOMTree = render(
      <App>
        <AButton>Hello World</AButton>
      </App>,
    )

    const buttonElement = DOMTree.getByTestId('a-button')

    expect(buttonElement).toHaveAttribute('color', 'primary')
  })
})
