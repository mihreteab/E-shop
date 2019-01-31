var express = require('express');
var app = express();
var item = require('./data.json');
const headerFix = (req, res, next) => {
    res.header("Access-Control-Allow-Origin", "*");
    next();
}

app.use(express.static(__dirname+'/public'));
app.use(headerFix);

app.get('/hey', function(req, res) {

    console.log('hey called')
    res.send(item);
})


app.listen(3001, function(){
    console.log("server started");
  });
  