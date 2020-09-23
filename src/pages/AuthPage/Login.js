import React,{useState,useContext} from 'react';
import { Link , useHistory } from 'react-router-dom';
import './Auth.css';
import UserContext from '../../context/UserContext';
import Header from '../../components/Header/Header';
import Axios from 'axios';
export default function Register() {
    const [email , setEmail] = useState();
    const [password , setPassword] = useState();

    const {setUserData} = useContext(UserContext);
    const history = useHistory();
    const submit =  async  (e) =>{
        e.preventDefault();
        
        const loginRes = await Axios.post("http://localhost:5000/users/login/",
            {email,password}
        );
        setUserData({
            token: loginRes.data.token,
            user: loginRes.data.user,
        });
        localStorage.setItem("auth-token", loginRes.data.token);
        history.push("/");
    }
    return (
        <>
        <Link to="/"><Header /></Link>
        <div className="auth-page">
            <h2>Login</h2>
            <form onSubmit={submit}>
                <label htmlFor="login-email">Email</label>
                <input id="login-email" type="email" onChange={e=> setEmail(e.target.value)}/>
                <label htmlFor="login-pass">Password</label>
                <input id="login-pass" type="password" onChange={e=> setPassword(e.target.value)}/>
                <input type="submit" value="Login"/>
            </form>
            
        </div>
        </>
    )
}