//array used for localstorage
var listItemArray = [];
  
window.onload = function() {
//global variables (global scope)
  // var warning = document.getElementById('warning');
  var removeButton = document.querySelector('#removeBtn');
  var addButton = document.querySelector('#btn');
  var clear = document.querySelector('#clear');
  var key = 'todos';
//this is where the party starts
  fetch('todos', render);
  clear.addEventListener('click', clearInput, false);
  addButton.addEventListener('click', addTask, false);
  removeButton.addEventListener('click', removeAll, false);
};



function addTask() {
  console.log('click test')
  var input = document.querySelector('#userTask');
  //returns true or false
  if (validate(input)) {
    //add the list item to an array
    listItemArray.push(input.value);
    //stores user input into array into local storage
    storeListItems(listItemArray, 'todos');
    //renders the list item to the page
    renderList(input.value);
  } 
}
// create a function that adds task on user click button
function renderList(val) {
  //variables within addTask scope
  var inputValue = document.createTextNode(val);
  var addLi = document.createElement('LI');
  var deleteTask = document.createElement('input');
  var myUL = document.getElementById('myUL');

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
 //event that deletes single tasks
  deleteTask.addEventListener('click', function(){
    //values of index
    var index = listItemArray.indexOf(val);
    //removes the index value clicked
    listItemArray.splice(index, 1);
    //save changes to the local storage
    storeListItems(listItemArray, 'todos');
    //remove the list item
    myUL.removeChild(addLi);
  });
  
}

//if input exists; true, else false
function validate(input) {
  return input.value.length ? input : false;
}

//stores user input into local storage
function storeListItems(listItemArray, key, fetch) {
  var notes = JSON.stringify(listItemArray);
  //save user input, turn into strings
  localStorage.setItem(key, notes);
}

//when called, fetches local storage information
function fetch(key, callback) {
  var listItemArray = JSON.parse(localStorage.getItem(key));
  callback(listItemArray);
}


function render(data) {
  if (data !== null  && data.hasOwnProperty('forEach')) {
  //for each current value in local storage
  data.forEach(function (current) {
    //add it to the page
    renderList(current);
  });
  }
}


//define clear button
function clearInput() {
  console.log('click test');
  var input = document.querySelector('#userTask');
  input.value = '';
 
  
}

//function removes all list elements created
function removeAll(myUL) {
  console.log('click test');
  var myUL = document.querySelector('#myUL');
  myUL.innerHTML = '';
  listItemArray = [];
  storeListItems(listItemArray, 'todos');
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
