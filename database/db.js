const mongoose = require('mongoose');

const connectDb = async () => {
  try {
    await mongoose.connect('mongodb+srv://nicofcok:ciudadela@db-proyectomenu.rztyvzf.mongodb.net/?retryWrites=true&w=majority');   
    console.log('Conexión exitosa a la DB')
  } catch (error) {
    console.log(error)
  }
}

connectDb()

module.exports = { connectDb }