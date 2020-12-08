import React, {useState,useEffect} from 'react';
import Axios from 'axios';
import AdminContext from '../../context/AdminContext';
import {BrowserRouter, Switch, Route} from "react-router-dom";
import AdminHeader from '../../components/Header/AdminHeader';
import adminHomepage from './AdminHomePage';
import Login from '../AuthPage/AdminLogin';
import Register from '../AuthPage/AdminRegister'; 

 
function AdminPage() {
    const [adminData , setAdminData] = useState({
        token: undefined,
        admin: undefined,
      });
      const [loading, setLoading] = useState(0);
      useEffect(() => {
        const checkLoggedIn = async () => {
          let token = localStorage.getItem("auth-admin-token");
          if(token === null){
            localStorage.setItem("auth-admin-token","");
            token ="";
          }
          const tokenRes = await Axios.post(
            "http://localhost:5000/admin/tokenIsValid",
            null,
            { headers : {"x-auth-admin-token":token} }
          );
          if(tokenRes.data){
            const userRes = await Axios.get("http://localhost:5000/admin/",
              {headers: {"x-auth-admin-token":token}
            });
            setAdminData({
              token,
              admin: userRes.data,
            });
          }
          setLoading(1);
          
        }
        checkLoggedIn();
        
      });
      if (loading===0) {
        return null;
      }
    
  return (
    <div>
      
      <BrowserRouter>
        <AdminContext.Provider value={{adminData , setAdminData}}>
          <AdminHeader />
          <Switch>
            <Route path="/admin" component ={adminHomepage} exact />
            <Route path="/admin/register" component ={Register} />
            <Route path="/admin/login" component ={Login} />
            
          </Switch>
        </AdminContext.Provider>
      </BrowserRouter>
    </div>
  );
}

export default AdminPage;