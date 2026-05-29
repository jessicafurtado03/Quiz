function verificarRespostas() {
  // Gabarito correto
  var gabarito = {
    q1: "b", // HTML
    q2: "c", // color
    q3: "a", // getElementById()
    q4: "b", // <a>
    q5: "c"  // CSS estilização
  };

  var pontos = 0;
  var erros = []; // lista para guardar questões erradas

  // Verifica cada resposta
  for (var questao in gabarito) {
    var opcoes = document.getElementsByName(questao);
    var respondeu = false;
    for (var i = 0; i < opcoes.length; i++) {
      if (opcoes[i].checked) {
        respondeu = true;
        if (opcoes[i].value === gabarito[questao]) {
          pontos++;
        } else {
          erros.push(questao); // adiciona questão errada
        }
      }
    }
    // Se não respondeu, também conta como erro
    if (!respondeu) {
      erros.push(questao);
    }
  }

  // Exibe o resultado
  var resultado = document.getElementById("resultado");
  resultado.style.display = "block";

  // Remove classes anteriores
  resultado.className = "";

  // Mensagem principal
  var mensagem = "";
  if (pontos === 5) {
    mensagem = "🏆 Você acertou " + pontos + " perguntas! — Excelente!";
    resultado.classList.add("acerto-total");
  } else if (pontos >= 3) {
    mensagem = "👍 Você acertou " + pontos + " perguntas! — Muito bom!";
    resultado.classList.add("muito-bom");
  } else {
    mensagem = "📚 Você acertou " + pontos + " perguntas! — Continue praticando!";
    resultado.classList.add("continuar");
  }

  // Adiciona lista de erros
  if (erros.length > 0) {
    mensagem += "\n\n❌ Você errou as seguintes questões: ";
    // transforma q1, q2... em números legíveis
    var listaErros = erros.map(function(q) {
      return q.replace("q", "Questão ");
    });
    mensagem += listaErros.join(", ");
  }

  resultado.innerText = mensagem;
}
