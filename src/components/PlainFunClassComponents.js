import React from 'react'
import PlainFunComp from './PlainFunctionalComponent';
import PlainClassComp from './PlainClassComponent';

const PlainFunClassComponents = () => {
    return(
        <div>
            <h3>Functional and Class components</h3>
            <PlainFunComp/>
            <PlainClassComp/>
            <p>------</p>
        </div>
    )
}

export default PlainFunClassComponents
