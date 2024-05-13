export function addTaskOnList(task) {
  const taskList = document.querySelector(".tasks-main-text");
  taskList.appendChild(task);
}