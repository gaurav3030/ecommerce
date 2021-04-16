import React, {useState,useEffect} from 'react';
import './App.css';
import Axios from 'axios';
import {BrowserRouter, Switch, Route} from "react-router-dom";
import Header from './components/Header/Header';
import Homepage from './pages/Homepage/HomePage';
import Register from './pages/AuthPage/Register';
import Login from './pages/AuthPage/Login';
import UserContext from './context/UserContext';
import ShopPage from './pages/ShopPage/Shop';

function App() {
  const [userData , setUserData] = useState({
    token: undefined,
    user: undefined,
  });
  const [loading, setLoading] = useState(0);

  useEffect(() => {
    const checkLoggedIn = async () => {
      let token = localStorage.getItem("auth-token");
      if(token === null){
        localStorage.setItem("auth-token","");
        token ="";
      }
      const tokenRes = await Axios.post(
        "http://localhost:5000/users/tokenIsValid",
        null,
        { headers : {"x-auth-token":token} }
      );
      if(tokenRes.data){
        const userRes = await Axios.get("http://localhost:5000/users/",
          {headers: {"x-auth-token":token}
        });
        setUserData({
          token,
          user: userRes.data,
        });
      }
      setLoading(1);
      
    }
    checkLoggedIn();
    
  },[]);
  if (loading===0) {
    return null;
  }


  return (
    <>
      
      <BrowserRouter>
        <UserContext.Provider value={{userData , setUserData}}>
        <Header />
          <Switch>
            <Route path="/" component ={Homepage} exact />
            <Route path="/register" component ={Register} exact />
            <Route path="/login" component ={Login} />
            <Route path="/shop" component ={ShopPage} />
          </Switch>
        </UserContext.Provider>
      </BrowserRouter>
      
    </>
  );
}

export default App;
