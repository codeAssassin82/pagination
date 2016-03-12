




document.addEventListener('DOMContentLoaded',function(event){
  var addPeople = document.getElementById('button');
  console.log('kjflkd');
  addPeople.addEventListener('click', function(){
    console.log('kjflkd');
    var name = document.getElementById('name').value;
    var li = document.createElement('li')
    li.innerHTML= name
    var peopleList = document.getElementById('randomPeople')
    peopleList.appendChild(li)
     console.log(name);

  })

})
