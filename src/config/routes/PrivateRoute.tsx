import React from 'react'
import { Route, Redirect, RouteProps } from 'react-router-dom'

interface PrivateRouteProps extends RouteProps {
  component: React.ComponentType<any>
}

export function PrivateRoute({
  component: Component,
  ...rest
}: PrivateRouteProps) {
  const userIsLoggedIn = false // This is a mock

  if (userIsLoggedIn) {
    return <Route {...rest} render={(props) => <Component {...props} />} />
  } else {
    return <Redirect to="/login" />
  }
}
