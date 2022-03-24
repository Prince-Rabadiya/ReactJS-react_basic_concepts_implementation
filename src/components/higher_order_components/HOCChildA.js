import React, { Component } from 'react'
import CounterHOC from './counterHOC'

class HOCChildA extends Component {
  render() {
    const {count, incrementCount} = this.props
    return (
      <div>
        <button onClick={incrementCount}>Click count: {count}</button>
      </div>
    )
  }
}

export default CounterHOC(HOCChildA, 3)
// higher order components is the one who performs operations on given component and renders results