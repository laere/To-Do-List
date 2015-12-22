var warning = document.getElementById('warning');
var myUL = document.getElementById('myUL');


var listItemArray = [];





// create a function that adds task on user click button
function addTask() {

  // retrieves input 
  var input = document.getElementById('userTask');
  var inputValue = document.createTextNode(input.value);
  var addLi = document.createElement('LI');
  var deleteTask = document.createElement('input');
  //tells user to enter a task
  if (input.value === '') {
    warning.innerHTML = "Please enter a task!"
    // ends execution of this function, because if the value is not valid, why do anything else?
    return;
  } else {
      warning.innerHTML = '';
  }

  //make this a delete button instead
  
  deleteTask.setAttribute('type', 'submit');
  deleteTask.setAttribute('value', 'Remove');
  deleteTask.setAttribute('id', 'delete');
  
  // define behaviour for onClick
  // addLi.addEventListener('click', taskToggle, false);

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
  
  localStorage.setItem("todos", JSON.stringify(listItemArray));
  
  
  // var retrieveTodos = JSON.parse(localStorage.getItem('todos'));

  // listItemArray.forEach(function(current, index, array) {
  //   var textNode = document.createTextNode();
  //   addLi.appendChild(textNode);
  // });

}





//function removes all list elements created
function removeAll() {
  //store the UL element
  // var removeAllTasks = document.getElementById('myUL');
  //use the innerHTML function to update the UL with an empty string
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

