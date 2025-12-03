let expressao = '';

function adicionar(valor) {
  expressao += valor;// Adiciona o valor à expressão
  document.getElementById("display").textContent = expressao;
}

function limpar() {
  expressao = '';
  document.getElementById("display").textContent = '';// Limpa a expressão
}

function calcular() {
  try { //Tenta calcular
    expressao = eval(expressao).toString();// Converte o resultado para string
    document.getElementById("display").textContent = expressao;
  } catch { //Captura erros
    document.getElementById("display").textContent = "Erro";// Exibe mensagem de erro
    expressao = '';
  }
}


