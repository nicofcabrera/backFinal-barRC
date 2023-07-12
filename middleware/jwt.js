const jwt = require('jsonwebtoken');

const jwtValidator = async (req, res, next) => {
  const { accesToken } = req.body
  
  try {
    const verify = jwt.verify(accesToken, 'secreta')

    if (verify) {
      return next()
    }
  } catch (error) {
    res.json({
      mensaje: 'No autorizado'
    })
  }
}

module.exports = {jwtValidator}