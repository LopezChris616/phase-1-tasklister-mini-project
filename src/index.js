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
  const li = document.createElement("li");
  const button = document.createElement("button");
  const todoList = document.getElementById("tasks");

  li.textContent = `${input.value} `;
  button.textContent = "X";
  li.appendChild(button);
  todoList.appendChild(li);

  deleteTodo(button);
}

function deleteTodo(button) {
  button.addEventListener("click", () => {
    button.parentNode.remove();
  })
}
