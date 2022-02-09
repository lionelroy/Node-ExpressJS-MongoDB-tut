// Cross Origin Resource Sharing
// In the allowedOrigins, you can add the domains that will have access to this server's routes(It can also be a live server)
// After development is done you can delete the local server and localhost in allowedOrigins, also delete || !origin in the if statement.
const allowedOrigins = [
  'https://www.yoursite.com',
  'http://127.0.0.1:5500',
  'http://localhost:3500'
];

module.exports = allowedOrigins;