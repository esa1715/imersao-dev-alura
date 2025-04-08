personagem = ["", "", ""];

viloes = ["", "", ""];

forcaPersonagem = 0;
forcaViloes = 0;

//alert("O array Personagem contém: " + personagem);

function escolha() {
  for (let i = 0; i < 3; i++) {
    escolhaPersonagem = prompt("Digite o nome do seu personagem " + (i + 1));
    personagem[i] = escolhaPersonagem;

    forcaPersonagem = forcaPersonagem + Math.floor(Math.random() * 10) + 1;
    //forcaPersonagem += Math.floor(Math.random() * 10) + 1; Maneira mais avançada//
  }
  console.log("Agora, o array Personagem contém: " + personagem);

  console.log("Vilões iniciais: " + viloes);

  for (let i = 0; i < 3; i++) {
    indiceAleatorio = Math.floor(Math.random() * 10);
    viloesPossiveis = [
      "Darth Vader",
      "Lord Voldemort",
      "Joker",
      "Freddy Krueger",
      "Tommy DeVito",
      "Norman Bates",
      "Biff Tannen",
      "Thanos",
      "Agent Smith",
      "Gollum"
    ];

    viloes[i] = viloesPossiveis[indiceAleatorio];
    forcaViloes = forcaViloes + Math.floor(Math.random() * 10) + 1;
  }
  alert("Seus adversários são: " + viloes);

  alert("...A disputa está intensa!...");
  if (forcaPersonagem > forcaViloes) {
    alert(
      "Seu time é muito forte! Você ganhou a disputa de cabo de guerra! Sua força foi de " +
        forcaPersonagem
    );
  } else {
    if (forcaPersonagem < forcaViloes) {
      alert(
        "Seu time é fraquinho. O computador ganhou o cabo de guerra com força de " +
          forcaViloes
      );
    } else {
      alert("Os times tem a mesma força! Vocês empataram!");
    }
  }
}
