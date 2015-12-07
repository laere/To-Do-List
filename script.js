// create a function that adds task on user click button
function addTask() {
  // create a list element
  var addLi = document.createElement('LI');
  // retrieves input 
  var input = document.getElementById('userTask');
  // create a text node with the value of the input
  var inputValue = document.createTextNode(input.value);

  //add the textValue to the list item
  addLi.appendChild(inputValue);
  //add the list item to the parent element, ul
  document.getElementById('myUL').appendChild(addLi);
  
  if (input.value === '') {
    alert('Please enter a task!');
  }
}

//function removes all list elements created
function removeAll() {
  
}
