import React from 'react';
import ReactDOM from 'react-dom';
import Home from 'pages/home';
import Login from 'pages/login';
import Application from 'pages/application';
import Create from 'pages/create'; 
import Forgot from 'pages/forgot'; 
import {BrowserRouter as Router, Switch, Route} from 'react-router-dom'; 
import './index.css';
import { ProvideAuth } from 'hooks/useAuth';

const App = () => (
  <ProvideAuth>
    <Router>   
      <Switch> 
        <Route path="/" exact component={Home}/>
        <Route path="/login" component={Login}/> 
        <Route path="/register" component={Create}/> 
        <Route path="/forgot" component={Forgot}/>
        <Route path="/application" component={Application}/> 
        <Route component={Home}/> 
      </Switch>
    </Router>
  </ProvideAuth>
);

ReactDOM.render(<App/>, document.getElementById('root'));
