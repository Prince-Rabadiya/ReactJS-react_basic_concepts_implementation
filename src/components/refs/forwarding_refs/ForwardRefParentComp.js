import React, { Component } from 'react'
import ForwardRefChildComp from './ForwardRefChildComp'
import Divider from '../../comp_divider/Divider'

class ForwardRefParentComp extends Component {
  constructor(props) {
    super(props)

    this.forwardRef = React.createRef()
  }

  hanldeClick = () => {
    this.forwardRef.current.focus()
  }

  render() {
    return (
      <div>
          ForwardRefParentComp
          <ForwardRefChildComp ref={this.forwardRef}/>
          <button onClick={this.hanldeClick}>Click Here</button>
          <Divider/>
      </div>
    )
  }
}

export default ForwardRefParentComp