let crud = require('./crud'),
  express = require('express'),
  router = express.Router();

let images = new crud("images");

router
  .get('/:id', images.get.bind(images))
  .get('/get/:field/:value', images.getByField.bind(images));

module.exports = router;