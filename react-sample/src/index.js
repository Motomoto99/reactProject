import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import reportWebVitals from './reportWebVitals';
import { RouterProvider } from 'react-router-dom';
import routesHandle from './components/chap08/routesHandle';
import { HelmetProvider } from 'react-helmet-async';
import routesParam from './components/chap08/routesParam';

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <>
    <HelmetProvider>
      <RouterProvider router={routesParam} />
    </HelmetProvider>
  </>
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
