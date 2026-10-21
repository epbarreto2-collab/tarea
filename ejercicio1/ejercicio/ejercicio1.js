function clasificarNota(nota) {
  const n = Number(nota);

  if (isNaN(n) || nota === "" || nota === null || n < 0 || n > 10) {
    return "Nota no válida";
  }

  if (n >= 9) {
    return "Excelente";
  } else if (n >= 7) {
    return "Aprobado";
  } else if (n >= 5) {
    return "En recuperación";
  } else {
    return "Reprobado";
  }
}

// Conexión con el DOM
const input = document.getElementById('notaInput');
const btn = document.getElementById('btnEvaluar');
const resDiv = document.getElementById('resultado');

btn.addEventListener('click', () => {
  const res = clasificarNota(input.value);
  resDiv.className = 'resultado';

  if (res === "Excelente") resDiv.classList.add('excelente');
  else if (res === "Aprobado") resDiv.classList.add('aprobado');
  else if (res === "En recuperación") resDiv.classList.add('recuperacion');
  else if (res === "Reprobado") resDiv.classList.add('reprobado');
  else resDiv.classList.add('error');

  resDiv.textContent = res;
});