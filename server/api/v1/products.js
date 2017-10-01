let crud = require('./crud'),
  express = require('express'),
  router = express.Router();

let products = new crud("products");

router
  .get('/', products.all.bind(products))
  .get('/get', products.get.bind(products))
  .post('/update', products.update.bind(products))
  .put('/add', products.add.bind(products))
  .post('/delete', products.delete.bind(products));

module.exports = router;