'use strict';
var $display;
var runningTotal;
var currentTotal;

$(document).ready(init);

function init() {

  $display = $('#display');
  $('.num').click(clickNum);
  // $("#invert").click(invert);
  $('#clear').click(clearClicked);
  $(document).on('keypress', keyPressed);
  $('#decimal').click(decimal);
  $('#invert').click(invertSign);
  $('.operator').click(operations);
}
function operations(event) {
var num = $(this).text();
if (runningTotal === 0) {
  runningTotal = num;

} else {

  switch (currentTotal) {

    case '*': {
      runningTotal = runningTotal * num;
      break;
    }
      console.log('times');
    case '-': {
      runningTotal = runningTotal - num;
      break;
}
    case '+': {
      runningTotal = runningTotal + num;
      break;
}
    case '/': {
       runningTotal = runningTotal / num;
      break;
}
    default:console.log('default');
    }
  }
}


// function operation() {


}
function decimal() {
  var currentValue = $display.text();
  if(!currentValue.includes('.')) {
    $display.text(currentValue + '.');
  }
}

function invertSign() {                                                  ////error in this function no - or +
  var currentValue = $display.text();
  $display.text(currentValue * -1);
}

function percent() {
  var currentValue = $display.text();
  $display.text(currentValue / 100);
}

function keyPressed(event) {
  var key = String.fromCharCode(event.charCode);
  console.log(key);

  if($.isNumeric(key)) {
    addNumToDisplay(key);
  }
}
function clickNum() {
  var num = $(this).text();
  console.log('num', num);
  runningTotal = num;
  console.log('runningTotal', runningTotal);
  addNumToDisplay(num);
}

function addNumToDisplay(num) {
  var currentDisplay = $display.text();
  if($display.text() === '0') {
    $display.text(num);
  } else {
    $display.text(currentDisplay + num); // string concat
  }
}

 function clearClicked() {
   $('#display').text(0);
 }
