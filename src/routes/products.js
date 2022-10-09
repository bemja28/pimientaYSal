var express = require('express');
const { detail } = require('../controller/productsController');


var router = express.Router();

/* GET home page. */
router.get('/detail/:id', detail)

module.exports = router;