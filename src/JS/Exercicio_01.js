function consultaNumFibonacci(num) {
  if (num < 0) return false;

  let a = 0,
    b = 1;

  if (num === a || num === b) return true;

  let next = a + b;

  while (next <= num) {
    if (next === num) return true;
    a = b;
    b = next;
    next = a + b;
  }

  return false;
}

function verificarFibonacci() {
  const inputNumero = document.getElementById("numero").value;
  const numero = parseInt(inputNumero);

  if (isNaN(numero)) {
    document.getElementById("resultado_01").textContent =
      "Por favor, insira um número válido.";
    return;
  }

  if (consultaNumFibonacci(numero)) {
    document.getElementById(
      "resultado_01"
    ).textContent = `O número ${numero} pertence à sequência de Fibonacci.`;
  } else {
    document.getElementById(
      "resultado_01"
    ).textContent = `O número ${numero} não pertence à sequência de Fibonacci.`;
  }
}
