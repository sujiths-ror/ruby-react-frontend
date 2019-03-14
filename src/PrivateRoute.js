import React from 'react';
import { Route } from 'react-router';
import { Redirect } from 'react-router-dom';

const PrivateRoute = ({component: Component, authed, ...rest}) =>
  <Route
    {...rest}
    render={(props) => authed === true || !!localStorage.token
      ? <Component {...props} />
      : <Redirect to={{pathname: '/', state: {from: props.location}}} />}
  />

export default PrivateRoute