var express = require('express');
var router = express.Router();
var fs = require('fs');


/* GET home page. */
router.get('/', function (req, res, next) {
  res.render('index', { title: 'Anvi' });
});
router.post('/submit', function (req, res, next) {

  let sname = req.body.senderName;
  let msg = req.body.senderMessage;
  let data = `\nName: ${sname} \nMessage: ${msg}`;

  fs.appendFile("info.txt", data, function (error) {
    if (error) {
      console.log(error);
    }
    else {
      console.log("data is written succesfully.");
      res.send(`Your data has been submitted successfully with: ${sname},${msg}`);
    }
  });
});
router.get("/search", function(req, res, next){
  console.log(req.query);
  res.send("Hello World!");
 });
 router.get("/search/:id", function(req, res, next){
  console.log(req.params);
  res.send(`Hello User, your ID: ${req.params.id} has been generated succesfully. `);
});
module.exports = router;
