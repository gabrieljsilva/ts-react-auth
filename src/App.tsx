import React from 'react'
import { Provider } from 'react-redux'
import { ThemeProvider } from 'styled-components'

import { store } from './store'
import { Routes } from './routes/index'
import { GlobalStyle } from './config/styles/global'
import { lightTheme } from './config/styles/themes/light'

function App() {
  return (
    <div>
      <Provider store={store}>
        <ThemeProvider theme={lightTheme}>
          <Routes />
        </ThemeProvider>
      </Provider>
      <GlobalStyle />
    </div>
  )
}

export default App
