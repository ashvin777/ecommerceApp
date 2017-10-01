let crud = require('./crud'),
  express = require('express'),
  router = express.Router();

let categories = new crud("categories");

router
  .get('/', categories.all.bind(categories))
  .get('/get', categories.get.bind(this))
  .post('/update', categories.update.bind(categories))
  .put('/add', categories.add.bind(categories))
  .post('/delete', categories.delete.bind(categories));

module.exports = router;