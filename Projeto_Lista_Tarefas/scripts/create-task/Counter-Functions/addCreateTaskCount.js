export function addCreateTaskCount() {
  const count = document.querySelector(".task-new-conta");
  const oldValue = Number(count.innerHTML);
  count.innerHTML = `${oldValue + 1}`;
}