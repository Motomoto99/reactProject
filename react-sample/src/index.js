import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import reportWebVitals from './reportWebVitals';
import HookReducer from './components/chap07/HookReducer';
import HookReducerUp from './components/chap07/HookReducerUp';
import HookReducerInit from './components/chap07/HookReducerInit';
import MyThemeProvider from './components/chap07/MyThemeProvider';
import HookThemeButton from './components/chap07/HookThemeButton';

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <>
    <MyThemeProvider>
      <HookThemeButton />
    </MyThemeProvider>
  </>
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
