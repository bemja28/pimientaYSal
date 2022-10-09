var express = require('express');
const { index } = require('../controller/indexController');
var router = express.Router();

/* GET home page. */
router.get('/', index)

module.exports = router;
