const { Schema, model } = require('mongoose');

const pedido = new Schema({
  usuario: String,
  fecha:  String,
  menu: String,
  estado: String
})

module.exports = model('Pedido', pedido)