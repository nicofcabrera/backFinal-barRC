const express = require('express');
const app = express();
const cors = require('cors');
require('dotenv').config();
const port = process.env.PORT;
require('./database/db')
const users = require('./routes/users')
const pedidos = require('./routes/pedido')
const menu = require('./routes/menu')

app.use(cors());
app.use(express.json());
app.use('/', users)
app.use('/', pedidos)
app.use('/', menu)


app.listen(port, () => {
  console.log(`Estamos trabajando en el siguiente link http://localhost:${port}`)
})
