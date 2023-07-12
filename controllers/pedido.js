const Pedido = require('../models/pedido');

const createPedido = async (req, res) => {
  const { usuario, fecha, menu, estado } = req.body;
  const nuevoPedido = new Pedido({
    usuario,
    fecha,
    menu,
    estado
  })

  await nuevoPedido.save()

  res.json({
    mensaje: `Pedido enviado`
  })
}

const getPedido = async (req, res) => {
  try {
    const pedido = await Pedido.find({})
    res.json(pedido)
  } catch (error) {
    console.log(error)
  }
}

const deletePedido = async (req, res) => {
  try {
  await Pedido.findByIdAndDelete(req.params.userId)
    res.json({
      mensaje: 'Pedido eliminado'
    })
  } catch (error) {
    console.log(error)
  }
}

const updatePedido = async (req, res) => {
  const { id, newEstado} = req.body;
    await Pedido.findByIdAndUpdate(id,{estado: newEstado })
  res.json({
    mensaje: `Pedido modificado`
  })
}

module.exports = {createPedido, getPedido, deletePedido, updatePedido}