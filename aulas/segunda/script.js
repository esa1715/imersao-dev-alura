function jogar() {
    let nome = prompt("Qual o seu nome?");
    let idade = prompt("Olá " + nome + "! Quantos anos você tem?");
    if (idade < 18) {
      alert("Que pena " + nome + ". Você não pode jogar Jokenpô");
    }
  
    // alert("Vamos começar a jogar")
  
    if (idade >= 18) {
      let escolhaJogador = prompt("Digite 1-Pedra, 2-papel ou 3-tesoura");
      let escolhaComputador = Math.floor(Math.random() * 3) + 1;
  
      if (escolhaJogador >= 4) {
        alert("Insira um valor válido!");
      } else {
        alert("Rufem os tambores...");
  
        // Empate
        if (escolhaJogador == escolhaComputador) {
          alert("Tivemos um empate, " + nome);
        }
  
        //Jogador escolheu Pedra
        if (escolhaJogador == 1) {
          //Computador escolheu Papel
          if (escolhaComputador == 2) {
            alert(
              "Que pena " + nome + ", O computador venceu pois escolheu papel"
            );
          }
          //Computador escolheu Tesoura
          if (escolhaComputador == 3) {
            alert(
              "Parabéns " +
                nome +
                "! Você venceu! O computador havia escolhido tesoura"
            );
          }
        }
  
        //Jogador escolheu Papel
        if (escolhaJogador == 2) {
          //Computador escolheu Pedra
          if (escolhaComputador == 1) {
            alert(
              "Parabéns " + nome + "! Você venceu! O computador havia escolhido pedra"
            );
          }
          //Computador escolheu Tesoura
          if (escolhaComputador == 3) {
            alert(
              "Que pena " + nome + ", O computador venceu pois escolheu tesoura"
            );
          }
        }
  
        //Jogador escolheu Tesoura
        if (escolhaJogador == 3) {
          //Computador escolheu Pedra
          if (escolhaComputador == 1) {
            alert(
              "Que pena " + nome + ", O computador venceu pois escolheu pedra"
            );
          }
          //Computador escolheu Papel
          if (escolhaComputador == 2) {
            alert(
              "Parabéns " +
                nome +
                "! Você venceu! O computador havia escolhido papel"
            );
          }
        }
      }
    }
  }
  