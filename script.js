var warning = document.getElementById('warning');
var myUL = document.getElementById('myUL');
var input = document.getElementById('userTask');

var listItemArray = [];



document.addEventListener('keypress', function(event) {
   var characterCode = event.charCode || event.which || event.keyCode;    //set var to charCode or keyCode. Did it this way for better browser support
   if (characterCode === 13) {
    addTask();
   }
}, false);

document.getElementById('container').addEventListener('click', function(event) {
  var element = event.target;
  if (element === document.getElementById('btn')) {
    addTask();
  }
  else if (element === document.getElementById('clear')) {
    clearInput();
  }
  else if (element === document.getElementById('removeBtn')) {
    removeAll();
  }
  event.stopPropagation();
}, false);


/*
      ALL FUNCTIONS BELOW
*/

// create a function that adds task on user click button
function addTask() {

  // retrieves input
  var inputValue = document.createTextNode(input.value);
  var addLi = document.createElement('LI');
  var deleteTask = document.createElement('input');
  
  //tells user to enter a task
  if (input.value === '') {
    warning.innerHTML = 'Please enter a task!';
    // ends execution of this function, because if the value is not valid, why do anything else?
    return;
  } else {
      warning.innerHTML = '';
  }

  //make this a delete button instead
  
  deleteTask.setAttribute('type', 'submit');
  deleteTask.setAttribute('value', 'X');
  deleteTask.setAttribute('id', 'delete');
  
  // define behaviour for onClick
  addLi.addEventListener('click', taskToggle, false);

 //add the textValue to the list item
 addLi.appendChild(inputValue);
 addLi.appendChild(deleteTask);
  
 
 myUL.appendChild(addLi);
 
 deleteTask.addEventListener('click', function(){
   myUL.removeChild(addLi);
 });
  

  //LOCAL STORAGE
  
  //add the list item to an array
  listItemArray.push(input.value);
  
  localStorage.setItem('todos', JSON.stringify(listItemArray));
  
  
  // var retrieveTodos = JSON.parse(localStorage.getItem('todos'));

  // listItemArray.forEach(function(current, index, array) {
  //   var textNode = document.createTextNode();
  //   addLi.appendChild(textNode);
  // });

}

function clearInput() {
  input.value = '';
}




//function removes all list elements created
function removeAll() {
  myUL.innerHTML = '';

}

/* When clicking an LI element
  text-decoration crosses out LI element
*/

// function called when addListenerEvent runs
function taskToggle(e) {
  // li elementd are targetted by the event object
  var li = e.target;

  if (li.classList.contains('crossOut')) {
    li.classList.remove('crossOut');
  } else li.classList.add('crossOut');

}