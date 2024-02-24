// Get references to DOM elements
const inputBox = document.getElementById("input-box");
const listContainer = document.getElementById("list-container");

// Function to add a task
function addTask() {
    // Check if the input is empty
    if (inputBox.value === '') {
        alert("You must write something");
    } else {
        // Create a new list item
        let li = document.createElement("li");
        li.innerHTML = inputBox.value;
        
        // Append the new list item to the list container
        listContainer.appendChild(li);
        
        // Create a close button for the task
        let span = document.createElement("span");
        span.innerHTML = "\u00d7";
        
        // Append the close button to the list item
        li.appendChild(span);
    }
    
    // Clear the input box after adding the task
    inputBox.value = "";
    
    // Save the updated task list
    saveData();
}

// Event listener for handling task completion and deletion
listContainer.addEventListener("click", function (e) {
    // Check if the clicked element is a list item
    if (e.target.tagName === "LI") {
        // Toggle the 'checked' class to mark the task as completed
        e.target.classList.toggle("checked");
        // Save the updated task list
        saveData();
    } else if (e.target.tagName === "SPAN") {
        // Remove the parent list item when the close button is clicked
        e.target.parentElement.remove();
        // Save the updated task list
        saveData();
    }
});

// Function to save the task list in localStorage
function saveData() {
    localStorage.setItem("data", listContainer.innerHTML);
}

// Function to retrieve and display the task list from localStorage
function showTask() {
    listContainer.innerHTML = localStorage.getItem("data");
}

// Load the task list when the DOM content is fully loaded
document.addEventListener("DOMContentLoaded", function () {
    showTask();
});
