var express = require( 'express' );
var app = express();
var path = require( 'path' );
var bodyParser = require( 'body-parser' );
var urlencodedParser = bodyParser.urlencoded( {extended: false} );

var deviation = require( '../modules/deviation.js' );
var addition = require( '../modules/addition.js' );
var subtraction = require( '../modules/subtraction.js' );
var multiplication = require( '../modules/multiplication.js' );
var division = require( '../modules/division.js' );

var server = app.listen( process.env.PORT || 8080, function() {
  console.log( 'Hailing frequencies open on 8080' );
});

app.get( '/', function( req, res ){
  res.sendFile(path.resolve( 'views/base.html' ));
  console.log( 'Captain, we are being hailed.' );
});

app.post( '/deviation', urlencodedParser, function( req, res ) {
  var fromModule = deviation();
  res.write( 'Post received something...' + req.body.method );
  res.end();
});

app.use(express.static( 'public' ));
