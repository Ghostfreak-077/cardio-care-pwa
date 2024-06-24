// middleware/corsMiddleware.js
const cors = require('cors');

const corsOptions = {
  origin: 'http://localhost:3000', // Adjust this to match your frontend URL
  methods: 'GET,POST,PATCH,PUT,DELETE,OPTIONS',
  allowedHeaders: 'Origin, Content-Type, X-Auth-Token',
  credentials: true,
};

const corsMiddleware = cors(corsOptions);

module.exports = corsMiddleware;
