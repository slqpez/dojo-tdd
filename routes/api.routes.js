const express = require('express')
const router = express.Router()
const APIController = require("../controllers/api.controller")
 
router.get('/',APIController.getRandomNumber ) 
router.post('/',APIController.startGame )
  


module.exports = router