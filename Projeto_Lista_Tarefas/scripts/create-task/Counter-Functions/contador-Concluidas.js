

export function addContadorConcluidas() {
  const contadorConcluidas = document.querySelector(".task-conclude-conta");
  const oldValue = Number(contadorConcluidas.innerHTML);
  contadorConcluidas.innerHTML = `${oldValue + 1}`;
}

export function subContadorConcluidas() {
  const contadorConcluidas = document.querySelector(".task-conclude-conta");
  const oldValue = Number(contadorConcluidas.innerHTML);
  contadorConcluidas.innerHTML = `${oldValue - 1}`;
}