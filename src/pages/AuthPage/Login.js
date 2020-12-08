import React,{useState,useContext} from 'react';
import {  useHistory } from 'react-router-dom';
import './Auth.css';
import UserContext from '../../context/UserContext';
import Axios from 'axios';
import LoginForm from '../../components/AuthComponents/LoginForm';


export default function Login(props) {

    const [email , setEmail] = useState();
    const [password , setPassword] = useState();
    const [error , setError] = useState();

    const {setUserData} = useContext(UserContext);
    const history = useHistory();
    
    
    const submit =  async  (e) =>{
        e.preventDefault();
        try{
            const loginRes = await Axios.post("http://localhost:5000/users/login/",
                {email,password}
            );
            setUserData({
                token: loginRes.data.token,
                user: loginRes.data.user,
            });
            localStorage.setItem("auth-token", loginRes.data.token);
            history.push("/");
        }catch(err){
            err.response.data.msg && setError(err.response.data.msg);
        }
        
    }
    return (
        <>
        <LoginForm error = {error} setError={setError} submit={submit} setEmail={setEmail} setPassword={setPassword}/>
        </>
    )
}