import React from 'react';
import quizService from './quizService';
import Question from './components/Question'

const App = () => {
  const [questions, setQuestions] = React.useState([]);
  const [score, setScore] = React.useState(0);
  const [responses, setResponses] = React.useState(0);

  React.useEffect(() => {
    quizService().then(response => {
      setQuestions(response);
    });
  }, []);

  const computeAnswer = (answer, correct) => {
    if (answer === correct){
      setScore(score + 1);
    }

    setResponses(responses < 5 ? responses + 1 : 5);
  }

  return (
    <div className="Container">
      <div className="title">Quizz</div>
      {responses < 5 && questions.map(({questionId, question, answers, correct})=>
        <Question
          key={questionId}
          question={question}
          answers={answers}
          selected={answer => computeAnswer(answer, correct)}/>
      )}

  {responses === 5 ? <h2>{score}</h2>: null}
    </div>
  );
}

export default App;
