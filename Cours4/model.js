var mongoose = require('mongoose');

mongoose.connect('mongodb://localhost/ListeaFaire', {useNewUrlParser: true});

var Liste = mongoose.model('Liste', {text: String, date: Date,creator:String } );

module.exports = Liste;

