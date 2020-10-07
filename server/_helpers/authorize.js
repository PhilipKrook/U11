const userService = require('../users/user.service');
const jwt = require('express-jwt');
const { secret } = require('config.json');

module.exports = authorize;

function authorize(roles = []) {
  if (typeof roles === 'string') {
    roles = [roles];
  }

  // authorize based on user role
  return (req, res, next) => {
    if (roles.length && !roles.includes(req.user.role)) {
      // user's role is not authorized
      return res.status(401).json({ message: 'Unauthorized' });
    }
    // authentication and authorization successful
    next();
  };
}

async function isRevoked(req, payload, done) {
  const user = await userService.getById(payload.sub);

  // revoke token if user no longer exists
  if (!user) {
    return done(null, true);
  }

  done();
}
