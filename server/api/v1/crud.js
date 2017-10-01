let db = require('./db'),
  env = require('../../environments/config');

class Crud {
  constructor(tableName) {
    this.tableName = tableName;
  }
  async all(req, res) {
    let query = `select * from ${this.tableName}`;
    let data = await db.execute(query);
    res.status(200).send(data.rows);
  }

  async get(req, res) {

  }

  async add(req, res) {
    let params = req.body;
    try {
      if (params) {
        let columnValues = Object.keys(params).map((field, key) => "$" + (key + 1)).join(",");
        let columnNames = Object.keys(params).join(',');
        let values = Object.keys(params).map((field) => params[field]);
        let query = `insert into 
          ${this.tableName}(${columnNames})
          values(${columnValues})`;

        await db.execute(query, values);
        res.status(200).send('ok');
      } else {
        res.status(501).send('error');
      }
    } catch (e) {
      if (env == 'dev') {
        res.status(501).send(JSON.stringify(e));
      } else {
        res.status(501).send('error');
      }
    }
  }

  async update(req, res) {
    let params = req.body;
    try {
      if (params) {
        // let columnValues = Object.keys(params).map((field, key) => "$" + (key + 1)).join(",");
        // let columnNames = Object.keys(params).join(',');
        // let values = Object.keys(params).map((field) => params[field]);

        let fields = Object.keys(params).map((key) => {
          return key + "='" + params[key] + "'";
        });

        let query = `update ${this.tableName}
          set ${fields}
          where id = ${params.id}`;

        console.log(query);

        await db.execute(query);
        res.status(200).send('ok');
      } else {
        res.status(501).send('error');
      }
    } catch (e) {
      if (env == 'dev') {
        res.status(501).send(JSON.stringify(e));
      } else {
        res.status(501).send('error');
      }
    }
  }

  async delete(req, res) {
    let query = `delete from ${this.tableName} where id = '${req.body.id}'`;
    await db.execute(query);
    res.status(200).send('ok');
  }
}

module.exports = Crud;