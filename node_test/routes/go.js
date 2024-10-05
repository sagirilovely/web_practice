var express = require('express');
var router = express.Router();

/* GET home page. */
router.get('/', function(req, res, next) {
  datas={
    'data':'test'
  };
  getData()
  res.render('go',datas,(err,html)=>{
      res.send(html)
  })
 
});


function getData() {
  fetch("")
  .then(res=>res.json())
  .then(value=>{
    console.log(value);
  })
  .catch(err=>{
    console.log(err);
  })
}


module.exports = router;
