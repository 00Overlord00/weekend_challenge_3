console.log( 'SCRIPT: GO' );

$(document).ready(function(){
console.log( 'JQUERY: GO' );

var shipIt = function() {
  $( '#sendButton' ).on( 'click', function() {
var x = document.getElementById( '#xField' ).innerHTML;
var y = document.getElementById( '#yField' ).innerHTML;
findMethod();
var equation = {
  'x': x,
  'y': y,
  'method': method };
});
// console.log( equation );
};

var findMethod = function() {
  var method;
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
};


});
