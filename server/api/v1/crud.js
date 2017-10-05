let fs = require("fs"),
  db = require('./db'),
  env = require('../../environments/config');

class Crud {
  constructor(tableName, idName) {
    this.tableName = tableName;
    this.idName = idName;
  }
  async all(req, res) {
    try {
      let query = `select * from ${this.tableName}`;
      let data = await db.execute(query);
      res.status(200).send(data.rows);
    } catch (e) {
      res.status(501).send("error");
    }
  }

  async get(req, res) {
    try {
      let query = `select * from ${this.tableName} where id=${req.params.id}`;
      let data = await db.execute(query);
      res.status(200).send(data.rows);
    } catch (e) {
      res.status(501).send("error");
    }
  }

  async getByField(req, res) {
    try {
      if (req.params.field && req.params.value) {
        let query = `select * from ${this.tableName} where ${req.params.field}=${req.params.value}`;
        let data = await db.execute(query);
        res.status(200).send(data.rows);
      } else {
        res.status(501).send("error");
      }
    } catch (e) {
      res.status(501).send("error");
    }
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
          values(${columnValues})
          RETURNING id;`;

        query = query.replace(/'null'/g, null);
        let data = await db.execute(query, values);
        res.status(200).send(data.rows);
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
        let fields = Object.keys(params).map((key) => {
          return key + "='" + params[key] + "'";
        });

        let query = `update ${this.tableName}
          set ${fields}
          where id = ${params.id}
          RETURNING id;`;
        query = query.replace(/'null'/g, null);

        let data = await db.execute(query);
        res.status(200).send(data.rows);
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
    try {
      let query = `delete from ${this.tableName} where id = '${req.body.id}'`;
      await db.execute(query);
      res.status(200).send('ok');
    } catch (e) {
      res.status(501).send("error");
    }
  }

  async upload(req, res) {
    try {
      let id = req.body.id;
      let index = 0;

      let deleteQuery = `delete from images where ${this.idName} = ${id}`
      await db.execute(deleteQuery);

      for (let file of req.files.file) {
        let data = fs.readFileSync(file.path);
        let extension = file.type.split("/")[1];
        var newPath = `./server/uploads/${this.tableName}/${this.tableName}_${id}_${index}.${extension}`;
        fs.writeFileSync(newPath, data);

        let query = `insert into 
          images(${this.idName}, path, ext)
          values($1, $2, $3)
          RETURNING id;`;

        newPath = `${this.tableName}/${this.tableName}_${id}_${index}.${extension}`;
        query = query.replace(/'null'/g, null);
        await db.execute(query, [id, newPath, extension]);


        index++;
      }
      res.status(200).send("ok");
    } catch (e) {
      res.status(501).send("error");
    }
  }
}

module.exports = Crud;