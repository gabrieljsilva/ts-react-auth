import React from 'react'
import { Provider } from 'react-redux'
import { ThemeProvider } from 'styled-components'

import { AppProps } from './types'

import { store } from '../../store'
import { GlobalStyle } from '../../config/styles/global'
import { lightTheme } from '../../config/styles/themes/light'

export function App({ children }: AppProps) {
  return (
    <div>
      <Provider store={store}>
        <ThemeProvider theme={lightTheme}>{children}</ThemeProvider>
      </Provider>
      <GlobalStyle />
    </div>
  )
}
