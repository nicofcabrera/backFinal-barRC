const express = require('express');
const route = express.Router();
const {createPedido, getPedido, deletePedido, updatePedido} = require('../controllers/pedido')

route.post('/post-pedido', createPedido)
route.get('/get-pedido', getPedido)
route.delete('/:userId', createPedido)
route.patch('/patch-pedido', updatePedido)

module.exports = route;