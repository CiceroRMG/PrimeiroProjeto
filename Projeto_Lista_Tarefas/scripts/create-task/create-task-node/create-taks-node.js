import { createButtonTrash } from "../Trash-Button/createButtonTrash.js"
import { createDescriptionTask } from "./createDescriptionTask.js"
import { createCheckbox } from "../Check-Box/create-checkbox.js";
import { createListItem } from "./createListItens.js"
import {addContadorConcluidas} from "../Counter-Functions/contador-Concluidas.js"
import {subContadorConcluidas} from "../Counter-Functions/contador-Concluidas.js"
import {subCreateTaskCount} from "../Counter-Functions/subCreateTaskCount.js"
import {addNoTaskDiv} from "../no-taks-div/add-no-tasks.js"
import {getCountTasksCrated} from "../Counter-Functions/getCountTasksCreated.js"

export function createTaskNode(descripionTask) {
  const listItem = createListItem();

  const checkbox = createCheckbox();
  const descriptionTask = createDescriptionTask(descripionTask);
  const buttonTrash = createButtonTrash();

  listItem.appendChild(checkbox.elemento);
  listItem.appendChild(descriptionTask.elemento);
  listItem.appendChild(buttonTrash);

  checkbox.elemento.addEventListener("click", (event) => {
    const isChecked = event.target.checked;
    if (isChecked === true) {
      checkbox.selectCheckbox();
      descriptionTask.selectedDescriptionTask();
      addContadorConcluidas();
    } else if (isChecked === false) {
      checkbox.unselectCheckbox();
      descriptionTask.unselectedDescriptionTask();
      subContadorConcluidas();
    }
  });

  buttonTrash.addEventListener("click", (event) => {
    const isChecked = descriptionTask.elemento.classList.contains("through");
    if (isChecked) {
      subContadorConcluidas();
    }
    listItem.remove();
    subCreateTaskCount();

    const countCreatedTasks = getCountTasksCrated();

    if (countCreatedTasks === 0) {
      addNoTaskDiv();
    }
  });

  return listItem;
}