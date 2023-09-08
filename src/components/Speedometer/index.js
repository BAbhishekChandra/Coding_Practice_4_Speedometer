// Write your code here

import {Component} from 'react'

import './index.css'

class Speedometer extends Component {
  state = {speed: 0}

  accelerateSpeed = () => {
    this.setState(prevState =>
      prevState.speed < 200
        ? {speed: prevState.speed + 10}
        : {speed: prevState.speed},
    )
  }

  applyBrake = () => {
    this.setState(prevState =>
      prevState.speed > 0
        ? {speed: prevState.speed - 10}
        : {speed: prevState.speed},
    )
  }

  render() {
    const {speed} = this.state

    return (
      <div className="main-container">
        <div className="bg-container">
          <h1 className="heading">SPEEDOMETER</h1>
          <img
            className="image"
            src="https://assets.ccbp.in/frontend/react-js/speedometer-img.png"
            alt="speedometer"
          />
          <h1 className="meter">Speed is {speed}mph</h1>
          <p className="description">Min Limit is 0mph, Max Limit is 200mph</p>
          <div className="button-container">
            <button
              type="button"
              className="accelerate-button"
              onClick={this.accelerateSpeed}
            >
              Accelerate
            </button>
            <button
              type="button"
              className="brake-button"
              onClick={this.applyBrake}
            >
              Apply Brake
            </button>
          </div>
        </div>
      </div>
    )
  }
}

export default Speedometer
