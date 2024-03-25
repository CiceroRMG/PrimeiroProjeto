export function createCheckbox() {
  const input = document.createElement("input");
  input.setAttribute("type", "checkbox");
  input.classList.add("hidden");

  const label = document.createElement("label");
  label.classList.add("btn-main");
  label.appendChild(input);

  const imgUnselected = document.createElement("img");
  imgUnselected.setAttribute("src", "/Img/btn-not.svg");
  const imgSelected = document.createElement("img");
  imgSelected.setAttribute("src", "/Img/btn-select.svg");
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
