const express = require('express');
const route = express.Router();
const {jwtValidator} = require('../middleware/jwt')
const {createMenu, getMenu, deleteMenu, updateMenu} = require('../controllers/menu')

route.post('/post-menu', createMenu)
route.get('/get-menu', getMenu)
route.delete('/delete-menu/:userId', jwtValidator,deleteMenu)
route.patch('/patch-menu', updateMenu )

module.exports = route;