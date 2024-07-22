import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';
import reportWebVitals from './reportWebVitals';
import StateForm from './samples/my-react/src/chap04/StateForm';
import StateFormUC from './samples/my-react/src/chap04/StateFormUC';
import FormSelect from './samples/my-react/src/chap04/FormSelect';
import FormTextarea from './samples/my-react/src/chap04/FormTextarea';
import FormList from './samples/my-react/src/chap04/FormList';
import FormFile from './samples/my-react/src/chap04/FormFile';
import StateNest from './samples/my-react/src/chap04/StateNest';
import StateNestImmer from './samples/my-react/src/chap04/StateNestImmer';
import StateNestImmer2 from './samples/my-react/src/chap04/StateNestImmer2';

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <>
    <StateForm />
    <StateFormUC />
    <FormTextarea />
    <FormSelect />
    <FormList />
    <FormFile />
    <StateNest />
    <StateNestImmer />
    <StateNestImmer2 />
  </>

);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
