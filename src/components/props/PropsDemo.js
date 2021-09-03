import Divider from "../comp_divider/Divider"

export const PropsDemo = (props) => {
    // for multiple props you can directly destructure it like this {first, second} and directly use it
    // for class comp const {first, second} = this.props (same for state)
    return(
        <div>
            <h4>Use of props</h4>
            <p>I am the prop name {props.name}</p>
            {props.children}
            {/* use this.props.name for class component */}
            {/* props are immutable / only parent can control it */}
            <Divider/>
        </div>
    )
}