'use strict';

$(document).ready(init);
function init() {

  $('#outerHolder').on('click', '.box', clickHolder);
  // $('#outerHolder').on('click', '#outerHolder', clickHolder);
  $('#addPlayer').on('click', addPlayer);
}


function addPlayer(){
  var playerName = $('#nameOfPlayer').val();
  console.log(playerName);

  var $div = $('<div>');
  $div.text(playerName);
  console.log($div.text(playerName));

  $('#box1').append($div);

}
function clickName(event){
$(".selected").appendTo($(this));
$(".selected").removeClass("selected");
}




function clickHolder(event) {
  var $this = $(this);
  // ('.selected').appendTo($(this));
  // ('.selected').removeClass('selected');
  console.log($this);
  $(this).children().appendTo($(this).parent().siblings());
  // $("#box2").append($detached);
// }

  // var $destination = $this.parent().siblings();
  // console.log('destination', destination);
  // var $box = $this.detach();
  console.log('box');
  // $destination.append($box);
}

// var playerName = $('#nameOfPlayer').val();
// var $div = $('<div>');
// $div.text(playerName);
//   $('#box1').append($div);
  // $('#box2').append($cups);
  // $('#box3').append($cups);
  // $('#box4').append($cups);
// }


// function clickName() {
//   event.stopPropagation();
//   var $this = $(this);
//   var wasSelected = $(this).hasClass('selected');
//
//   $('nameOfPlayer').removeClass('selected');
//   if(!wasSelected) {
//     $this.addClass('selected');
//   }
//
//   var $destination = $this.parent().siblings();
//   var $cup = $this.detach();
//   $destination.append($cup);
// }
//

// function moveIt() {
//   console.log('cup right again son');
//   var $target = $(this);
//   $target.addClass('grey');
//   var $detached = $(this).detach();
//   $('#left').append($detached);
// }
