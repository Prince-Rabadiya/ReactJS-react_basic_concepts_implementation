import React, { Component } from 'react'
import Divider from '../comp_divider/Divider'
import { LCB } from './LCB'

export class LCA extends Component {
    // going through mounting phase
    constructor(props) {
        super(props)
    
        this.state = {
             
        }
        console.log('')
        console.log('life cycle mount methods:')
        console.log('LCA constructor')
    }

    static getDerivedStateFromProps(props, state){
        //rarely used life cycle method
        console.log('LCA getDerived')
        return null
    }

    componentDidMount(){
        console.log('LCA componentDidMount')
    }
    
    render() {
        console.log('LCA render')
        return (
            <div>
                LCA
                <LCB/>
                <Divider/>
            </div>
        )
    }
}
