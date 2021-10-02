const {codeBreaker, randomNumber} = require('../codeBreaker');


const APIController ={

  postNumber: (req, res)=>{
    try{
      const {number, random} = req.body

    const result = codeBreaker(number,random)


    res.status(200).json({msj:"Juego empezado", result})
    }catch(err){

    }
    

  },

  getRandom:(req,res)=>{
    let result  = randomNumber()

    res.json(result)
  }


}

module.exports = APIController;