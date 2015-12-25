
window.onload = function() {
//global variables (global scope)
  var warning = document.getElementById('warning');
  
  var clear = document.getElementById('clear')

//array used for localstorage
  var listItemArray = [];
  var key = 'todos';

//this is where the party starts
  fetch('todos', render);
  clear.addEventListener('click', clearInput, false);
  
};
// create a function that adds task on user click button
function addTask() {
  //variables within addTask scope
  var addLi = document.createElement('LI');
  var deleteTask = document.createElement('input');
  var input = document.getElementById('userTask');
  var inputValue = document.createTextNode(input.value);
  var myUL = document.getElementById('myUL');

  validate(input)  //returns input or false

  //define attributes of delete task button
  deleteTask.setAttribute('type', 'submit');
  deleteTask.setAttribute('value', 'X');
  deleteTask.setAttribute('id', 'delete');
  //event listener that toggles a 'crossout' effect for completed tasks
  addLi.addEventListener('click', taskToggle, false);
 //add the input value and delte task elements to the list item
  addLi.appendChild(inputValue);
  addLi.appendChild(deleteTask);
 //add list element to ul element
  myUL.appendChild(addLi);
  //add the list item to an array
  listItemArray.push(input.value);
 //event that deletes single tasks
  deleteTask.addEventListener('click', function(){
    myUL.removeChild(addLi);
  });
  
}

function validate(input) {
  return input.value.length ? input : false
}

function storeListItems(listItemArray, key, fetch) {
  var notes = JSON.stringify(listItemArray);
  fetch(localStorage.setItem(key, notes));
}

function fetch(key, callback) {
  callback(JSON.parse(localStorage.getItem(key)));
}

function render(data) {
  
}




//define clear button
function clearInput() {
  var input = document.getElementById('userTask');
  input.value = '';
}

//function removes all list elements created
function removeAll(myUL) {
  //try while(myUL.firstChild) myUL.firstChild.remove()
  myUL.innerHTML = '';
}

//define crossout function
function taskToggle(e) {
//li elements are targetted by the event object
  var li = e.target;
//if li contains class remove, else add
  if (li.classList.contains('crossOut')) {
    li.classList.remove('crossOut');
  } else {
    li.classList.add('crossOut');
  }
}
