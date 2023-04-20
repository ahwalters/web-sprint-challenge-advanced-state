import React from 'react'
import { connect } from 'react-redux'
import { moveClockwise, moveCounterClockwise } from '../state/action-creators'

function Wheel(props) {

  const handleMoveClockwise = () => {
    let newPos
    if (props.wheel === 5){
      newPos = 0
    }
    else newPos = props.wheel + 1
    props.moveClockwise(newPos)
  }
  const handleMoveCounterClockwise = () => {
    props.moveCounterClockwise(2)
    console.log(props.wheel)
  }

  return (
    <div id="wrapper">
      <div id="wheel">
        <div className="cog active" style={{ "--i": 0 }}>B</div>
        <div className="cog" style={{ "--i": 1 }}></div>
        <div className="cog" style={{ "--i": 2 }}></div>
        <div className="cog" style={{ "--i": 3 }}></div>
        <div className="cog" style={{ "--i": 4 }}></div>
        <div className="cog" style={{ "--i": 5 }}></div>{/* --i is a custom CSS property, no need to touch that nor the style object */}
      </div>
      <div id="keypad">
        <button id="counterClockwiseBtn" onClick={handleMoveCounterClockwise}>Counter clockwise</button>
        <button id="clockwiseBtn" onClick={handleMoveClockwise} >Clockwise</button>
      </div>
    </div>
  )
}

const mapStateToProps = (state) => {
  return {
    wheel : state.wheel
  }
}

export default connect(mapStateToProps, {moveClockwise, moveCounterClockwise})(Wheel)