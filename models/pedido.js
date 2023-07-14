const { Schema, model } = require('mongoose');

const pedido = new Schema({
  usuario: String,
  fecha:  Array,
  menu: Array,
  estado: String
})

module.exports = model('Pedido', pedido)