let express = require('express'),
  db = require('./db'),
  router = express.Router();

class Products {
  static async all(req, res) {
    let query = 'select * from products';
    let data = await db.execute(query);
    console.log('data', data.rows);
    res.status(200).send(data.rows);
  }

  static async get(req, res) {
    
  }

  static async add(req, res) {
    let query = 'insert into products(product_id, product_name, description) values($1, $2, $3)';
    let inputData = [111, 'iPhone XI', 'This is launching in 2018 on our portal'];
    await db.execute(query, inputData);
    res.status(200).send(200, 'ok');
  }

  static async update(req, res) {

  }

  static async delete(req, res) {

  }
}

router
  .get('/', Products.all)
  .put('/add', Products.add)
  .get('/get', Products.get)
  .post('/update', Products.update)
  .delete('/delete', Products.delete)

  ;

module.exports = router;