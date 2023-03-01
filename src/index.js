import React, { StrictMode } from 'react';
import { createRoot } from 'react-dom/client';

import App from './App';
import ReactDOM from 'react-dom';

const rootElement = document.getElementById('root');
const root = createRoot(rootElement);

// const name = 'muhammad dikky purwanto';
// function greet() {
//   return 'hallo ' + name;
// }
// const element = <h1> {greet(name)} </h1>;

// ReactDOM.render(element, document.getElementById('master'));

root.render(
  <StrictMode>
    <App />
  </StrictMode>
);
