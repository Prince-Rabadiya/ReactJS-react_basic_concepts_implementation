import React from "react";

const Greet = () => React.createElement('div', {className: 'example'}, React.createElement('p', null, 'Here you are!'))
// const Greet = () => <p className='ignore'>Here you are!</p>

console.log(React.version) //to check react version

export default Greet;