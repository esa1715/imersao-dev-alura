// PARTE 1: Lista de perguntas e respostas
perguntas = [
    //1
    {
      pergunta: "Qual ator interpreta Vito Corleone em 'O Poderoso Chefão'?",
      respostas: [
        { opcao: "Al Pacino", correto: false },
        { opcao: "Marlon Brando", correto: true },
        { opcao: "Robert De Niro", correto: false }
      ]
    },
    //2
    {
      pergunta:
        "Qual é a famosa frase dita por Jules Winnfield em 'Pulp Fiction'(1994), antes de executar alguém?",
      respostas: [
        { opcao: "Diga olá para o meu amiguinho!", correto: false },
        {
          opcao: "Eu vou te dar um tempo para pensar nisso. Um bom tempo...",
          correto: false
        },
        {
          opcao:
            "O caminho do homem justo é cercado por todos os lados pelas iniquidades do egoísta e pela tirania dos homens maus...",
          correto: true
        }
      ]
    },
    //3
    {
      pergunta:
        "Qual o nome do carro que Marty McFly usa para viajar no tempo em 'De Volta para o Futuro'?",
      respostas: [
        { opcao: "Ford Mustang", correto: false },
        { opcao: "DeLorean DMC-12", correto: true },
        { opcao: "Chevrolet Corvette", correto: false }
      ]
    },
    //4
    {
      pergunta:
        "Qual a espécie principal de dinossauro clonada em 'Jurassic Park' (1993)?",
      respostas: [
        { opcao: "Triceratops", correto: false },
        { opcao: "Velociraptor", correto: true },
        { opcao: "Stegosaurus", correto: false }
      ]
    },
    //5
    {
      pergunta: "Qual pílula Neo escolhe tomar em 'Matrix'?",
      respostas: [
        { opcao: "Pílula vermelha", correto: true },
        { opcao: "Pílula azul", correto: false },
        { opcao: "Pílula verde", correto: false }
      ]
    },
    //6
    {
      pergunta:
        "Em qual filme de Quentin Tarantino vemos a personagem Beatrix Kiddo buscando vingança?",
      respostas: [
        { opcao: "Cães de Aluguel", correto: false },
        { opcao: "Pulp Fiction", correto: false },
        { opcao: "Kill Bill", correto: true }
      ]
    },
    //7
    {
      pergunta:
        "Para o qual ano Marty McFly viaja pela primeira vez em 'De Volta para o Futuro'?",
      respostas: [
        { opcao: "1955", correto: true },
        { opcao: "1965", correto: false },
        { opcao: "1975", correto: false }
      ]
    },
    //8
    {
      pergunta:
        "Qual a raça da criatura Gollum, que possui o Um Anel por muitos anos?",
      respostas: [
        { opcao: "Anão", correto: false },
        { opcao: "Hobbit", correto: true },
        { opcao: "Humano", correto: false }
      ]
    },
    //9
    {
      pergunta:
        "Qual é o nome do navio capitaneado por Barba Negra em 'Piratas do Caribe: Navegando em Águas Misteriosas'?",
      respostas: [
        { opcao: "Vingança da Rainha Anne", correto: true },
        { opcao: "Pérola Negra", correto: false },
        { opcao: "O Holandês Voador", correto: false }
      ]
    },
    //10
    {
      pergunta:
        "Qual dos seguintes 'Mr.' NÃO faz parte do grupo de criminosos em 'Cães de Aluguel'?",
      respostas: [
        { opcao: "Mr. Orange", correto: false },
        { opcao: "Mr. Brown", correto: false },
        { opcao: "Mr. Blue", correto: true }
      ]
    }
  ];
  
  // PARTE 2: Pegando os elementos do HTML
  const perguntaElemento = document.querySelector(".pergunta");
  const respostasElemento = document.querySelector(".respostas");
  const progressoElemento = document.querySelector(".progresso");
  const textoFinal = document.querySelector(".fim span");
  const conteudo = document.querySelector(".conteudo");
  const conteudoFinal = document.querySelector(".fim");
  
  // PARTE 3: Variáveis para controle do jogo
  let indiceAtual = 0; // Índice da pergunta atual
  let acertos = 0; // Contador de acertos
  
  // PARTE 4: Função para carregar uma nova pergunta
  function carregarPergunta() {
    progressoElemento.innerHTML = `${indiceAtual + 1}/${perguntas.length}`; // Atualiza o progresso
    const perguntaAtual = perguntas[indiceAtual]; // Pega a pergunta atual
    perguntaElemento.innerHTML = perguntaAtual.pergunta; // Exibe a pergunta
  
    respostasElemento.innerHTML = ""; // Limpa as respostas anteriores
  
    // Percorre todas as respostas da pergunta atual
    for (let i = 0; i < perguntaAtual.respostas.length; i++) {
      // Pega a resposta atual com base no índice 'i'
      const resposta = perguntaAtual.respostas[i];
      // Cria um novo elemento 'button' (botão)
      const botao = document.createElement("button");
      // Adiciona a classe CSS 'botao-resposta' ao botão para estilizar
      botao.classList.add("botao-resposta");
      // Define o texto do botão com a opção de resposta (resposta.opcao)
      botao.innerText = resposta.opcao;
      // Adiciona um evento de clique no botão
      botao.onclick = function () {
        // Se a resposta for correta (resposta.correto === true), incrementa o número de acertos
        if (resposta.correto) {
          //acertos = acertos + 1;
          acertos++; // Incrementa o contador de acertos
        }
  
        // Avança para a próxima pergunta
        indiceAtual++;
  
        // Se ainda houver perguntas, carrega a próxima pergunta
        if (indiceAtual < perguntas.length) {
          carregarPergunta(); // Carrega a próxima pergunta
        } else {
          // Se não houver mais perguntas, finaliza o jogo
          finalizarJogo();
        }
      };
  
      // Adiciona o botão de resposta à tela, dentro do elemento 'respostasElemento'
      respostasElemento.appendChild(botao);
    }
  }
  
  // PARTE 5: Função para mostrar a tela final
  function finalizarJogo() {
    if (acertos >= 7) {
      textoFinal.innerHTML = `Parabéns! Você acertou ${acertos} de ${perguntas.length}.`; // Exibe o resultado
      conteudo.style.display = "none"; // Esconde as perguntas
      conteudoFinal.style.display = "flex"; // Mostra a tela final
    } else {
      textoFinal.innerHTML = `Você acertou ${acertos} de ${perguntas.length}`; // Exibe o resultado
      conteudo.style.display = "none"; // Esconde as perguntas
      conteudoFinal.style.display = "flex"; // Mostra a tela final
    }
  }
  
  // PARTE 6: Iniciando o jogo pela primeira vez
  carregarPergunta();
  