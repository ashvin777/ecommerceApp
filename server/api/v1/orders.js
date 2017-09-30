let crud = require('./crud'),
  express = require('express'),
  router = express.Router();

let orders = new crud("orders");

router
  .get('/', orders.all.bind(orders))
  .get('/get', orders.get.bind(this))
  .post('/update', orders.update.bind(orders))
  .put('/add', orders.add.bind(orders))
  .delete('/delete', orders.delete.bind(orders));

module.exports = router;