import React, { useState } from 'react';
import QuestionCart from './components/QuestionCart';
import {  Difficulty, fetchQuizQuestions } from './Api';

const totalQuistion = 10;


function App() {
  const [loading, setLoading] = useState(false)
  const [questions, setQuestion] = useState([])
  const [number, setNumber] = useState(0)
  const [userAnswers,setuserAnswers] = useState([])
  const [score,setScore] = useState(0) 
  const [gameOver, setGameOver] = useState(true)

  console.log(fetchQuizQuestions(totalQuistion,Difficulty.EASY));
  


  const startTrivia = async()=>{

  }
  const checkAnswer= (e:React.MouseEvent<HTMLButtonElement>)=>{

  }
  const nextQuiz=()=>{

  }

  return (
    <div className="App">
      <h1>Quiz</h1>
      <button className='button' onClick={startTrivia}>start</button>

      <p className="score">Scrore: </p>
      <p className="">loading...</p>
      {/* <QuestionCart 
      qustionNr={number+1} 
      totalQuestion={totalQuistion}
      question={questions[number].question}
      answer={questions[number].answers}
      userAnswer={userAnswers ? userAnswers[number]:undefined}
      callback={checkAnswer}
      /> */}
      <button className="next" onClick={nextQuiz}>next</button>
    </div>
  );
}

export default App;
