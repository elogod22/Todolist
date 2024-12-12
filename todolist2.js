 // Select elements
 const form = document.getElementById("todo-form");
 const taskInput = document.getElementById("task-input");
 const taskList = document.getElementById("task-list");
 const errorMessage = document.getElementById("error-message");

 // Maximum number of tasks allowed
 const MAX_TASKS = 10;

 // Add event listener to the form
 form.addEventListener("submit", function(event) {
     event.preventDefault(); // Prevent form submission

     // Get the task value
     const taskValue = taskInput.value.trim();

     // Input validation
     if (taskValue === "") {
         errorMessage.textContent = "Please enter a task!!";
         return;
     }

     if (taskList.children.length >= MAX_TASKS) {
         errorMessage.textContent = `You can only add up to ${MAX_TASKS} tasks!`;
         return;
     }

     // Clear error message and add task
     errorMessage.textContent = "";
     addTask(taskValue);

     // Clear the input field
     taskInput.value = "";
 });

 // Function to add a task
 function addTask(task) {
     // Create a new list item
     const li = document.createElement("li");

     // Create task text
     const taskText = document.createElement("span");
     taskText.textContent = task;

     // Create a checkbox for marking the task as completed
     const checkbox = document.createElement("input");
     checkbox.type = "checkbox";
     checkbox.addEventListener("change", function() {
         taskText.classList.toggle("completed", this.checked);
     });

     // Create a delete button
     const deleteButton = document.createElement("button");
     deleteButton.textContent = "\u00D7";
     deleteButton.addEventListener("click", function() {
         taskList.removeChild(li);
     });

     // Append elements to the list item
     li.appendChild(checkbox);
     li.appendChild(taskText);
     li.appendChild(deleteButton);

     // Append the list item to the task list
     taskList.appendChild(li);
 }