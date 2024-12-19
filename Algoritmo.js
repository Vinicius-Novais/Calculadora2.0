// Elementos do DOM
const menu = document.getElementById("menu");
const calculadora = document.getElementById("calculadora");
const operacaoTitulo = document.getElementById("operacao-titulo");
const resultadoElemento = document.getElementById("resultado");
const num1Input = document.getElementById("num1");
const num2Input = document.getElementById("num2");

// Variável global para armazenar a operação escolhida
let operacao = null;

// Função para selecionar a operação
function escolherOperacao(opcao) {
  operacao = opcao;

  // Esconde o menu e mostra a calculadora com transição
  menu.classList.remove("visible");
  menu.classList.add("hidden");

  setTimeout(() => {
    calculadora.classList.remove("hidden");
    calculadora.classList.add("visible");
  }, 500); // Aguarda a transição do menu

  // Atualiza o título da operação
  const operacoes = {
    1: "Soma",
    2: "Subtração",
    3: "Multiplicação",
    4: "Divisão",
  };
  operacaoTitulo.textContent = `Operação: ${operacoes[opcao]}`;
}

// Função para calcular o resultado
function calcular() {
  const num1 = parseFloat(num1Input.value);
  const num2 = parseFloat(num2Input.value);

  if (isNaN(num1) || isNaN(num2)) {
    resultadoElemento.textContent = "Por favor, insira números válidos.";
    resultadoElemento.style.opacity = "1";
    return;
  }

  let resultado;
  switch (operacao) {
    case 1:
      resultado = num1 + num2;
      break;
    case 2:
      resultado = num1 - num2;
      break;
    case 3:
      resultado = num1 * num2;
      break;
    case 4:
      resultado = num2 === 0 ? "Erro: Divisão por zero." : num1 / num2;
      break;
  }

  // Exibe o resultado com transição suave
  resultadoElemento.textContent = `Resultado: ${resultado}`;
  resultadoElemento.style.opacity = "0";

  setTimeout(() => {
    resultadoElemento.style.opacity = "1";
  }, 100);
}

// Função para voltar ao menu principal
function voltar() {
  // Esconde a calculadora e volta ao menu com transição
  calculadora.classList.remove("visible");
  calculadora.classList.add("hidden");

  setTimeout(() => {
    menu.classList.remove("hidden");
    menu.classList.add("visible");
  }, 500); // Aguarda a transição da calculadora

  // Limpa os inputs e o resultado
  num1Input.value = "";
  num2Input.value = "";
  resultadoElemento.textContent = "";
}

// Função para sair
function sair() {
  alert("Encerrando a calculadora. Até mais!");
  menu.classList.add("hidden");
  calculadora.classList.add("hidden");
}
