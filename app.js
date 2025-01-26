// Pergunta o dia da semana e verifica o fim de semana.
function verificarFimDeSemana() {
  const diaDaSemana = prompt("Qual é o dia da semana?");

  if (diaDaSemana === "Sábado" || diaDaSemana === "Domingo") {
    alert("Bom fim de semana!");
  } else {
    alert("Boa semana!");
  }
}

// Verifica se um número é positivo ou negativo.
function verificarNumero() {
  const numero = parseFloat(prompt("Digite um número:"));

  if (isNaN(numero)) {
    alert("Por favor, digite um número válido.");
    return; // Sai da função se a entrada não for válida
  }

  if (numero > 0) {
    alert("Número positivo.");
  } else if (numero < 0) {
    alert("Número negativo.");
  } else {
    alert("Número zero.");
  }
}

// Sistema de pontuação do jogo.
function sistemaDePontuacao() {
  const pontuacao = parseInt(prompt("Digite a pontuação do jogo:"));

    if (isNaN(pontuacao)) {
        alert("Por favor, digite uma pontuação válida.");
        return;
    }

  if (pontuacao >= 100) {
    alert("Parabéns, você venceu!");
  } else {
    alert("Tente novamente para ganhar.");
  }
}

// Mensagem de saldo da conta com template string.
function mostrarSaldo() {
  const saldo = parseFloat(prompt("Digite o saldo da sua conta:"));

    if (isNaN(saldo)) {
        alert("Por favor, digite um saldo válido.");
        return;
    }

  alert(`Seu saldo é de R$${saldo.toFixed(2)}.`); // Formatando para duas casas decimais
}

// Pede o nome do usuário e mostra um alerta de boas-vindas.
function boasVindas() {
  const nome = prompt("Digite seu nome:");

  if (nome) { // Verifica se o usuário digitou algo
      alert(`Bem-vindo(a), ${nome}!`);
  } else {
      alert("Por favor, insira seu nome.");
  }
}
