import React, { Component } from 'react'

export class LCD extends Component {
    // going through mounting phase
    constructor(props) {
        super(props)
    
        this.state = {
             
        }
        console.log('LCD constructor')
    }

    static getDerivedStateFromProps(props, state){
        //rarely used life cycle method
        console.log('LCD getDerived')
        return null
    }

    getSnapshotBeforeUpdate(prevProp, prevState){
        //rarely used life cycle method
        console.log('LCD getSnapshotBeforeUpdate')
        return true
    }

    componentDidUpdate(){
        console.log('LCD componentDidUpdate')
    }
    
    render() {
        console.log('LCD render')
        return (
            <div>
                LCD
            </div>
        )
    }
}
