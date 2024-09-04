function verificarLetraA() {
  const texto = document.getElementById("texto_02").value;

  const regex = /a/gi;
  const matches = texto.match(regex);

  if (matches) {
    const quantidade = matches.length;
    document.getElementById(
      "resultado_02"
    ).textContent = `A letra 'A' aparece ${quantidade} vez(es) no texto.`;
  } else {
    document.getElementById(
      "resultado_02"
    ).textContent = `A letra 'A' não aparece no texto.`;
  }
}
