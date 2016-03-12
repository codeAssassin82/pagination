
'use strict';

$(document).ready(init){
  $('#addName').click(addName);
  getAllTodos();
}

function getAllTodos() {
  $.ajax({
    method: "GET",
    url: '/todos',
    success: function(todo) {
      console.log('todo:', todo);
      var $todo = todos.map(function(todo){
        var $todo = $('#template').clone();
        $todo.removeAttr("id");

      });
      $('#todoTable').append($todo);
    }
  })
}

//
// function addName() {
//   var name = $('#newName').val();
//   console.log("name:",name);
//
//   $.ajax({
