const express = require('express');
const route = express.Router();
const {body} = require('express-validator')
const { createUser, getUsers, deleteUsers, estadoUser, loginUser, roleUser } = require('../controllers/users')
const {jwtValidator} = require('../middleware/jwt')

route.post('/post-user',
  body('nombre').trim().escape().isAlpha('es-ES', {ignore:' '}).not().isEmpty().isLength({min: 3,max: 25}).withMessage('Nombre invalido'),
  body('email').trim().escape().isEmail().not().isEmpty().withMessage('Email invalido'),
  body('password').trim().escape().isLength({min: 6, max: 12}),
  createUser)
route.post('/userlogin',
  body('email').trim().escape().isEmail().not().isEmpty().withMessage('Email invalido'),
  body('password').trim().escape().isLength({min: 6, max: 12})
, loginUser)
route.get('/get-users', getUsers)
route.patch('/patch-users', estadoUser)
route.patch('/role-users', roleUser)
route.delete('/:userId', deleteUsers)

module.exports = route;