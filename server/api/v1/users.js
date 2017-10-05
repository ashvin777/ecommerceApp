let crud = require('./crud'),
  express = require('express'),
  router = express.Router();

let users = new crud("users");

router
  .get('/', users.all.bind(users))
  .get('/get', users.get.bind(users))
  .post('/update', users.update.bind(users))
  .put('/add', users.add.bind(users))
  .post('/delete', users.delete.bind(users));

module.exports = router;