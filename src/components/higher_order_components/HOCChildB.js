import React, { Component } from 'react'
import CounterHOC from './counterHOC'
import Divider from '../comp_divider/Divider'

class HOCChildB extends Component {
  render() {
    const {count, incrementCount} = this.props
    return (
      <div>
        <p onMouseOver={incrementCount}>Hover count: {count}</p>
        <Divider/>
      </div>
    )
  }
}

export default CounterHOC(HOCChildB, 2)