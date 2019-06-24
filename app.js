//--------------VARIABLES--------------------------------------------
var add = document.getElementById("add-btn");// button to add to the list
var input = document.getElementById("user-input");// get the user's input
var listContainer = document.querySelector(".list-container");

//--------------EVENT LISTENERS-------------------------------------
add.addEventListener("click", addToList);// add when clicked

//----------------FUNCTIONS-----------------------------------------
function addToList() {// add
    
    var listItem = document.createElement("li");// create an li element
    listItem.classList.add("alert");// bootstrap classes
    listItem.classList.add("alert-warning");
    var userInput = document.createTextNode(input.value);
    listItem.appendChild(userInput);// add the input into the li
    
    listContainer.appendChild(listItem);// add the li into ul
    clearInput();
}
function removeFromList() {// remove
    
}
function clearInput() {// clears the input box
    input.value = "";
}