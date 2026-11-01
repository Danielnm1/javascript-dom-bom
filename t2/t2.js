// array for todo list
const todoList = [
  {
    id: 1,
    task: 'Learn HTML',
    completed: true,
  },
  {
    id: 2,
    task: 'Learn CSS',
    completed: true,
  },
  {
    id: 3,
    task: 'Learn JS',
    completed: false,
  },
  {
    id: 4,
    task: 'Learn TypeScript',
    completed: false,
  },
  {
    id: 5,
    task: 'Learn React',
    completed: false,
  },
];

// add your code here
// select the existing ul element
const todoContainer = document.querySelector("ul") 


todoList.forEach((todo) => {
  // create a new li element
  const listItem = document.createElement("li");
  
  // create a checkbox
const checkbox = document.createElement("input");
  checkbox.type = "checkbox"
  checkbox.id = `todo-${todo.id}`;

// check the chheckbox if the task is suoritettu

  checkbox.checked = todo.completed;


// create a label 
const label = document.createElement("label");
label.htmlFor = `todo-${todo.id}`;
label.textContent = todo.task;

// add the checkbox and label inside the li
listItem.appendChild(checkbox);
listItem.appendChild(label);
todoContainer.appendChild(listItem);
});