const { Schema, model } = require('mongoose');

const pedido = new Schema({
  usuario: String,
  fecha:  String,
  menu: Array,
  estado: String
})

module.exports = model('Pedido', pedido)