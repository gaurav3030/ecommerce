import ReactDOM from 'react-dom';
import React from 'react';
import './App.css';
import {BrowserRouter, Switch, Route} from "react-router-dom";
import './index.css';
import App from './App';
import * as serviceWorker from './serviceWorker';
import AdminPage from './pages/AdminPage/AdminPage';


ReactDOM.render(
  <React.StrictMode>
    <BrowserRouter>
        
        
          <Switch>
            <Route path="/" component ={App} exact />
            
            <Route path="/admin" component ={AdminPage} />
          </Switch>
        
      </BrowserRouter>
  </React.StrictMode>,
  document.getElementById('root')
);

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
serviceWorker.unregister();


