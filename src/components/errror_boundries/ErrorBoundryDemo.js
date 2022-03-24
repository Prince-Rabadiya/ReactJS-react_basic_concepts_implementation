import React, { Component } from 'react'

class ErrorBoundryDemo extends Component {
  constructor(props) {
    super(props)

    this.state = {
      hasError: false
    }
  }

  static getDerivedStateFromError(error) {
    return {
      hasError: true
    }
  }

  // componentDidCatch(error, info) {
  //   // error gives error details
  //   // info shows where error is occured in code and other details
  // }

  render() {
    if (this.state.hasError){
      return <p>Oops!!! Something went wrong.</p>
    }
    return this.props.children
  }
}

export default ErrorBoundryDemo