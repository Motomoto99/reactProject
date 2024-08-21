import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import reportWebVitals from './reportWebVitals';
import HookRefNg from './components/chap07/HookRefNg';
import HookRef from './components/chap07/HookRef';
import HookRefForward from './components/chap07/HookRefForward';

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <>
    <HookRefNg />
    <HookRef />
    <HookRefForward />
  </>
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
