// Write your code here

import {Component} from 'react'

import './index.css'

class ClickCounter extends Component {
  render() {
    return (
      <div className="counter-container">
        <h1 className="counter-heading">
          {' '}
          The Button has been clicked
          <br />
          <span className="value"> 0 </span> times
        </h1>
        <p className="description"> Click the button to increase the count!</p>
        <div className="button-container">
          <button type="button" className="button">
            {' '}
            Click Me!
          </button>
        </div>
      </div>
    )
  }
}

export default ClickCounter
