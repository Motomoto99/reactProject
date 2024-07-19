import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';
import reportWebVitals from './reportWebVitals';
import EventBasic from './components/EventBasic';
import StateBasic from './samples/my-react/src/chap03/StateBasic';
import books from './samples/my-react/src/chap03/books'
import ForNest from './samples/my-react/src/chap03/ForNest';
import SelectStyle from './samples/my-react/src/chap03/SelectStyle';
import EventPoint from './samples/my-react/src/chap03/EventPoint';
import EventKey from './samples/my-react/src/chap03/EventKey';
import EventPassive from './samples/my-react/src/chap03/EventPassive';
import StateForm from './samples/my-react/src/chap04/StateForm';

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <>
    <StateForm />
  </>

);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
