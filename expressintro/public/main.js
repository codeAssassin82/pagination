'use strict';

$(document).ready(init);

function init() {
  $('#descBtn').click(addName);
  getAllTodos();

}

function getAllTodos() {

  //console.log('template: ', $('#template'));
  //console.log('template: ', $('#template').clone());
  console.log('description:', $('#template').clone().children('').text('TESTING EGGS'));

  $.ajax({
    method: 'GET',      /////first ajax GET
    url: '/todos',
    success: function(todos) {
      console.log('todos', todos);

      var $todos = todos.map(function(todo) {
        var $todo = $("#template").clone();
        $todo.removeAttr("id");
        $todo.children(".desc").text(todo.desc);
        $todo.children(".dueDate").text(todo.dueDate);
        if (todo.complete === "true"){
          $todo.find(".done").prop('checked', true);
        }
        return $todo;
      });

      console.log('array of todos', $todos);

      $('#todoTable').append($todos);

   }
 });
}

function addName() {
  var name = $('#descInput').val();
  var dueDate = $('#dueDateInput').val();
  console.log("dueDate",dueDate);

  $.ajax({                ///second ajax POST
    method: 'POST',
    url: '/',
    data: {
      newName: name,
      dueDate: dueDate,
      isComplete: false
     },
    success: function(data) {
      console.log('data:', data);
    },
    error: function(data) {
      console.log('err:',err);
    }
  });
}
// POST    /NAMES
