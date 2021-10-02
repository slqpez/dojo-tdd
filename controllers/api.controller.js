const codebreaker = require('../codeBreaker');


const APIController ={

  postNumber: (req, res)=>{
    const {number} = req.body

    const result = codebreaker(number)


    res.status(200).json({msj:"Juego empezado", result})

  }


}

module.exports = APIController;