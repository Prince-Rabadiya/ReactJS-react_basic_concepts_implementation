import React, { Component } from 'react'
import Divider from '../comp_divider/Divider'

class RenderPropCounter extends Component {
  render() {
    return (
      <div>
        <button onClick={this.props.incrementCount}>Click counter: {this.props.count}</button>
        <Divider/>
      </div>
    )
  }
}

export default RenderPropCounter