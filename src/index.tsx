import React from 'react'
import ReactDOM from 'react-dom'
import { App } from './config/app/index'
import { Routes } from './routes/index'

ReactDOM.render(
  <React.StrictMode>
    <App>
      <Routes />
    </App>
  </React.StrictMode>,
  document.getElementById('root'),
)
