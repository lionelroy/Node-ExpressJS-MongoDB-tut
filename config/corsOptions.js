// Cross Origin Resource Sharing
// In the whitelist, you can add the domains that will have access to this server's routes(It can also be a live server)
// After development is done you can delete the local server and localhost in whitelist, also delete || !origin in the if statement.
const whitelist = [
  'https://www.yoursite.com', 
  'http://127.0.0.1:5500', 
  'http://localhost:3500'
]
const corsOptions = {
  origin: (origin, callback) => {
    if (whitelist.indexOf(origin) !== -1 || !origin) {
      callback(null, true)
    } else {
      callback(new Error('Not allowed by CORS'));
    }
  },
  optionsSuccessStatus: 200
}

module.exports = corsOptions;