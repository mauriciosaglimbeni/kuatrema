const express = require('express')
// eslint-disable-next-line no-unused-vars
const db = require('./db')
// Create express instancee
const app = express()
// Init body-parser options (inbuilt with express)
app.use(express.json())
app.use(express.urlencoded({ extended: true }))
// Require & Import API routes
const user = require('./routes/users')
const product = require('./routes/products')
// Use API Routes
app.use(user)
app.use(product)

// Export the server middleware
module.exports = {
  path: '/api',
  handler: app
}