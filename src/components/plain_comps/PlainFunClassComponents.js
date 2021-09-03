import React from 'react'
import PlainFunComp from './PlainFunctionalComponent';
import PlainClassComp from './PlainClassComponent';
import Divider from '../comp_divider/Divider';

const PlainFunClassComponents = () => {
    return(
        <div>
            <h3>Functional and Class components</h3>
            <PlainFunComp/>
            <PlainClassComp/>
            <Divider/>
        </div>
    )
}

export default PlainFunClassComponents
