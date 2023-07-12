const Menu = require('../models/menu');

const createMenu = async (req, res) => {
  const { nombre, estado, precio, detalle, categoria,img,cantidad } = req.body;
  const nuevoMenu = new Menu({
    nombre,
    estado,
    precio,
    detalle,
    categoria,
    img,
    cantidad: 1
  })

  await nuevoMenu.save()

  res.json({
    mensaje: `Comida nueva agregada`
  })
}

const getMenu = async (req, res) => {
  try {
    const menu = await Menu.find({})
    res.json(menu)
  } catch (error) {
    console.log(error)
  }
}

const deleteMenu = async (req, res) => {
  try {
  await Menu.findByIdAndDelete(req.params.userId)
    res.json({
      mensaje: 'Menu eliminado'
    })
  } catch (error) {
    console.log(error)
  }
}

const updateMenu = async (req, res) => {
  const { id, newNom, newDesc, newPre, newImg } = req.body;
    await Menu.findByIdAndUpdate(id,{nombre: newNom, detalle: newDesc, precio: newPre, img: newImg })
  res.json({
    mensaje: `Menu modificado`
  })
}

module.exports = {createMenu, getMenu, deleteMenu, updateMenu}