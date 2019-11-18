import React from 'react';
import ReactDOM from 'react-dom';
import Home from 'pages/home';
import Login from 'pages/login';
import Dashboard from 'pages/dashboard';
import {BrowserRouter as Router, Switch, Route} from 'react-router-dom'; 
import './index.css';

const App = () => (
  <Router>   
    <Switch> 
      <Route path="/" exact component={Home}/>
      <Route path="/login" component={Login}/> 
      <Route path="/dashboard" component={Dashboard}/> 
    </Switch>
  </Router>
);

ReactDOM.render(<App/>, document.getElementById('root'));
