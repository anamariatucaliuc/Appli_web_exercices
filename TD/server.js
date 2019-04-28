var express  = require('express');
var app      = express();                               
var mongoose = require('mongoose');
var morgan = require('morgan'); 
var bodyParser = require('body-parser');

app.use(express.static(__dirname + '/public')); 
app.use(morgan('dev'));
app.use(bodyParser.urlencoded({'extended':'true'}));
app.use(bodyParser.json());
app.use(bodyParser.json({ type: 'application/vnd.api+json' }));


mongoose.connect('mongodb://localhost/ListeaFaire', { useNewUrlParser: true });

var Liste = mongoose.model('Liste', {
    text : String
});


app.get('/', function(req, res) {
    res.sendFile('./public/index.html'); 
});


app.get('/api/laliste', function(req, res) {
    Liste.find(function(err, laliste) {
        if (err)
            res.send(err)
        res.json(laliste); 
    });
});

app.post('/api/laliste', function(req, res) {
    Liste.create({
        text : req.body.text,
        done : false
    }, function(err, liste) {
        if (err)
            res.send(err);
        Liste.find(function(err, laliste) {
            if (err)
                res.send(err)
            res.json(laliste);
        });
    });
});

app.delete('/api/laliste/:liste_id', function(req, res) {
    Liste.deleteOne({
        _id : req.params.liste_id
    }, function(err, liste) {
        if (err)
            res.send(err);
        Liste.find(function(err, laliste) {
            if (err)
                res.send(err)
            res.json(laliste);
        });
    });
});

app.listen(8080);
console.log("on utilise le port: 8080");
