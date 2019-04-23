var express = require('express');
var router = express.Router();
const SqlRunner = require('../db/sql_runner');

// router.get('/', function(req, res) {
//   res.status(200).json('respond with a resource');
// });

router.get('/', function(req, res){
  SqlRunner.run('SELECT * FROM books').then(result => {
    res.status(200).json(result.rows);
  });
});

router.post('/', function(req, res){
  SqlRunner.run("INSERT INTO books (title, publication_date, main_character) VALUES ($1, $2, $3)",
  [req.body.title, req.body.publication_date, req.body.main_character])
    .then((result) => {
      res.status(200).json(result);
    });
});

router.delete('/:id', function(req, res){
  SqlRunner.run("DELETE FROM books WHERE id = $1", [req.params.id])
    .then((result) => {
      res.status(200).json(result);
    });
});

module.exports = router;
