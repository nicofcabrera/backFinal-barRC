const { Schema, model } = require('mongoose');

const menu = new Schema({
  nombre: String,
  estado:  String,
  precio: String,
  detalle: String,
  categoria: String,
  img: String,
  cantidad: Number
})

module.exports = model('Menu', menu)