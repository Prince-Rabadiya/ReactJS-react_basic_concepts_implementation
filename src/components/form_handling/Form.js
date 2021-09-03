import React, { Component } from 'react'
import Divider from '../comp_divider/Divider'

export class Form extends Component {
    constructor(props) {
        super(props)
    
        this.state = {
            name: '',
            age: ''
        }
    }

    nameChanged = (event) => {
        this.setState({
            name: event.target.value
        })
    }
    
    ageChanged = (event) => {
        this.setState({
            age: event.target.value
        })
    }

    handleSubmission = (event) => {
        alert(`Name is ${this.state.name} and age is ${this.state.age}`)
        event.preventDefault()
    }

    render() {
        const {name, age} = this.state //state destructuring
        return (
            <div>
                <form onSubmit={this.handleSubmission}>
                    <p>Form</p>
                    <label>Name:</label>
                    <input value={name} onChange={this.nameChanged} type='text' />
                    <br/><br/>
                    <label>Age:</label>
                    <input value={age} onChange={this.ageChanged} type='number' />
                    <br/><br/>
                    <button type='submit'>Submit</button>
                </form>
                <Divider/>               
            </div>
        )
    }
}
