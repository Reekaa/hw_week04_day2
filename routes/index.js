var express = require('express');
var router = express.Router();
const SqlRunner = require('../db/sql_runner.js');

/* GET home page. */
router.get('/', function(req, res) {
  res.status(200).json({title: "Express home"});
});



module.exports = router;
