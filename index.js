const { Client } = require('pg');
var connectionString = 'postgres://admin:admin@192.168.0.106:5432/Ecommerce';
const client = new Client(connectionString);

async function getProducts() {
    await client.connect();
    const res = await client.query('INSERT INTO Product(product_name, price, product_id) VALUES($1, $2, $3)', ['tewt', 100, 1000]);
    console.log(res.rows[0]) // Hello world!
    await client.end();
}

getProducts();
