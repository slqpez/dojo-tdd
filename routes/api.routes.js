const express = require('express')
const router = express.Router()
const APIController = require("../controllers/api.controller")

//router.get('/', )
router.post('/',APIController.postNumber )
  


module.exports = router