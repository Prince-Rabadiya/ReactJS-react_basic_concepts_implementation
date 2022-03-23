import React, { Component } from 'react'
// import Divider from '../comp_divider/Divider'

class RefsDemo extends Component {
  constructor(props) {
    super(props)
    this.ref = React.createRef()
  }

  // componentDidMount() {
  //   this.ref.current.focus()
  //   console.log(this.ref)
  // }

  focus() {
    this.ref.current.focus()
  }

  buttonClickHandler = () => {
    alert(this.ref.current.value)
  }

  render() {
    return (
      <div>
        <h4>RefsDemo</h4>
        <input type='text' ref={this.ref}></input>
        <button onClick={() => {this.buttonClickHandler()}}>Click</button>
        {/* <Divider/> */}
      </div>
    )
  }
}

export default RefsDemo