//input box
const inputBox = document.getElementById("input-box");
//list container
const listContainer = document.getElementById("list-container");

//the on click function for the button
function addTask(){
    if(inputBox.value === ''){ 
        alert("You must write something!");
    }
    else{
        let li = document.createElement("li"); //creates a li HTML element
        li.innerHTML = inputBox.value; //assigning the text of the li to be the input box value
        listContainer.appendChild(li); //puts the li in the list container

        //add cross icon
        let span = document.createElement("span");
        span.innerHTML = "\u00d7";
        li.appendChild(span)
    }
    inputBox.value = ""; //clears input after element is added
    saveData(); //whenever we make changes, this is called
}

//if click on list container, check if it is list item or span
    //if list item, check and cross
    //if span, delete list item
listContainer.addEventListener("click", function(e){
    if(e.target.tagName === "LI"){ //if we clicked on li
        e.target.classList.toggle("checked"); //toggle checked (cross element and check circle)
        saveData();
    }
    else if(e.target.tagName === "SPAN"){ //if clicked on cross
        e.target.parentElement.remove(); //delete li
        saveData();
    }
}, false)

//NOW WE STORE THE LIST CONTAINER ON BROWSER (if reloaded then we don't want our list to reset)
function saveData(){
    localStorage.setItem("data", listContainer.innerHTML); //list container is stored locally
}
//display the data
function showTask(){
    listContainer.innerHTML = localStorage.getItem("data");
}
showTask();