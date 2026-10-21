function operar(a, b, operador) {
  const num1 = Number(a);
  const num2 = Number(b);

  if (a === "" || b === "" || isNaN(num1) || isNaN(num2)) {
    return "Error: Ingrese números válidos";
  }

  switch (operador) {
    case '+':
      return num1 + num2;
    case '-':
      return num1 - num2;
    case '*':
      return num1 * num2;
    case '/':
      if (num2 === 0) {
        return "No se puede dividir para 0";
      }
      return num1 / num2;
    default:
      return "Operador no válido";
  }
}

// Conexión con el DOM
const inputA = document.getElementById('a');
const inputB = document.getElementById('b');
const selectOp = document.getElementById('op');
const btn = document.getElementById('btnCalcular');
const resBox = document.getElementById('resultado');

btn.addEventListener('click', () => {
  const res = operar(inputA.value, inputB.value, selectOp.value);
  resBox.textContent = typeof res === 'number' ? `Resultado: ${res}` : res;
});