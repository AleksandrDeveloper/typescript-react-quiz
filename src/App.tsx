import React, { useState } from 'react';
import QuestionCart from './components/QuestionCart';
import { QuestionsState,  Difficulty, fetchQuizQuestions } from './Api';

const totalQuistion = 10;

type AnswerObject={
  question:string;
  answer:string;
  correct:boolean;
  correctAnswer:string;
}


function App() {
  const [loading, setLoading] = useState(false)
  const [questions, setQuestion] = useState<QuestionsState[]>([])
  const [number, setNumber] = useState(0)

  const [userAnswers,setuserAnswers] = useState<AnswerObject[]>([])
  const [score,setScore] = useState(0) 
  const [gameOver, setGameOver] = useState(true)

  

  const startTrivia = async()=>{
    setLoading(true)
    setGameOver(false)
    console.log('start');
    const newQuestions = await fetchQuizQuestions(totalQuistion,Difficulty.EASY)
    setQuestion(newQuestions) 

    console.log('finish');
    setScore(0)
    setuserAnswers([])
    setNumber(0)
    setLoading(false) 
  }

  const checkAnswer= (e:React.MouseEvent<HTMLButtonElement>)=>{
    if(!gameOver){
      const answer = e.currentTarget.value;
      const correct = questions[number].correct_answer === answer;
      if(correct) setScore(prev=>prev+1)

      const AnswerObject={
        question:questions[number].question,
        answer,
        correct,
        correctAnswer:questions[number].correct_answer
      }
      setuserAnswers(prev=>[...prev,AnswerObject])
    }
  }

  const nextQuiz=()=>{
    const nextQuestion = number+1;

    if(nextQuestion === totalQuistion){
      setGameOver(true)
    }else{
      setNumber(nextQuestion)
    }
  }
    

  return (
    <div className="App">
      <h1>Quiz</h1>
      {
        gameOver||userAnswers.length === totalQuistion?(
          <button className='button' onClick={startTrivia}>start</button>
        ):null
      }

      {!gameOver?<p className="score">Scrore: </p>:null}
      {loading?<p className="">loading...</p>:null} 
      {!loading&& !gameOver&&(
        <QuestionCart 
        qustionNr={number+1} 
        totalQuestion={totalQuistion}
        question={questions[number].question} 
        answer={questions[number].answers}
        userAnswer={userAnswers ? userAnswers[number]:undefined}
        callback={checkAnswer}
        />)
      }
       {!gameOver && !loading && userAnswers.length === number + 1 && number !== totalQuistion - 1 ? (
          <button className='next' onClick={nextQuiz}>
            Next Question
          </button>
        ) : null}

    </div>
  );
}

export default App;
