import React, {useContext,useState} from 'react';
import AdminContext from '../../context/AdminContext';
import {BrowserRouter, Switch, Route} from "react-router-dom";
import Header from '../../components/Header/Header';
import adminHomepage from './adminHomePage';
import Login from '../AuthPage/Login';
import Register from '../AuthPage/Register'; 

 
function AdminPage() {
    const [adminDATA , setAdminData] = useState({
        token: undefined,
        user: undefined,
      });
  return (
    <div>
      
      <BrowserRouter>
        <AdminContext.Provider value={{adminDATA ,setAdminData}}>
        <Header />
          <Switch>
            <Route path="/" component ={adminHomepage} exact />
            <Route path="/register" component ={Register} />
            <Route path="/login" component ={Login} />
            <Route path="/admin" component ={AdminPage} />
          </Switch>
        </AdminContext.Provider>
      </BrowserRouter>
    </div>
  );
}

export default AdminPage;