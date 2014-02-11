var express = require("express");
var logger = require("log4js").getLogger();
var fs = require("fs"); 
var app = express();

app.get('/cppjieba', function(req, res){
    //var body = "hello world";
    //logger.debug(body);
    fs.readFile("./public/index.html", function(err, data){
        if(err){
            return err;
        }
        res.set("Content-Type", "text/html;charset=utf-8");
        res.send(data);
        //logger.debug(data);
    });
});

app.listen(4000);

logger.info("Listening on port 4000");
