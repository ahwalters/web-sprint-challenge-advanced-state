import React, { useState, useEffect} from 'react'
import { connect } from 'react-redux'
import { fetchQuiz, selectAnswer, postAnswer } from '../state/action-creators'

function Quiz(props) {

  const handleSubmit = (e) => {
    e.preventDefault()
    props.postAnswer({ "quiz_id": props.quiz.quiz_id, "answer_id": props.selectedAnswer.answer_id})
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
            <h2>{props.quiz.question}</h2>

            <div id="quizAnswers">
              <div className={`answer ${props.selectedAnswer === props.quiz.answers[0] ? 'selected' : ''}`} style={{ "--i": 0 }}>
                {props.quiz.answers[0].text}
                <button onClick={() => {props.selectAnswer(props.quiz.answers[0])}}>
                  { props.selectedAnswer === props.quiz.answers[0] ? 'SELECTED' : 'Select'}
                </button>
              </div>

              <div className={`answer ${props.selectedAnswer === props.quiz.answers[1] ? 'selected' : ''}`}>
              {props.quiz.answers[1].text}
                <button onClick={() => {props.selectAnswer(props.quiz.answers[1])}}>
                { props.selectedAnswer === props.quiz.answers[1] ? 'SELECTED' : 'Select'}
                </button>
              </div>
            </div>

            <button id="submitAnswerBtn" onClick={handleSubmit} disabled={!props.selectedAnswer}>Submit answer</button>
          </>
        ) : 'Loading next quiz...'
      }
    </div>
  )
}

const mapStateToProps = (state) => {
  return {
    quiz : state.quiz,
    selectedAnswer : state.selectedAnswer
  }
}

export default connect(mapStateToProps, { fetchQuiz, selectAnswer, postAnswer })(Quiz)