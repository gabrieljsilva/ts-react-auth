import React from 'react'
import { BrowserRouter, Switch, Route } from 'react-router-dom'
import { PrivateRoute } from '../config/routes/PrivateRoute'

import { NotFound } from '../pages/NotFound'
import { Home } from '../pages/Home'
import { Dashboard } from '../pages/Dashboard'
import { Login } from '../pages/Login'

export function Routes() {
  return (
    <BrowserRouter>
      <Switch>
        <Route path="/" component={Home} exact={true} />
        <Route path="/login" component={Login} exact={true} />
        <PrivateRoute path="/dashboard" component={Dashboard} exact={true} />
        <Route path="/*" component={NotFound} exact={true} />
      </Switch>
    </BrowserRouter>
  )
}
