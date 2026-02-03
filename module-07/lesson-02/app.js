const form = document.querySelector(".header-form");
const taskList = document.querySelector(".tasks-list");

const tasks = [];
form.addEventListener("submit", onHeaderFormSubmit);
taskList.addEventListener("click", onButtonClick);
taskList.addEventListener("click", handleCheckboxClick);

init();

function onHeaderFormSubmit(event) {
  event.preventDefault();
  const targetName = event.target.taskName.value.trim();
  const targetDescr = event.target.taskDescription.value.trim();
  console.log("🚀 ~ onHeaderFormSubmit ~ targetDescr:", targetDescr);
  console.log("🚀 ~ onHeaderFormSubmit ~ targetName:", targetName);
  if (!targetName || !targetDescr) {
    alert("Поля не можуть бути порожніми");
    return;
  }
  const task = {
    id: tasks.length + 1,
    taskName: targetName,
    taskDescription: targetDescr,
    completed: false,
  };

  tasks.push(task);
  taskList.insertAdjacentHTML("beforeend", createTaskMarkup(task));
  event.target.reset();
}

function createTaskMarkup(task) {
  return `<li class="task-list-item">
            <div>
            <input "${task.completed ? checked : ""}" type="checkbox" />
            <button class="task-list-item-btn" id="${task.id}">Delete</button>
            </div>
            <h3 class="${task.completed ? "completed" : ""}">${task.taskName}</h3>
            <p class="${task.completed ? "completed" : ""}">${task.taskDescription}</p>
          </li>`;
}

function init() {
  if (tasks.length < 0) {
    return;
  }
  taskList.innerHTML = tasks.map(createTaskMarkup).join("");
}

function deleteTask(tasks, taskId) {
  const index = tasks.findIndex(task => task.id === taskId);
  if (index !== -1) {
    tasks.splice(index, 1);
  }
}

function onButtonClick(event) {
  const clickedElem = event.target;
  if (clickedElem.nodeName === "BUTTON") {
    deleteTask(tasks, Number(clickedElem.id));
    console.log("🚀 ~ onButtonClick ~ tasks:", tasks);
    init(tasks);
  }
}

function handleCheckboxClick(event) {
  if (event.target.nodeName !== "INPUT") {
    return;
  }
  const itemEl = event.target.closest(".task-list-item");
  if (event.target.checked) {
    itemEl.querySelector("h3").classList.toggle("completed");
    itemEl.querySelector("p").classList.toggle("completed");
  }
}
