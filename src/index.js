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
    const button = document.createElement("button");
    const todoList = document.getElementById("tasks");

    if(validationMessage.hasChildNodes()) {
      validationMessage.removeChild(validationMessage.firstChild);
    }
  
    li.textContent = `${input.value} `;
    button.textContent = "X";
    li.appendChild(button);
    todoList.appendChild(li);
    input.value = "";
  
    deleteTodo(button);
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
