import React, { Component } from 'react'
import RefsDemo from './RefsDemo'
import Divider from '../comp_divider/Divider'

class RefsDemoParent extends Component {
  constructor(props) {
    super(props)

    this.componentRef = React.createRef()
  }

  handleClick = () => {
    this.componentRef.current.focus()
  }


  render() {
    return (
      <div>
        RefsDemoParent
        <RefsDemo ref={this.componentRef}/>
        <button onClick={this.handleClick}>Click of parent component</button>
        <Divider/>
      </div>
    )
  }
}

export default RefsDemoParent