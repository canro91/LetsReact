import React from 'react';
import quizService from './quizService';
import Question from './components/Question'
import Result from './components/Result';

const App = () => {
  const [questions, setQuestions] = React.useState([]);
  const [score, setScore] = React.useState(0);
  const [responses, setResponses] = React.useState(0);

  React.useEffect(() => {
    getQuestions();
  }, []);

  const getQuestions = () => {
    quizService().then(response => {
      setQuestions(response);
    });
  };

  const computeAnswer = (answer, correct) => {
    if (answer === correct) {
      setScore(score + 1);
    }

    setResponses(responses < 5 ? responses + 1 : 5);
  };

  const playAgain = () => {
    getQuestions();
    setScore(0);
    setResponses(0);
  };

  return (
    <div className="Container">
      <div className="title">Quizz</div>
      {responses < 5 && questions.map(({ questionId, question, answers, correct }) =>
        <Question
          key={questionId}
          question={question}
          answers={answers}
          selected={answer => computeAnswer(answer, correct)} />
      )}

      {responses === 5 ? <Result score={score} playAgain={playAgain} />: null}
    </div>
  );
}

export default App;
