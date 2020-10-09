import React, { useEffect } from 'react';
import { Link } from 'react-router-dom';
import { useDispatch, useSelector } from 'react-redux';

import { userActions } from '../_actions';

function ViewPage() {
  const users = useSelector((state) => state.users);
  const user = useSelector((state) => state.authentication.user);

  return (
    <div className="col-lg-8 offset-lg-2">
      <h1>Hi {user.firstName}!</h1>
      <p>Welcome to the user page!</p>
      <h3>Here Todo's will be displayed:</h3>
      {users.loading && <em>Loading todos...</em>}
      {users.error && <span className="text-danger">ERROR: {users.error}</span>}

      <p>
        <Link to="/login">Logout</Link>
      </p>
    </div>
  );
}

export { ViewPage };
