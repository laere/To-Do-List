
window.onload = function() {
  var LOCAL_STORAGE = [];
  //renders localstorage values to page
  function renderPlaceholder() {

  }
  //stores user input into local storage
  function storeListItems(LOCAL_STORAGE, key, fetch) {
    var notes = JSON.stringify(LOCAL_STORAGE);
    //save user input, turn into strings
    LOCAL_STORAGE.setItem(key, notes);
  }
  //when called, fetches local storage information
  function fetch(key, callback) {
    var LOCAL_STORAGE = JSON.parse(LOCAL_STORAGE.getItem(key));
    callback(LOCAL_STORAGE);
  }
  function render(data) {
    if (data !== null  && data.hasOwnProperty('forEach')) {
      //for each current value in local storage
      data.forEach(function (current) {
        //add it to the page
        renderPlaceholder(current);
      });
    }
  }
};
