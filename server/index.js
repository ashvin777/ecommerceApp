let express = require('express'),
  path = require('path'),
  bodyParser = require('body-parser'),
  products = require('./api/v1/products'),
  orders = require('./api/v1/orders'),
  tags = require('./api/v1/tags'),
  users = require('./api/v1/users'),
  categories = require('./api/v1/categories'),
  subcategories = require('./api/v1/subcategories'),
  images = require('./api/v1/images'),
  qt = require('quickthumb');

let port = process.env.PORT || 8080;

express()
  .use(bodyParser.urlencoded({
    extended: true
  }))
  .use(bodyParser.json())
  .use((req, res, next) => next())
  .use('/static', express.static(__dirname + '/uploads'))
  .use('/api/v1/products', products)
  .use('/api/v1/orders', orders)
  .use('/api/v1/users', users)
  .use('/api/v1/tags', tags)
  .use('/api/v1/categories', categories)
  .use('/api/v1/subcategories', subcategories)
  .use('/api/v1/images', images)
  .listen(port, () => {
    console.log("Server has been started on:", port);
  });