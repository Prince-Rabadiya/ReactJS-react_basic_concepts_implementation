import React from 'react'
import '../../stylesheets/misc.css' //inherits to child components
import style from '../../stylesheets/module.module.css'
import Divider from '../comp_divider/Divider'

export const StylingWithCss = () => {
    const styleClass = true && 'italic' //just to show use of bactics(``) for interpolation
    return (
        <div>
            <h3>applying styles with css</h3>
            <p className={`red ${styleClass}`}>This text should be in red colour.</p>
        </div>
    )
}

export const InlineCss = () => {
    const styleCode = {
        // key in camelcase
        fontSize: '14px',
        color: 'green'
    }

    return(
        <div>
            <p style={styleCode}>Inline css</p>
        </div>
    )
}

export const StyleWithModuleCss = () => {
    return(
        <React.Fragment> {/*can use fragment when you don't want to wrap jsx into one specific div*/}
            <p className={style.bgAqua}>styling with module css</p>
            <Divider/>
        </React.Fragment>
    )
}