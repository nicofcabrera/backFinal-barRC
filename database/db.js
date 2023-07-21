const mongoose = require('mongoose');
require('dotenv').config();
const db = process.env.DB;


const connectDb = async () => {
  try {
    await mongoose.connect(db);   
    console.log('Conexión exitosa a la DB')
  } catch (error) {
    console.log(error)
  }
}

connectDb()

module.exports = { connectDb }