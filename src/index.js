// import React from 'react';
// import ReactDOM from 'react-dom';

// import App from './App';
// import { ThemeProvider } from './Context';
// import { BrowserRouter as Router } from 'react-router-dom';

// ReactDOM.render(
//   <Router>
//   <ThemeProvider>
//     <App />
//   </ThemeProvider>
//   </Router>,
//   document.getElementById('root')
// );

import React from 'react';
import { createRoot } from 'react-dom/client';  // Update the import statement

import App from './App';
import { ThemeProvider } from './Context';
import { BrowserRouter as Router } from 'react-router-dom';

const root = createRoot(document.getElementById('root'));

root.render(
  <Router basename='/index.html'>
    <ThemeProvider>
      <App />
    </ThemeProvider>
  </Router>
);
// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
