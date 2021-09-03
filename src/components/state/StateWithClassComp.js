import React, { Component } from 'react'
import Divider from '../comp_divider/Divider'

export class StateWithClassComp extends Component {
    constructor(){
        super()
        this.state = {
            msg: 'This is msg state from class comp',
            counter: 0
        }
    }

    performMagic(){
        this.setState({
            msg: 'HAHA Magic just happened!'
        })
    }

    incrementCounter(){
        this.setState((prevState, props) => ({
            counter: prevState.counter + 1
        }), () => {
            console.log('Updated counter', this.state.counter)
        })
    }

    incrementCounterByThree(){
        this.incrementCounter()
        this.incrementCounter()
        this.incrementCounter()
    }

    render(){
        return(
            <div>
                <p>{this.state.msg}</p>
                <button onClick={() => this.performMagic()/* Event binding */}>Click here to see magic(once)</button>
                {/* 
                    Event binding techniques(recommended 3 & 4)
                    1. this.performMagic.bind(this)
                    2. use arrow function syntax as shown above
                    3. define this.perfromMagic = this.performMagic.bind(this) in constructor
                    4. declare performMagic function with arrow function syntax
                */}

                {/* state management */}
                <p>{this.state.counter}</p>
                <button onClick={() => this.incrementCounter()}>Increment Counter</button>
                <button onClick={() => this.incrementCounterByThree()}>Increment Counter by 3</button>

                <Divider/>
            </div>
        )
    }
}