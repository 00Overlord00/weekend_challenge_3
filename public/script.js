console.log( 'SCRIPT: GO' );

$(document).ready(function(){
console.log( 'JQUERY: GO' );

$( '#sendButton' ).on( 'click', function() {
  var x = $( '#xField' ).val();
  var y = $( '#yField' ).val();

  var equation = {
    'x': x,
    'y': y,
    'method': method
  };
console.log( equation );
      shipIt( equation );

  $( '#add' ).on( 'click', function() {
    method = 'addition';
  });
  $( '#subtract' ).on( 'click', function() {
    method = 'subtraction';
  });
  $( '#multiply' ).on( 'click', function() {
    method = 'multiplication';
  });
  $( '#divide' ).on( 'click', function() {
    method = 'division';
  });
});

var showMe = function( answer ) {
  $( '#stagingArea' ).append( answer );
};

  var shipIt = function( objectInTransit ) {
      $.ajax({
      type: 'POST',
       url: '/deviation',
      success: function(data) {
        showMe( data );
        console.log( 'Data Received: ' + equation );
      }
    });
  };
});
