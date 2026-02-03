const form = document.querySelector(".header-form");
const tasksList = document.querySelector(".tasks-list");
const btnTheme = document.querySelector(".theme-toggle-button");
const THEME_KEY = "theme";

form.addEventListener("submit", onFormSubmit);
tasksList.addEventListener("click", onDeleteTask);
btnTheme.addEventListener("click", changeTheme);

const tasks = [
  { id: 1, taskName: "task 1", taskDescr: "taskDescr finish 1" },
  { id: 2, taskName: "task 2", taskDescr: "taskDescr finish 2" },
];
init();
function onFormSubmit(event) {
  event.preventDefault();

  const taskName = event.target.elements.taskName.value.trim();
  const taskDescr = event.target.elements.taskDescription.value.trim();
  if (!taskName || !taskDescr) {
    return alert("Всі поля повинні бути заповнені");
  }
  const task = {
    id: tasks.length + 1,
    taskName,
    taskDescr,
  };

  tasks.push(task);
  tasksList.insertAdjacentHTML("beforeend", createTaskMarkup(task));
  event.target.reset();
  console.log("🚀 ~ task:", tasks);
}

function createTaskMarkup(task) {
  return `<li class="task-list-item">
              <button class="task-list-item-btn" data-id="${task.id}">Delete</button>
              <h3>${task.taskName}</h3>
              <p>${task.taskDescr}</p>
            </li>`;
}

function init() {
  if (tasks.length < 0) {
    return;
  }
  tasksList.innerHTML = tasks.map(createTaskMarkup).join("");
}

function onDeleteTask(event) {
  if (!event.target.classList.contains("task-list-item-btn")) {
    return;
  }
  const taskId = Number(event.target.dataset.id);
  const index = tasks.findIndex(task => task.id === taskId);
  if (index !== -1) {
    tasks.splice(index, 1);
  }
  event.target.closest(".task-list-item").remove();
}
function initTheme() {
  const savedTheme = localStorage.getItem(THEME_KEY) || "theme-light";
  document.body.classList.add(savedTheme);
}

function changeTheme() {
  const isLight = document.body.classList.contains("theme-light");

  document.body.classList.remove(isLight ? "theme-light" : "theme-dark");
  document.body.classList.add(isLight ? "theme-dark" : "theme-light");

  localStorage.setItem(THEME_KEY, isLight ? "theme-dark" : "theme-light");
}
