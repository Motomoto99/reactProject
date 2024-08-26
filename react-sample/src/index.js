import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import reportWebVitals from './reportWebVitals';
import HookDeferredTransition from './components/chap07/HookDeferredTransition';
import routesBasic from './components/chap08/routesBasic';
import { RouterProvider } from 'react-router-dom';
import routesLink from './components/chap08/routesLink';

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <>
    <RouterProvider router={routesLink} />
  </>
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
