var express = require("express");
var logger = require("log4js").getLogger("app.js");
var fs = require("fs"); 
var http = require("http");
var app = express();

app.use(express.bodyParser());

app.get('/cppjieba', function(req, res){
    fs.readFile("./public/index.html", function(err, data){
        if(err){
            return err;
        }
        res.set("Content-Type", "text/html;charset=utf-8");
        res.send(data);
    });
});

app.post('/', function(req, res) {
    var options = {
        host : 'localhost',
        port : '11200',
        path : '/?key=' + req.body.sentence,
        method : 'GET'
    };
    console.log(req.body.sentence);
    //res.send(req.body.sentence + req.body.sentence);
    var reqGet = http.request(options, function(resGet){
        resGet.on('data', function(d){
            res.send(d);
        });
    });
    reqGet.end();
    reqGet.on('error', function(err){
        console.error(err);
    });
});

app.listen(4000);

logger.info("Listening on port 4000");
