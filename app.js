//--------------VARIABLES--------------------------------------------
var add = document.getElementById("add-btn");// button to add to the list
var input = document.getElementById("user-input");// get the user's input
var listContainer = document.querySelector(".list-container");

//--------------EVENT LISTENERS-------------------------------------
add.addEventListener("click", addToList);// add when clicked

//----------------FUNCTIONS-----------------------------------------
function addToList() {// add
    
    if (input.value === "" || input.value == null || input.value === undefined) {
        alert("Nothing added to list");
        } else {
            //LIST ITEMS
            var listItem = document.createElement("li");// create an li element
            var close = document.createElement("img");// close icon
            close.setAttribute("src", "images/cross.png");
            listItem.classList.add("alert");
            listItem.classList.add("alert-warning");
            var userInput = document.createTextNode(input.value);
            listItem.appendChild(userInput);// add the input into the li
            listItem.appendChild(close);// add icon to li

            //APPEND LI TO UL AND CLEAR INPUT BOX
            listContainer.appendChild(listItem);
            clearInput();

            //CROSS OUT
            listItem.addEventListener("click", function() {
                listItem.style.textDecoration = "line-through";
                listItem.classList.remove("alert-warning");
                listItem.classList.add("alert-secondary");
            });

            //REMOVE FROM LIST
            close.addEventListener("click", function() {
                listContainer.removeChild(listItem);
            });
    }
}
function clearInput() {// clears the input box
    input.value = "";
}