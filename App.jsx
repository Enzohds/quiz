import { useState } from "react";
import './App.css';

const questoes = [ 
  {                
    question: 'qual o nome da vila do naruto?',
    options: ['vila da folha' , 'vila da areia', 'vila do som' , 'vila da água'],
    answer: 0
  },
  {                
    question: 'qual o nome da esposa do naruto?',
    options: ['sakura' , 'temari', 'yno' , 'hinata'],
    answer: 3
  },
  {                
    question: 'qual o nome do sensei do naruto?',
    options: ['tsunade' , 'kakashi', 'sasuke' , 'orochimaru'],
    answer: 1
  },
  {                
    question: 'qual o nome do inimigo do naruto??',
    options: ['tsunade' , 'kakashi', 'sasuke' , 'orochimaru'],
    answer: 2
  },
  {                
    question: 'qual o nome do pai do naruto?',
    options: ['minato' , 'madara', 'jiraya' , 'gaara'],
    answer: 0
  }
]

function App() {
  const [questaoAtual, setQuestaoAtual] = useState(0)
  const [pontuacao, setPontuacao] = useState(0)
  const [mostrarPontos, setMostrarPontos] = useState(false)

  const opcao = (selecionar) => {
    if (selecionar === questoes [questaoAtual].answer) {
      setPontuacao(pontuacao + 1)
    }

    const proxima = questaoAtual + 1 ;
    // se a próxima questão for menor que o tamanho máximo de array de questões então
    if(proxima < questoes.length) {
      setQuestaoAtual(proxima)
    } else {
      setMostrarPontos(true)
    }
  };

  const reiniciar = () => {
    setQuestaoAtual(0);
    setPontuacao(0);
    setMostrarPontos(false);
  }

  return (
    <div className="app">
      {mostrarPontos ? (
        <div className="pontos">
          <h2>você acertou {pontuacao} de {questoes.length} perguntas! </h2>
          <button onClick={reiniciar}> Jogar novamente </button>
        </div>
      ) : (
        <div className="sessao">
          <div className="contador">
            <span>Pergunta {questaoAtual + 1}/{questoes.length}</span>
          </div>
          <div className="texto">{questoes[questaoAtual].question}</div>
          <div className="resposta">{questoes[questaoAtual].options.map((option, index) => (
            <button key={index} onClick={() => opcao(index)}>{option}</button>
          ))}</div>
        </div>
      )}
    </div>
  )
}

export default App;