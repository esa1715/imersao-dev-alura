function jogar() {
    let rodada = 1;
    let jogadorVenceu = true;
    while (rodada <= 3) {
      console.log("Rodada: " + rodada);
      
      let escolhaJogador = prompt("Nivel " + rodada + ", vidro (1, 2 ou 3)?");
      let pisoQuebrado = Math.floor(Math.random() * 3) + 1;
  
      if (escolhaJogador === null || escolhaJogador < 1 || escolhaJogador > 3) {
            alert("Escolha um número válido (1, 2 ou 3).");
      } else {
        if (escolhaJogador == pisoQuebrado) {
            alert("O vidro quebrou! Fim de jogo.");
            jogadorVenceu = false;
            break;
        } else {
            alert("Você passou! o piso quebrado era o número: " + pisoQuebrado);
            rodada = rodada + 1;
        }
      }
    }
    if (rodada == 4) {
      alert("Parabéns! Você venceu o jogo.");
    }
}  