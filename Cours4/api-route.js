var Liste = require('./model');

var route=function(app){
	app.get('/', function(req, res) {
		res.sendFile('./public/index.html');
	});

	app.get('/api/laliste', function(req,res) {
		Liste.find(function(err, laliste) {
			if(err)
				res.send(err);
			res.json(laliste);
		});
	});

	app.post('/api/laliste', function(req,res) {
		Liste.create({
			text : req.body.text,
			date : new Date(),
			creator : 'Manjary',
			done : false
	}, function(err,liste){
		if(err)
			res.send(err);
		Liste.find(function(err,laliste){
		if(err)
			res.send(err);
		res.json(laliste);
			});
		});
	});

	app.delete('/api/laliste/:liste_id', function(req,res){
		Liste.deleteOne({
			_id : req.params.liste_id}, function(err,liste) {
				if(err)
					res.send(err);
				Liste.find(function(err, laliste) {
					if (err)
						res.send(err);
					res.json(laliste);
				});
			});
	});
}

module.exports = route;