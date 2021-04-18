import React from 'react'
import { App } from '../config/app/index'
import { Routes } from '../routes/index'

export function DefaultTemplate() {
  return (
    <App>
      <div>
        <Routes />
      </div>
    </App>
  )
}
