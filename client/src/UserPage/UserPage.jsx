import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import { useDispatch, useSelector } from 'react-redux';
import Dropdown from 'react-dropdown';

import { userActions } from '../_actions';
import { userService } from '../_services';
import 'react-dropdown/style.css';

function UserPage(propps) {
  const [user, setUser] = useState({
    firstName: '',
    lastName: '',
    username: '',
    userRole: '',
    password: '',
  });

  const [submitted, setSubmitted] = useState(false);
  const updating = useSelector((state) => state.update.updating);
  const dispatch = useDispatch();

  // reset login status

  useEffect(() => {
    userService.getById(propps.match.params.testvalue).then((newUser) => {
      setUser((user) => ({ ...user, ...newUser }));
    });
  }, []);

  function handleChange(e) {
    const { name, value } = e.target;
    setUser((user) => ({ ...user, [name]: value }));
  }

  function handleRoleChange({ value, label }) {
    setUser((user) => ({ ...user, userRole: value }));
  }

  function handleSubmit(e) {
    e.preventDefault();

    setSubmitted(true);
    if (user.firstName && user.lastName && user.username && user.password && user.userRole) {
      dispatch(userActions.update(user));
    }
  }

  // dropdown
  const options = ['Admin', 'User'];
  const defaultOption = options[0];

  return (
    <div className="col-lg-8 offset-lg-2">
      <h2>Editing user: {user.firstName}</h2>
      <form name="form" onSubmit={handleSubmit}>
        <div className="form-group">
          <label>First Name</label>
          <input
            type="text"
            name="firstName"
            value={user.firstName}
            onChange={handleChange}
            className={'form-control' + (submitted && !user.firstName ? ' is-invalid' : '')}
          />
          {submitted && !user.firstName && (
            <div className="invalid-feedback">First Name is required</div>
          )}
        </div>
        <div className="form-group">
          <label>Last Name</label>
          <input
            type="text"
            name="lastName"
            value={user.lastName}
            onChange={handleChange}
            className={'form-control' + (submitted && !user.lastName ? ' is-invalid' : '')}
          />
          {submitted && !user.lastName && (
            <div className="invalid-feedback">Last Name is required</div>
          )}
        </div>
        <div className="form-group">
          <label>Username</label>
          <input
            type="text"
            name="username"
            value={user.username}
            onChange={handleChange}
            className={'form-control' + (submitted && !user.username ? ' is-invalid' : '')}
          />
          {submitted && !user.username && (
            <div className="invalid-feedback">Username is required</div>
          )}
        </div>

        <div className="form-group">
          <label>Role</label>
          <Dropdown
            className={submitted && !user.userRole ? ' is-invalid' : ''}
            options={options}
            onChange={handleRoleChange}
            value={user.userRole}
            placeholder="Role"
          />
          {submitted && !user.userRole && <div className="invalid-feedback">Role is required</div>}
        </div>

        <div className="form-group">
          <label>Password</label>
          <input
            type="password"
            name="password"
            value={user.password}
            onChange={handleChange}
            className={'form-control' + (submitted && !user.password ? ' is-invalid' : '')}
          />
          {submitted && !user.password && (
            <div className="invalid-feedback">Password is required</div>
          )}
        </div>
        <div className="form-group">
          <button className="btn btn-primary">
            {updating && <span className="spinner-border spinner-border-sm mr-1"></span>}
            Edit
          </button>
          <Link to="/home" className="btn btn-link">
            Cancel
          </Link>
        </div>
      </form>
    </div>
  );
}

export { UserPage };
