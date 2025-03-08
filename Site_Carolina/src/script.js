

const quizData = [
    { question: "Primeira vez que nos vimos?", image: "./Site_Carolina/src/video/Gato.gif", options: ["A) No ônibus", "B) Instagram", "C) Gincana"], correct: 1 },
    { question: "Onde nos conhecemos? E a onde foi nossa primeira conversa?", image: "./Site_Carolina/src/video/Gato.gif", options: ["A) Saída da Escola", "B) Na Praça da escola", "C) Sorveteria da Guaipá"], correct: 1 },
    { question: "Como foi a sensação do primeiro beijo?", image: "./Site_Carolina/src/video/Gato.gif", options: ["A) Até que enfim", "B) Um susto", "C) Ruim demais"], correct: 1 },
    { question: "Onde foi nosso primeiro date?", image: "./Site_Carolina/src/video/Gato.gif", options: ["A) Escola", "B) Restaurante", "C)Shopping"], correct: 2 },
    { question: "Quando foi nosso primeiro date?", image: "./Site_Carolina/src/video/Gato.gif", options: ["A) 17/03/2024", "B) 14/02/2024", "C) 03/11/2018"], correct: 2 },
    { question: "Qual foi nosso último date?", image: "./Site_Carolina/src/video/Gato.gif", options: ["A) Praia", "B) Cinema", "C) Casa da tia"], correct: 0 },
    { question: "Qual foi seu primeiro presente?", image: "./Site_Carolina/src/video/Gato.gif", options: ["A) Salgados da cantina", "B) Cartinha", "C) Polvinho"], correct: 2 },
    { question: "Qual foi o seu último presente?", image: "./Site_Carolina/src/video/Gato.gif", options: ["A) Minha Presença", "B) Colar", "C) Buquê de flores"], correct: 0 },
    { question: "Por hoje é só Momo!", image: "./Site_Carolina/src/video/Confir.gif", options: ["A) Você", "B) Acertou", "C) tudinhoo!"], correct: 0, allCorrect: true }
];

let currentQuestion = 0;

function loadQuestion() {
    const questionData = quizData[currentQuestion];
    document.getElementById("quiz-question").textContent = questionData.question;
    document.getElementById("quiz-img").src = questionData.image;
    const optionsContainer = document.getElementById("quiz-options");
    optionsContainer.innerHTML = "";

    // Exibe as alternativas na ordem original, sem embaralhar
    questionData.options.forEach((option, index) => {
        const button = document.createElement("button");
        button.classList.add("quiz-option");
        button.textContent = option;
        button.onclick = () => checkAnswer(index);
        optionsContainer.appendChild(button);
    });
}

function restartQuiz() {
    currentQuestion = 0;
    document.getElementById("quiz-container").innerHTML = '<img id="quiz-img" src="./Site_Carolina/src/video/Zangado.gif" alt="Imagem do Quiz"><p id="quiz-question"></p><div id="quiz-options"></div>';
    loadQuestion();
}

document.addEventListener("DOMContentLoaded", loadQuestion);
function checkAnswer(selected) {
    const questionData = quizData[currentQuestion];

    if (questionData.allCorrect) {
        // Para a última pergunta, todas as alternativas são corretas
        document.getElementById("quiz-container").innerHTML = '<h2>Você acertou, todas as respostas estão corretas! 🎉</h2><p>🐈O Gatinho te entrega flores, porque vc é minha Abelinha que ama florzinhas!🐝</p>';
        const finalGif = document.createElement("img");
        finalGif.src = "./Site_Carolina/src/video/Flor.gif";  // Substitua com o GIF de sua escolha
        finalGif.id = "final-gif";  // Estilo do GIF de finalização
        document.getElementById("quiz-container").prepend(finalGif); // Insere o GIF no início da div
    } else if (selected === questionData.correct) {
        currentQuestion++;
        if (currentQuestion < quizData.length) {
            loadQuestion();
        } else {
            document.getElementById("quiz-container").innerHTML = '<h2>Parabéns, Carolina! 🎉</h2><p>Você completou o quiz!</p><div id="animacao-buque">💐</div>';
            const finalGif = document.createElement("img");
            finalGif.src = "./Site_Carolina/src/img/final.png";  // Substitua com o GIF de sua escolha
            finalGif.id = "final-gif";  // Estilo do GIF de finalização
            document.getElementById("quiz-container").prepend(finalGif); // Insere o GIF no início da div

            // Adicionando o botão de retorno para a página Init.html
            const returnButton = document.createElement("button");
            returnButton.textContent = "Voltar para o Início";
            returnButton.onclick = () => window.location.href = 'Init.html';  // Redireciona para Init.html
            document.getElementById("quiz-container").appendChild(returnButton);
        }
    } else {
        // Se a resposta estiver errada, troca para o GIF de erro
        const errorGif = document.createElement("img");
        errorGif.src = "./Site_Carolina/src/video/Gato.gif"; // Caminho do GIF de erro
        errorGif.id = "error-gif"; // Definindo o ID para aplicar o estilo no CSS
        document.getElementById("quiz-container").innerHTML = '<h2>Como assim, tu esqueceu? 😱</h2><button onclick="restartQuiz()">Tentar de novo</button>';
        document.getElementById("quiz-container").prepend(errorGif); // Insere o GIF no início da div
    }
  
}
