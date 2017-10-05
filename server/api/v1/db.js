const { Pool } = require('pg');
const { DATABASE_CONFIG } = require('../../environments/');
const pool = new Pool(DATABASE_CONFIG);

class db {
  static async execute(query, input) {
    try {
      const res = await pool.query(query, input || []);
      return Promise.resolve(res);
    } catch (err) {
      return Promise.reject(err);
    }
  }
  static onError(err, client) {
    console.error('Unexpected error on idle client', err);
    process.exit(-1);
  }
}

pool.on('error', db.onError);

module.exports = db;