import { createTaskNode } from "./create-task-node/create-taks-node.js"
import { selectSearchInput } from "./select-search-input.js"
import { addTaskOnList } from "./add-task-on-list.js"
import { addCreateTaskCount } from "./Counter-Functions/addCreateTaskCount.js"
import { hiddenNoTaskDiv } from "./no-taks-div/hidden-no-tasks.js"

export function createTask(event) {
  event.preventDefault();
  const input = selectSearchInput();
  const inputValue = input.value;

  if (!inputValue) {
    return console.log("Escreva alguma coisa");
  }

  const task = createTaskNode(inputValue);

  addTaskOnList(task);
  hiddenNoTaskDiv();
  addCreateTaskCount();

  input.value = "";
}