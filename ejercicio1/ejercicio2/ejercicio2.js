function generarTabla(numero, hasta) {
  const num = Number(numero);
  let lim = Number(hasta);

  if (isNaN(num) || isNaN(lim) || numero === "" || hasta === "") {
    return "<p class='error-msg'>Ingrese valores válidos</p>";
  }

  if (lim > 20) lim = 20; // Límite máximo de 20
  if (lim < 1) lim = 1;

  let html = "<table><thead><tr><th>Operación</th><th>Resultado</th></tr></thead><tbody>";

  for (let i = 1; i <= lim; i++) {
    html += `<tr><td>${num} × ${i}</td><td>${num * i}</td></tr>`;
  }

  html += "</tbody></table>";
  return html;
}

// Conexión con el DOM
const numInp = document.getElementById('numInput');
const hastaInp = document.getElementById('hastaInput');
const btn = document.getElementById('btnGenerar');
const cont = document.getElementById('contenedorTabla');

btn.addEventListener('click', () => {
  cont.innerHTML = generarTabla(numInp.value, hastaInp.value);
});