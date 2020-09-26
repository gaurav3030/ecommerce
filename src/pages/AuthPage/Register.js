import React, {useState , useContext} from 'react';
import {  useHistory } from 'react-router-dom';
import './Auth.css';
import Axios from 'axios';
import UserContext from '../../context/UserContext';
import Error from '../../components/misc/Error';


export default function Register() {
    const [email , setEmail] = useState();
    const [password , setPassword] = useState();
    const [passwordCheck , setPasswordCheck] = useState();
    const [displayName , setDsiplayName] = useState();
    const [error , setError] = useState();
    
    const {setUserData} = useContext(UserContext);
    const history = useHistory();
    const submit =  async  (e) =>{
        e.preventDefault();
        try{
            const newUser = {email , password , passwordCheck , displayName};
            await Axios.post("http://localhost:5000/users/register/",newUser);
            
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
        catch(err){
            err.response.data.msg && setError(err.response.data.msg);
        }
        
    }
    return (
        <>
        
        <div className="auth-page">
            <h2>Register </h2>
            {error && <Error message = {error} clearError={()=> setError(undefined) }/>}
            <form onSubmit={submit}>
                <label htmlFor="register-email">Email</label>
                <input id="register-email" type="email" onChange={e=> setEmail(e.target.value)}/>
                <label htmlFor="register-pass">Password</label>
                <input id="register-pass" type="password" onChange={e=> setPassword(e.target.value)}/>
                <label htmlFor="register-cpass">Comfirm Password</label>
                <input id="register-cpass" type="password" onChange={e=> setPasswordCheck(e.target.value)}/>
                <label htmlFor="register-name">Username</label>
                <input id="register-name" type="text" onChange={e=> setDsiplayName(e.target.value)}/>
                <input type="submit" value="Register"/>
            </form>
            
        </div>
        </>
    )
}
