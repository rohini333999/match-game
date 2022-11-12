import {Component} from 'react'

import './index.css'

class NavBar extends Component {
  state = {time: 60}

  componentDidMount() {
    this.timerId = setInterval(this.tick, 1000)
  }

  tick = () => {
    const {time} = this.state
    const setTime =
      time > 0
        ? this.setState(prev => ({time: prev.time - 1}))
        : this.setState({time: 0})
  }

  render() {
    const {time} = this.state
    const {score} = this.props

    return (
      <div className="navbar-container">
        <img
          src="https://assets.ccbp.in/frontend/react-js/match-game-website-logo.png"
          alt="website logo"
          className="website-logo"
        />
        <div className="timer-container">
          <h1 className="score">Score:{score}</h1>
          <img
            src="https://assets.ccbp.in/frontend/react-js/match-game-timer-img.png"
            alt="timer"
            className="timer"
          />
          <p className="para">{time} sec</p>
        </div>
      </div>
    )
  }
}

export default NavBar
