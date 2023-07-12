const { Schema, model } = require('mongoose');

const user = new Schema({
  nombre: String,
  email:  String,
  password: String,
  estado: String,
  rol: String
})

module.exports = model('User', user)