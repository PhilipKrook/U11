import React from 'react';
import { Route, Redirect } from 'react-router-dom';
import { useSelector } from 'react-redux';

function AdminRoute({ component: Component, roles, ...rest }) {
  const user = useSelector((state) => state.authentication.user);
  return (
    <Route
      {...rest}
      render={(props) => {
        if (!user || user.userRole !== 'Admin') {
          // not logged in so redirect to login page with the return url
          return <Redirect to={{ pathname: '/login', state: { from: props.location } }} />;
        }

        // logged in so return component
        return <Component {...props} />;
      }}
    />
  );
}

export { AdminRoute };
