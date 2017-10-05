let crud = require('./crud'),
  express = require('express'),
  router = express.Router(),
  multiparty = require('connect-multiparty'),
  multipartyMiddleware = multiparty();

let products = new crud("products", "product_id");

router
  .get('/', products.all.bind(products))
  .get('/:id', products.get.bind(products))
  .get('/get/:field/:value', products.getByField.bind(products))
  .post('/update', products.update.bind(products))
  .put('/add', products.add.bind(products))
  .post('/delete', products.delete.bind(products))
  .post('/upload', multipartyMiddleware, products.upload.bind(products));

module.exports = router;