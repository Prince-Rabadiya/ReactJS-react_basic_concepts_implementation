import React, { Component } from 'react'

export class LCB extends Component {
    //going through mounting phase
    constructor(props) {
        super(props)
    
        this.state = {
             
        }
        console.log('LCB constructor')
    }

    static getDerivedStateFromProps(props, state){
        //rarely used life cycle method
        console.log('LCB getDerived')
        return null
    }

    componentDidMount(){
        console.log('LCB componentDidMount')
    }
    
    render() {
        console.log('LCB render')
        return (
            <div>
                LCB
            </div>
        )
    }
}
