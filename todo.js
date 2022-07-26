function addTodo() {
  let todo = document.querySelector("input");
  let container = document.querySelector(".todo-list-container");
  todo = todo.value;
  newTodo = createElement(todo);
  container.appendChild(newTodo);

  todoList();

  removeTodo();

  checkTodo();
}

function createElement(todo) {
  let newTodo = document.createElement("div");
  newTodo.innerHTML =
    `<p>${todo}</p>` + `<button class="remove-todo">x</button>`;
  return newTodo;
}

function todoList() {
  let [...todoList] = document.querySelector(".todo-list-container").children;
  let [...todos] = document.querySelector(".todo-list-container").children;

  for (let i = 0; i < todoList.length; i++) {
    todoList[i].classList.add(`${i}`);
    todos[i] = parseInt(todoList[i].className);
    if (todos[i] % 2 != 0) {
      todoList[i].classList = "odd";
    }
    todoList[i].classList.add("check");
  }
}

function removeTodo() {
  let removeTodo = document.querySelectorAll(".remove-todo");
  removeTodo.forEach((todo) =>
    todo.addEventListener("click", () => todo.parentElement.remove())
  );
}

function checkTodo() {
  let checkTodo = document.querySelectorAll(".check");
  checkTodo.forEach((todo) =>
    todo.addEventListener("click", () =>
      todo.style.setProperty("text-decoration", "line-through")
    )
  );

  let backgroundColorChange = document.querySelectorAll(".check");
  backgroundColorChange.forEach((todo) =>
    todo.addEventListener("click", () => (todo.style.backgroundColor = "#888"))
  );
}
