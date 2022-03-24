import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import reportWebVitals from './reportWebVitals';

ReactDOM.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>,
  document.getElementById('root')
);

// ReactDOM.createPortal(jsx, element) This code represents use of portal.
// Portal can be used to add elements in new parent element other than root
// This createPortal can be used in any component and should encapsulate jsx code and parent element
// Although it is in different DOM tree still it will follow React component hierarchy

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
