require('dotenv').config();
const express = require('express');
const {createProxyMiddleware} = require('http-proxy-middleware');
const tokenValidator = require('./infrastructure/http/middleware/token-validator');
const app = express();
const port = process.env.PORT || 3000;

// app.use(tokenValidator);

app.listen(port, () => {
  console.log(`Gateway listening on port ${port}`);
});

app.get('/test', (req, res) => {
  res.status(200).json({message: "Hi from CI"});
})