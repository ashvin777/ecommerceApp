const { Client } = require('pg');
const { DATABASE_PATH } = require('./environments/');
const client = new Client(DATABASE_PATH);

class db {
  static execute(query, input) {
    return new Promise(async (resolve, reject) => {
      await client.connect();
      const res = await client.query(query, input || []);
      await client.end();
      resolve(res);
    });
  }
}

module.exports = db;