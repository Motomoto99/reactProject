import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';
import reportWebVitals from './reportWebVitals';
import StateTodo from './samples/my-react/src/chap04/StateTodo';
import FormBasic from './samples/my-react/src/chap04/FormBasic';
import FormYup from './samples/my-react/src/chap04/FormYup';

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <>
    <StateTodo />
    <FormBasic />
    <br></br>
    <FormYup />
  </>

);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
