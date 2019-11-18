import React from 'react';
import ReactDOM from 'react-dom';
import Home from 'pages/home';
import Dashboard from 'pages/dashboard';
import './index.css';

const App = () => (
  <Dashboard/>
);

ReactDOM.render(<App/>, document.getElementById('root'));
