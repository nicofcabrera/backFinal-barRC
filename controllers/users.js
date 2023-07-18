const User = require('../models/users')
const bcrypt = require('bcrypt')
const jwt = require('jsonwebtoken');


const createUser = async (req, res) => {
  const { nombre, email, password } = req.body;
  const saltRound = 15
  const pwEncripted = bcrypt.hashSync(password, saltRound)

  const nuevoUsuario = new User({
    nombre,
    email,
    password : pwEncripted,
    estado: 'Activo',
    rol: 'user'
  })

  await nuevoUsuario.save()

  res.json({
    mensaje: `Usuario ${nombre} creado con exito`
  })
}

const loginUser = async (req, res) => {
  const { email, password } = req.body;

  try {
    const user = await User.findOne({ email });

    if (!user) {
      return res.json({
      message: 'ERROR de mail (provisorio'
    })
    } 
    
    const result = bcrypt.compareSync(password, user.password);
    
    if (result) {
      const token = jwt.sign({user},'secreta', { expiresIn: '1h' })
      res.json({
        result,
        token,
        user
      }) 
    } else {
    res.json({
      message: 'ERROR pw (provisiorio)',
    })
  }
    } catch (error) {
    console(error)
  }


}


const getUsers = async (req, res) => {
  try {
    const users = await User.find({})
    res.json(users)
  } catch (error) {
    console.log(error)
  }
}

const deleteUsers = async (req, res) => {
  try {
  await User.findByIdAndDelete(req.params.userId)
    res.json({
      mensaje: 'Usuario eliminado'
    })
  } catch (error) {
    console.log(error)
  }
}

const estadoUser = async (req, res) => {
  const { id, newEstado } = req.body;
    await User.findByIdAndUpdate(id,{estado: newEstado})
  res.json({
    mensaje: `Uusario Modificado`
  })
}

const roleUser = async (req, res) => {
  const { id, newRole } = req.body;
  await User.findByIdAndUpdate(id, { rol: newRole })
  res.json({
    mensaje: `User modificado`
  })
}

module.exports = {createUser, getUsers, deleteUsers, estadoUser, loginUser, roleUser}