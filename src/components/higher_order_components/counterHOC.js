import React from "react";

const CounterHOC = (OriginalComp, incrementor) => {
  class NewComp extends React.Component {
    constructor(props) {
      super(props)
    
      this.state = {
        count: 0,
      }
    }
  
    incrementCount = () => {
      this.setState(prevState => {
        return { count: prevState.count + incrementor }
      })
    }
  
    render(){
      return <OriginalComp count={this.state.count} incrementCount={this.incrementCount} { ... this.state} /* to send down remaining states*/ />
    }
  }
  return NewComp
}

export default CounterHOC