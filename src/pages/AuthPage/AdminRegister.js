import React, {useState , useContext} from 'react';
import {  useHistory } from 'react-router-dom';
import './Auth.css';
import Axios from 'axios';
import AdminContext from '../../context/AdminContext';
import Error from '../../components/misc/Error';


export default function Register() {
    const [adminEmail , setAdminEmail] = useState();
    const [adminPassword , setAdminPassword] = useState();
    const [adminPasswordCheck , setAdminPasswordCheck] = useState();
    const [adminDisplayName , setAdminDsiplayName] = useState();
    const [error , setError] = useState();
    
    const {setAdminData} = useContext(AdminContext);
    const history = useHistory();
    const submit =  async  (e) =>{
        e.preventDefault();
        try{
            const newUser = {email:adminEmail , password:adminPassword , passwordCheck:adminPasswordCheck ,displayName: adminDisplayName};
            await Axios.post("http://localhost:5000/admin/register/",newUser);
            console.log("here");
            const loginRes = await Axios.post("http://localhost:5000/admin/login/",
                {email:adminEmail,password:adminPassword}
            );
            setAdminData({
                token: loginRes.data.token,
                admin: loginRes.data.admin,
            });
            localStorage.setItem("auth-admin-token", loginRes.data.token);
            history.push("/admin");
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
                <input id="register-email" type="email" onChange={e=> setAdminEmail(e.target.value)}/>
                <label htmlFor="register-pass">Password</label>
                <input id="register-pass" type="password" onChange={e=> setAdminPassword(e.target.value)}/>
                <label htmlFor="register-cpass">Comfirm Password</label>
                <input id="register-cpass" type="password" onChange={e=> setAdminPasswordCheck(e.target.value)}/>
                <label htmlFor="register-name">Username</label>
                <input id="register-name" type="text" onChange={e=> setAdminDsiplayName(e.target.value)}/>
                <input type="submit" value="Register"/>
            </form>
            
        </div>
        </>
    )
}
