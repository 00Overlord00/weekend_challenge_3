var express = require( 'express' );
var app = express();
var path = require( 'path' );
// var bodyParser = require( 'body-parser' );
// var urlencodedParser = bodyParser.urlencoded( {extended: false} );

var deviation = require( '../modules/deviation' );
var addition = require( '../modules/addition' );
var subtraction = require( '../modules/subtraction' );
var multiplication = require( '../modules/multiplication' );
var division = require( '../modules/division' );

var server = app.listen( process.env.PORT || 8080, function() {
  console.log( 'Hailing frequencies open on 8080' );
});

app.get( '/', function(req, res){
  res.sendFile(path.resolve( 'views/base.html' ));
  console.log( 'Captain, we are being hailed.' );
});

// app.post( '/pathPost', urlencodedParser, function(req, res) {
//   res.write( 'Post received something...' + req.body.inputColor );
//   res.end();
// });
