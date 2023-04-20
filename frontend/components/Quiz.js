import React, { useState, useEffect} from 'react'
import { connect } from 'react-redux'
import { fetchQuiz } from '../state/action-creators'

function Quiz(props) {

  //const [selectedAnswer, setSelectedAnswer] = useState()
  //const [state, dispatch] = useReducer(quiz, initialQuizState)

  const handleAnswerClick = (e) => {
    e.preventDefault()
    console.log(e.target)
  }

  const handleSubmit = () => {
    props.fetchQuiz()
    console.log(props.quiz)
  }

  useEffect( () => {
    props.fetchQuiz()
  }, []);

  return (
    <div id="wrapper">
      {
        // quiz already in state? Let's use that, otherwise render "Loading next quiz..."
        props.quiz ? (
          <>
            <h2>{props.quiz.quiz.question}</h2>

            <div id="quizAnswers">
              <div className="answer selected">
                {props.quiz.quiz.answers[0].text}
                <button onClick={handleAnswerClick}>
                  SELECTED
                </button>
              </div>

              <div className="answer">
              {props.quiz.quiz.answers[1].text}
                <button onClick={handleAnswerClick}>
                  Select
                </button>
              </div>
            </div>

            <button id="submitAnswerBtn" onClick={handleSubmit}>Submit answer</button>
          </>
        ) : 'Loading next quiz...'
      }
    </div>
  )
}

const mapStateToProps = (state) => {
  return {
    quiz : state.quiz
  }
}

export default connect(mapStateToProps, { fetchQuiz })(Quiz)