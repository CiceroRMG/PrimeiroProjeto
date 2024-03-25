
export function createDescriptionTask(descripionTask) {
  const span = document.createElement("span");
  span.classList.add("main-input-user");
  span.innerText = descripionTask;

  function selectedDescriptionTask() {
    span.classList.add("through");
  }

  function unselectedDescriptionTask() {
    span.classList.remove("through");
  }

  return {
    elemento: span,
    selectedDescriptionTask: selectedDescriptionTask,
    unselectedDescriptionTask: unselectedDescriptionTask,
  };
}