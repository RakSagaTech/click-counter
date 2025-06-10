// Write your code here

import {Component} from 'react'

import './index.css'


class ClickCounter extends Component{
    render(){
        return (
            <div>
                <h1> The Button has been clicked 
                    <br/><span> 0 </span> times
                </h1>
                <p> Click the button to increase the count!</p>
                <button type="button"> Click Me! </button>
            </div>
        )
    }
}

export default ClickCounter