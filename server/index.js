let express = require('express'),
  path = require('path'), 
  bodyParser = require('body-parser'),
  products = require('./products');

let app = express();
let port = process.env.PORT || 8080;
process.env.PWD = process.cwd();

app.use(bodyParser());
app.use((req, res, next) => next());
app.use(express.static(process.env.PWD + '/src/'));
app.use('/products', products);

app.listen(port, () => {
  console.log("Server has been started on:", port);
});