const {codeBreaker, randomNumber} = require('../codeBreaker');


const APIController ={

  startGame: (req, res)=>{
    try{
      const {number, random} = req.body

    const values = codeBreaker(number,random)

    res.status(200).json({values})

    }catch(err){
      console.log(err)
    }
    

  },

  getRandomNumber:(req,res)=>{
    let number  = randomNumber()

    res.json({number})
  }


}

module.exports = APIController;