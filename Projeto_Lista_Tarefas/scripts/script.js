// let newform = document.createElement("form")
// newform.classList.add("tasks-main-form")

// let btnMain = document.createElement("button")
// btnMain.classList.add("btn-main")

// let btnMainImg = document.createElement("img")
// btnMainImg.setAttribute("src", "/Projeto_Lista_Tarefas/Img/btn-not.svg")

// btnMain.appendChild(btnMainImg);
// newform.appendChild(btnMain)

// let btnMainSelected = document.createElement("button")
// btnMainSelected.classList.add("btn-main", "hidden")

// let btnMainImgSelected = document.createElement("img")
// btnMainImgSelected.setAttribute("src", "/Projeto_Lista_Tarefas/Img/btn-select.svg")

// btnMainSelected.appendChild(btnMainImgSelected);
// newform.appendChild(btnMainSelected);

// let textAreaMain = document.createElement("textarea")
// textAreaMain.classList.add("main-input-user")
// textAreaMain.setAttribute("rows", "2")
// textAreaMain.setAttribute("maxlenght", "150")

// newform.appendChild(textAreaMain);

// let btnTrash = document.createElement("button")
// btnTrash.classList.add("btn-trash")

// let btnTrashImg = document.createElement("img")
// btnTrashImg.setAttribute("src", "/Projeto_Lista_Tarefas/Img/trash.svg")

// btnTrash.appendChild(btnTrashImg);
// newform.appendChild(btnTrash);

// Criar a logica de que quando submete a task ela é criada -OK
/// botar um escutador no botao - OK
//// quando clicar no botao -OK
////// pega o valor do input - OK
////// se o valor for vazio, nao permite - OK
///// coloca o valor em uma div - OK
///// Aumenta o contador de criada

// criar funçao para selecionar a task
//// quando clicamos no botao para selecionar
////// verifica se o botao esta selecionado - OK
/////// muda o texto (estilização) - OK
/////// muda a imagem para checked - OK
/////// aumenta o contador para +1 - OK

/// cria função de excluir task - OK

//APENAS ISSO TEM QUE ESTAR NO SCRIPT.JS --------
const createbtn = document.querySelector(".btn-search");
createbtn.addEventListener("click", createTask);
// ----------------------------------------------

function createTask(event) {
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

function selectSearchInput() {
  const input = document.querySelector(".input-search");
  return input;
}

function addTaskOnList(task) {
  const taskList = document.querySelector(".tasks-main-text");
  taskList.appendChild(task);
}

// ---------------- Create Task Node ----------------
function createTaskNode(descripionTask) {
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

function createListItem() {
  const createListItem = document.createElement("li");
  createListItem.classList.add("tasks-main-form");
  return createListItem;
}

function createCheckbox() {
  const input = document.createElement("input");
  input.setAttribute("type", "checkbox");
  input.classList.add("hidden");

  const label = document.createElement("label");
  label.classList.add("btn-main");
  label.appendChild(input);

  const imgUnselected = document.createElement("img");
  imgUnselected.setAttribute("src", "/Projeto_Lista_Tarefas/Img/btn-not.svg");
  const imgSelected = document.createElement("img");
  imgSelected.setAttribute("src", "/Projeto_Lista_Tarefas/Img/btn-select.svg");
  imgSelected.classList.add("hidden");

  label.appendChild(imgSelected);
  label.appendChild(imgUnselected);

  function selectCheckbox() {
    imgSelected.classList.remove("hidden");
    imgUnselected.classList.add("hidden");
  }

  function unselectCheckbox() {
    imgSelected.classList.add("hidden");
    imgUnselected.classList.remove("hidden");
  }

  return {
    elemento: label,
    selectCheckbox: selectCheckbox,
    unselectCheckbox: unselectCheckbox,
  };
}

function createDescriptionTask(descripionTask) {
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

function createButtonTrash() {
  const button = document.createElement("button");
  button.classList.add("btn-trash");
  const imgTrash = document.createElement("img");
  imgTrash.setAttribute("src", "/Projeto_Lista_Tarefas/Img/trash.svg");
  button.appendChild(imgTrash);

  return button;
}

// ---------------- Counters Functions ----------------

function addCreateTaskCount() {
  const count = document.querySelector(".task-new-conta");
  const oldValue = Number(count.innerHTML);
  count.innerHTML = `${oldValue + 1}`;
}

function subCreateTaskCount() {
  const count = document.querySelector(".task-new-conta");
  const oldValue = Number(count.innerHTML);
  count.innerHTML = `${oldValue - 1}`;
}

function addContadorConcluidas() {
  const contadorConcluidas = document.querySelector(".task-conclude-conta");
  const oldValue = Number(contadorConcluidas.innerHTML);
  contadorConcluidas.innerHTML = `${oldValue + 1}`;
}

function subContadorConcluidas() {
  const contadorConcluidas = document.querySelector(".task-conclude-conta");
  const oldValue = Number(contadorConcluidas.innerHTML);
  contadorConcluidas.innerHTML = `${oldValue - 1}`;
}

function getCountTasksCrated() {
  const count = document.querySelector(".task-new-conta");
  return Number(count.innerHTML);
}

// ---------------- No Task Div ----------------
function addNoTaskDiv() {
  const noTaskDiv = document.querySelector(".no-tasks-section");
  noTaskDiv.classList.remove("hidden");
}

function hiddenNoTaskDiv() {
  const noTaskDiv = document.querySelector(".no-tasks-section");
  noTaskDiv.classList.add("hidden");
}
