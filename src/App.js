import React from 'react';
import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';

import {Route, Switch} from 'react-router-dom';
import Signup from './pages/Signup';
import Login from './pages/Login';
import Dashboard from './pages/Dashboard';

function App() {
  return (
    <div className="App">
          <Switch>
            <Route exact path="/" component={Signup}/>
            <Route exact  path="/login" component={Login}/>
            <Route exact  path="/dashboard" component={Dashboard}/>
            <Route component={Error}/>
            
          </Switch>
    </div>
  );
}

export default App;
