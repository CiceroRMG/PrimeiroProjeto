import { createTask } from "./create-task/create-task.js";

//APENAS ISSO TEM QUE ESTAR NO SCRIPT.JS --------
const createbtn = document.querySelector(".btn-search");
createbtn.addEventListener("click", createTask);
