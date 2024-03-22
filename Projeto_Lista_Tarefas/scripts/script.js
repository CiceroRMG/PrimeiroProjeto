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

const addTextinArea = document.querySelectorAll(".main-input-user")

let i = 0
function createNewDiv(event) {
  event.preventDefault()
  const tasksMainList = document.querySelectorAll(".tasks-main-form")
  let inputText = document.querySelector(".input-search")
  let inputTextValue = inputText.value

  if(inputTextValue == ""){
    return console.log("Escreva alguma coisa")
  }
  if(i < tasksMainList.length) {
  while(tasksMainList[i].classList.contains("aparece")){
    i++
  }
  let nullTasks = document.querySelector(".no-tasks-section")
  nullTasks.classList.add("hidden")
  tasksMainList[i].classList.remove('hidden')
  tasksMainList[i].classList.add('aparece')
  let apareceList = document.querySelectorAll(".aparece")

  addTextinArea[i].innerText = inputTextValue
  inputText.value = ""

  i++
  let contadorTarefas = document.querySelector(".task-new-conta")
  contadorTarefas.innerText = `${apareceList.length}`


  } else {
    let tasksMainList = document.querySelectorAll(".tasks-main-form")
    tasksMainList[i - 1].classList.add("padding-buttom")
    console.log("Valor Excedido")
    }
}

const createbtn = document.querySelector('.btn-search')
createbtn.addEventListener("click", createNewDiv)


const trashBtn = document.querySelectorAll(".btn-trash")
const tasksMainList = document.querySelectorAll(".tasks-main-form")
const contadorTarefas = document.querySelector(".task-new-conta")
const nullTasks = document.querySelector(".no-tasks-section")
const apareceList = document.querySelectorAll(".aparece")

//botão para excluir tarefa

trashBtn[0].addEventListener("click", (event) =>{
  event.preventDefault()
  tasksMainList[0].classList.add('hidden')
  tasksMainList[0].classList.remove('aparece')
  let numero = contadorTarefas.textContent
  let subtra = Number(numero) - 1
  contadorTarefas.textContent = `${subtra}`
  i = 0
  if(subtra == 0){
    nullTasks.classList.remove("hidden")
    i = 0
  }
}
)
trashBtn[1].addEventListener("click", (event) =>{
  event.preventDefault()
  tasksMainList[1].classList.add('hidden')
  tasksMainList[1].classList.remove('aparece')
  let numero = contadorTarefas.textContent
  let subtra = Number(numero) - 1
  contadorTarefas.textContent = `${subtra}`
  i = 0
  if(subtra == 0){
    nullTasks.classList.remove("hidden")
    i = 0
  }
}
)
trashBtn[2].addEventListener("click", (event) =>{
  event.preventDefault()
  tasksMainList[2].classList.add('hidden')
  tasksMainList[2].classList.remove('aparece')
  let numero = contadorTarefas.textContent
  let subtra = Number(numero) - 1
  contadorTarefas.textContent = `${subtra}`
  i = 0
  if(subtra == 0){
    nullTasks.classList.remove("hidden")
    i = 0
  }
}
)
trashBtn[3].addEventListener("click", (event) =>{
  event.preventDefault()
  tasksMainList[3].classList.add('hidden')
  tasksMainList[3].classList.remove('aparece')
  let numero = contadorTarefas.textContent
  let subtra = Number(numero) - 1
  contadorTarefas.textContent = `${subtra}`
  i = 0
  if(subtra == 0){
    nullTasks.classList.remove("hidden")
    i = 0
  }
}
)
trashBtn[4].addEventListener("click", (event) =>{
  event.preventDefault()
  tasksMainList[4].classList.add('hidden')
  tasksMainList[4].classList.remove('aparece')
  let numero = contadorTarefas.textContent
  let subtra = Number(numero) - 1
  contadorTarefas.textContent = `${subtra}`
  i = 0
  if(subtra == 0){
    nullTasks.classList.remove("hidden")
    i = 0
  }
}
)
trashBtn[5].addEventListener("click", (event) =>{
  event.preventDefault()
  tasksMainList[5].classList.add('hidden')
  tasksMainList[5].classList.remove('aparece')
  let numero = contadorTarefas.textContent
  let subtra = Number(numero) - 1
  contadorTarefas.textContent = `${subtra}`
  i = 0
  if(subtra == 0){
    nullTasks.classList.remove("hidden")
    i = 0
  }
}
)
trashBtn[6].addEventListener("click", (event) =>{
  event.preventDefault()
  tasksMainList[6].classList.add('hidden')
  tasksMainList[6].classList.remove('aparece')
  let numero = contadorTarefas.textContent
  let subtra = Number(numero) - 1
  contadorTarefas.textContent = `${subtra}`
  i = 0
  if(subtra == 0){
    nullTasks.classList.remove("hidden")
    i = 0
  }
}
)

trashBtn[7].addEventListener("click", (event) =>{
  event.preventDefault()
  tasksMainList[7].classList.add('hidden')
  tasksMainList[7].classList.remove('aparece')
  let numero = contadorTarefas.textContent
  let subtra = Number(numero) - 1
  contadorTarefas.textContent = `${subtra}`
  i = 0
  if(subtra == 0){
    nullTasks.classList.remove("hidden")
    i = 0
  }
}
)

trashBtn[8].addEventListener("click", (event) =>{
  event.preventDefault()
  tasksMainList[8].classList.add('hidden')
  tasksMainList[8].classList.remove('aparece')
  let numero = contadorTarefas.textContent
  let subtra = Number(numero) - 1
  contadorTarefas.textContent = `${subtra}`
  i = 0
  if(subtra == 0){
    nullTasks.classList.remove("hidden")
    i = 0
  }
}
)
trashBtn[9].addEventListener("click", (event) =>{
  event.preventDefault()
  tasksMainList[9].classList.add('hidden')
  tasksMainList[9].classList.remove('aparece')
  let numero = contadorTarefas.textContent
  let subtra = Number(numero) - 1
  contadorTarefas.textContent = `${subtra}`
  i = 0
  if(subtra == 0){
    nullTasks.classList.remove("hidden")
    i = 0
  }
}
)


const textAreaBox = document.querySelectorAll(".main-input-user")
const btnMainS = document.querySelectorAll(".selected")
const btnMainUnselected = document.querySelectorAll(".un")
const contadorConcluido = document.querySelector(".task-conclude-conta")

//Clique no botão deselecionado para selecionar

btnMainUnselected[0].addEventListener("click", (event) => {
  event.preventDefault()
  btnMainUnselected[0].classList.add("hidden")
  btnMainS[0].classList.remove("hidden")
  textAreaBox[0].classList.add("through")
  btnMainS[0].classList.add('contador')
  let contadorContando = document.querySelectorAll('.contador')
  contadorConcluido.innerText = `${contadorContando.length}`
}
)
btnMainUnselected[1].addEventListener("click", (event) => {
  event.preventDefault()
  btnMainUnselected[1].classList.add("hidden")
  btnMainS[1].classList.remove("hidden")
  textAreaBox[1].classList.add("through")
  btnMainS[1].classList.add('contador')
  let contadorContando = document.querySelectorAll('.contador')
  contadorConcluido.innerText = `${contadorContando.length}`
}
)
btnMainUnselected[2].addEventListener("click", (event) => {
  event.preventDefault()
  btnMainUnselected[2].classList.add("hidden")
  btnMainS[2].classList.remove("hidden")
  textAreaBox[2].classList.add("through")
  btnMainS[2].classList.add('contador')
  let contadorContando = document.querySelectorAll('.contador')
  contadorConcluido.innerText = `${contadorContando.length}`
}
)
btnMainUnselected[3].addEventListener("click", (event) => {
  event.preventDefault()
  btnMainUnselected[3].classList.add("hidden")
  btnMainS[3].classList.remove("hidden")
  textAreaBox[3].classList.add("through")
  btnMainS[3].classList.add('contador')
  let contadorContando = document.querySelectorAll('.contador')
  contadorConcluido.innerText = `${contadorContando.length}`
}
)
btnMainUnselected[4].addEventListener("click", (event) => {
  event.preventDefault()
  btnMainUnselected[4].classList.add("hidden")
  btnMainS[4].classList.remove("hidden")
  textAreaBox[4].classList.add("through")
  btnMainS[4].classList.add('contador')
  let contadorContando = document.querySelectorAll('.contador')
  contadorConcluido.innerText = `${contadorContando.length}`
}
)
btnMainUnselected[5].addEventListener("click", (event) => {
  event.preventDefault()
  btnMainUnselected[5].classList.add("hidden")
  btnMainS[5].classList.remove("hidden")
  textAreaBox[5].classList.add("through")
  btnMainS[5].classList.add('contador')
  let contadorContando = document.querySelectorAll('.contador')
  contadorConcluido.innerText = `${contadorContando.length}`
}
)
btnMainUnselected[6].addEventListener("click", (event) => {
  event.preventDefault()
  btnMainUnselected[6].classList.add("hidden")
  btnMainS[6].classList.remove("hidden")
  textAreaBox[6].classList.add("through")
  btnMainS[6].classList.add('contador')
  let contadorContando = document.querySelectorAll('.contador')
  contadorConcluido.innerText = `${contadorContando.length}`
}
)
btnMainUnselected[7].addEventListener("click", (event) => {
  event.preventDefault()
  btnMainUnselected[7].classList.add("hidden")
  btnMainS[7].classList.remove("hidden")
  textAreaBox[7].classList.add("through")
  btnMainS[7].classList.add('contador')
  let contadorContando = document.querySelectorAll('.contador')
  contadorConcluido.innerText = `${contadorContando.length}`
}
)
btnMainUnselected[8].addEventListener("click", (event) => {
  event.preventDefault()
  btnMainUnselected[8].classList.add("hidden")
  btnMainS[8].classList.remove("hidden")
  textAreaBox[8].classList.add("through")
  btnMainS[8].classList.add('contador')
  let contadorContando = document.querySelectorAll('.contador')
  contadorConcluido.innerText = `${contadorContando.length}`
}
)
btnMainUnselected[9].addEventListener("click", (event) => {
  event.preventDefault()
  btnMainUnselected[9].classList.add("hidden")
  btnMainS[9].classList.remove("hidden")
  textAreaBox[9].classList.add("through")
  btnMainS[9].classList.add('contador')
  let contadorContando = document.querySelectorAll('.contador')
  contadorConcluido.innerText = `${contadorContando.length}`
}
)

//Clique no Botão Selecionado para desselecionar
btnMainS[0].addEventListener("click", (event) => {
  event.preventDefault()
  btnMainUnselected[0].classList.remove("hidden")
  btnMainS[0].classList.add("hidden")
  textAreaBox[0].classList.remove("through")
  btnMainS[0].classList.remove('contador')
  let contadorContando = document.querySelectorAll('.contador')
  contadorConcluido.innerText = `${contadorContando.length}`
})

btnMainS[1].addEventListener("click", (event) => {
  event.preventDefault()
  btnMainUnselected[1].classList.remove("hidden")
  btnMainS[1].classList.add("hidden")
  textAreaBox[1].classList.remove("through")
  btnMainS[1].classList.remove('contador')
  let contadorContando = document.querySelectorAll('.contador')
  contadorConcluido.innerText = `${contadorContando.length}`
})
btnMainS[2].addEventListener("click", (event) => {
  event.preventDefault()
  btnMainUnselected[2].classList.remove("hidden")
  btnMainS[2].classList.add("hidden")
  textAreaBox[2].classList.remove("through")
  btnMainS[2].classList.remove('contador')
  let contadorContando = document.querySelectorAll('.contador')
  contadorConcluido.innerText = `${contadorContando.length}`
})
btnMainS[3].addEventListener("click", (event) => {
  event.preventDefault()
  btnMainUnselected[3].classList.remove("hidden")
  btnMainS[3].classList.add("hidden")
  textAreaBox[3].classList.remove("through")
  btnMainS[3].classList.remove('contador')
  let contadorContando = document.querySelectorAll('.contador')
  contadorConcluido.innerText = `${contadorContando.length}`
})
btnMainS[4].addEventListener("click", (event) => {
  event.preventDefault()
  btnMainUnselected[4].classList.remove("hidden")
  btnMainS[4].classList.add("hidden")
  textAreaBox[4].classList.remove("through")
  btnMainS[4].classList.remove('contador')
  let contadorContando = document.querySelectorAll('.contador')
  contadorConcluido.innerText = `${contadorContando.length}`
})
btnMainS[5].addEventListener("click", (event) => {
  event.preventDefault()
  btnMainUnselected[5].classList.remove("hidden")
  btnMainS[5].classList.add("hidden")
  textAreaBox[5].classList.remove("through")
  btnMainS[5].classList.remove('contador')
  let contadorContando = document.querySelectorAll('.contador')
  contadorConcluido.innerText = `${contadorContando.length}`
})
btnMainS[6].addEventListener("click", (event) => {
  event.preventDefault()
  btnMainUnselected[6].classList.remove("hidden")
  btnMainS[6].classList.add("hidden")
  textAreaBox[6].classList.remove("through")
  btnMainS[6].classList.remove('contador')
  let contadorContando = document.querySelectorAll('.contador')
  contadorConcluido.innerText = `${contadorContando.length}`
})
btnMainS[7].addEventListener("click", (event) => {
  event.preventDefault()
  btnMainUnselected[7].classList.remove("hidden")
  btnMainS[7].classList.add("hidden")
  textAreaBox[7].classList.remove("through")
  btnMainS[7].classList.remove('contador')
  let contadorContando = document.querySelectorAll('.contador')
  contadorConcluido.innerText = `${contadorContando.length}`
})
btnMainS[8].addEventListener("click", (event) => {
  event.preventDefault()
  btnMainUnselected[8].classList.remove("hidden")
  btnMainS[8].classList.add("hidden")
  textAreaBox[8].classList.remove("through")
  btnMainS[8].classList.remove('contador')
  let contadorContando = document.querySelectorAll('.contador')
  contadorConcluido.innerText = `${contadorContando.length}`
})
btnMainS[9].addEventListener("click", (event) => {
  event.preventDefault()
  btnMainUnselected[9].classList.remove("hidden")
  btnMainS[9].classList.add("hidden")
  textAreaBox[9].classList.remove("through")
  btnMainS[9].classList.remove('contador')
  let contadorContando = document.querySelectorAll('.contador')
  contadorConcluido.innerText = `${contadorContando.length}`
})