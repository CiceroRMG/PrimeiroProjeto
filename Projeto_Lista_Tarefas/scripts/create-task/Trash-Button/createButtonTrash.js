export function createButtonTrash() {
  const button = document.createElement("button");
  button.classList.add("btn-trash");
  const imgTrash = document.createElement("img");
  imgTrash.setAttribute("src", "/Img/trash.svg");
  button.appendChild(imgTrash);

  return button;
}
