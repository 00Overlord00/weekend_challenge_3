var addition = require( 'addition' );
var subtraction = require( 'subtraction' );
var multiplication = require( 'multiplication' );
var division = require( 'division' );

var deviation = function( data ) {
  if( data.method == addition ) {
    deviation = addition.addition(data.x, data.y);
  }else if( data.method == subtraction ) {
    deviation = subtraction.subtraction(data.x, data.y);
  }else if( data.method == multiplication ) {
    deviation = multiplication.multiplication(data.x, data.y);
  }else if( data.method == division ) {
    deviation = division.division(data.x, data.y);
  }else {
    return 'ERROR: No method specified';
  }
};
};

module.exports = deviation.js;
