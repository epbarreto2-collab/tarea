function horasACobrar(minutos) {
  const mins = Number(minutos);
  if (isNaN(mins) || mins <= 0) return 0;
  return Math.ceil(mins / 60);
}

function calcularTarifa(minutos) {
  const mins = Number(minutos);
  if (isNaN(mins) || minutos === "" || mins < 0) {
    return "Error: Ingrese un número válido";
  }
  if (mins === 0) return "$0.00";

  const horas = horasACobrar(mins);
  if (horas === 0) return "$0.00";

  // $1.00 la primera hora, $0.50 cada hora adicional/fracción
  let tarifa = 1.00;
  if (horas > 1) {
    tarifa += (horas - 1) * 0.50;
  }

  // Máximo $5.00
  if (tarifa > 5.00) {
    tarifa = 5.00;
  }

  return `$${tarifa.toFixed(2)}`;
}

// Conexión con el DOM
const inputMin = document.getElementById('minutosInput');
const btn = document.getElementById('btnCalcular');
const resDiv = document.getElementById('resultado');

btn.addEventListener('click', () => {
  const tarifa = calcularTarifa(inputMin.value);
  resDiv.textContent = `Total a pagar: ${tarifa}`;
});

// Pruebas en consola especificadas en la tarea
console.log("40 min ->", calcularTarifa(40));   // $1.00
console.log("75 min ->", calcularTarifa(75));   // $1.50
console.log("5 h (300 min) ->", calcularTarifa(300)); // $3.00
console.log("12 h (720 min) ->", calcularTarifa(720)); // $5.00