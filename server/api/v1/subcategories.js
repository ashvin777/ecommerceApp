let crud = require('./crud'),
  express = require('express'),
  router = express.Router();

let subcategories = new crud("subcategories");

router
  .get('/', subcategories.all.bind(subcategories))
  .get('/get', subcategories.get.bind(subcategories))
  .post('/update', subcategories.update.bind(subcategories))
  .put('/add', subcategories.add.bind(subcategories))
  .post('/delete', subcategories.delete.bind(subcategories));

module.exports = router;