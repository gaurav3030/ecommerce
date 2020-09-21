import React from 'react';
import './App.css';
import {BrowserRouter, Switch, Route} from "react-router-dom";
import Homepage from './pages/Homepage/HomePage';
import Register from './pages/Register/Register';
import Login from './pages/Login/Login';

function App() {
  return (
    <>
      <BrowserRouter>
        <Switch>
          <Route path="/" component ={Homepage} exact />
          <Route path="/register" component ={Register} />
          <Route path="/login" component ={Login} />
        </Switch>
      </BrowserRouter>
      
    </>
  );
}

export default App;
