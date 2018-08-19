var data = {msg: 'This is an announcement.'};
var bodyParser = require('body-parser');
var urlencodedParser = bodyParser.urlencoded({extended: false});

module.exports = function (app){
    // set up request handles

    app.get('/announce', function(req, res){
        console.log("get: " + data);
        res.render('announce', {data:data});
    });

    app.post('/announce', urlencodedParser, function(req, res){
        data = req.body;
        console.log(req.body);
        res.json(data);
    });

    // not needed
    app.delete('/announce', function(req, res){

    });
    
}