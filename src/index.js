const validationMessage = document.getElementById("validation-message");

document.addEventListener("DOMContentLoaded", () => {
  submitForm();
});

function submitForm() {
  const form = document.getElementById("create-task-form");
  const input = document.getElementById("new-task-description");
  form.addEventListener("submit", event => {
    event.preventDefault();
    createTodoElement(input);
  });
}

function createTodoElement(input) {
  if(input.value.length >= 5) {
    const li = document.createElement("li");
    const deleteButton = document.createElement("button");
    const editButton = document.createElement("button");
    const todoList = document.getElementById("tasks");

    if(validationMessage.hasChildNodes()) {
      validationMessage.removeChild(validationMessage.firstChild);
    }
  
    li.textContent = `${input.value} `;
    deleteButton.textContent = "X";
    editButton.textContent = "Edit";
    li.appendChild(deleteButton);
    li.appendChild(editButton);
    todoList.appendChild(li);
    todoPriority(li);

    const todoArr = [];
    todoArr.push(input.value);

    editButton.addEventListener("click", () => {
      editTodo(todoArr, li, todoArr);
    });
    input.value = "";
  
    deleteTodo(deleteButton);
  } else {
    if(validationMessage.hasChildNodes() === false) {
      inputValidation();
    }
  }

}

function deleteTodo(button) {
  button.addEventListener("click", () => {
    button.parentNode.remove();
  })
}

function inputValidation() {
  const p = document.createElement("p");
  p.textContent = "Must enter at least 5 characters!";
  validationMessage.appendChild(p);
}

function todoPriority(todo) {
  const priority = document.getElementById("priority");
  switch (priority.value) {
    case "High":
      todo.style.color = "red";
      break;
    case "Medium":
      todo.style.color = "yellow";
      break;
    case "Low":
      todo.style.color = "green";
      break;
    default:
      todo.style.color = "black";
      break;
  }
}

function editTodo(todo, li, todoArr) {
  const editInput = document.createElement("input");
  const saveButton = document.createElement("button");
  const editDiv = document.createElement("div");
  
  if(li.childNodes.length <= 3) {
    editInput.value = todo[0];
    saveButton.textContent = "Save Changes";
    editDiv.appendChild(editInput);
    editDiv.appendChild(saveButton);
  
    li.appendChild(editDiv);
  
    editDiv.style.display = "block";
  
    saveButton.addEventListener("click", () => {
      li.childNodes[0].textContent = editInput.value;
      todoArr[0] = editInput.value;
    });
  } else {
    li.removeChild(li.childNodes[3]);
  }
}