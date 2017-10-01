let crud = require('./crud'),
  express = require('express'),
  router = express.Router();

let tags = new crud("tags");

router
  .get('/', tags.all.bind(tags))
  .get('/get', tags.get.bind(tags))
  .post('/update', tags.update.bind(tags))
  .put('/add', tags.add.bind(tags))
  .post('/delete', tags.delete.bind(tags));

module.exports = router;