const express = require('express')
const router = express.Router()
const APIController = require("../controllers/api.controller")
 
router.get('/',APIController.getRandom ) 
router.post('/',APIController.postNumber )
  


module.exports = router