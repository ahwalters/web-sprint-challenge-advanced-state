// ❗ You don't need to add extra reducers to achieve MVP
import { combineReducers } from 'redux'
import { SET_QUIZ_INTO_STATE, SET_INFO_MESSAGE, SET_SELECTED_ANSWER, MOVE_CLOCKWISE, MOVE_COUNTERCLOCKWISE, INPUT_CHANGE, RESET_FORM } from "./action-types"

const initialWheelState = 0
function wheel(state = initialWheelState, action) {
  switch (action.type) {
    case MOVE_CLOCKWISE :
      return state === 0 ? 5 : state -= 1
    case MOVE_COUNTERCLOCKWISE :
      return state === 5 ? 0 : state += 1
    default:
      return state;
  }
}

const initialQuizState = null
function quiz(state = initialQuizState, action) {
  switch(action.type) {
    case SET_QUIZ_INTO_STATE :
      return state = action.payload
    default :
      return state
  }
}

const initialSelectedAnswerState = null
function selectedAnswer(state = initialSelectedAnswerState, action) {
  switch(action.type) {
    case SET_SELECTED_ANSWER :
      return state = action.payload
    default :
      return state
  }
}

const initialMessageState = ''
function infoMessage(state = initialMessageState, action) {
  switch (action.type) {
    case SET_INFO_MESSAGE : 
      return state = action.payload
    default :
      return state
  }
}

const initialFormState = {
  newQuestion: '',
  newTrueAnswer: '',
  newFalseAnswer: '',
}
function form(state = initialFormState, action) {
  switch(action.type) {
    case INPUT_CHANGE :
      return state = action.payload
    case RESET_FORM :
      return state = initialFormState
    default : 
      return state
  }
}

export default combineReducers({ wheel, quiz, selectedAnswer, infoMessage, form })
