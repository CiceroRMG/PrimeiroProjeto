export function getCountTasksCrated() {
  const count = document.querySelector(".task-new-conta");
  return Number(count.innerHTML);
}