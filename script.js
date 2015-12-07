// create a function that adds task on user click button
function addTask() {

  // retrieves input 
  var input = document.getElementById('userTask');

  //tells user to enter a task
  if (input.value === '') {
    alert('Please enter a task!');
    // ends execution of this function, because if the value is not valid, why do anything else?
    return;
  }

  // create a list element
  var addLi = document.createElement('LI');
  
  // define behaviour for onClick
  addLi.addEventListener('click', taskToggle, false);

  // create a text node with the value of the input
  var inputValue = document.createTextNode(input.value);

  //add the textValue to the list item
  addLi.appendChild(inputValue);
  //add the list item to the parent element, ul
  document.getElementById('myUL').appendChild(addLi)
  
  
  //clears the input value after a task is added
  input.value = '';

}

//function removes all list elements created
function removeAll() {
  //store the UL element
  var removeAllTasks = document.getElementById('myUL');
  //use the innerHTML function to update the UL with an empty string
  removeAllTasks.innerHTML = '';

}

/* When clicking an LI element
  text-decoration crosses out LI element
*/

// function called when addListenerEvent runs
function taskToggle(e) {
  // li elementd are targetted by the event object
  var li = e.target;
  // conditional determines if li is an event
  // give it the class of 'crossOut'
  //crosses out tasks when clicked
  if (e) {
    li.classList.add('crossOut');
  } 
}

