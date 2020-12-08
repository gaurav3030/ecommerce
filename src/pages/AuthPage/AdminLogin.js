import React,{useState,useContext} from 'react';
import {  useHistory } from 'react-router-dom';
import './Auth.css';
import AdminContext from '../../context/AdminContext';
import Axios from 'axios';
import LoginForm from '../../components/AuthComponents/LoginForm';


export default function Login() {

    const [adminEmail , setAdminEmail] = useState();
    const [adminPassword , setAdminPassword] = useState();
    const [error , setError] = useState();

    const {setAdminData} = useContext(AdminContext);
    const history = useHistory();
    const submit =  async  (e) =>{
        e.preventDefault();
        try{
            const loginRes = await Axios.post("http://localhost:5000/admin/login/",
                {email:adminEmail,password:adminPassword}
            );
            setAdminData({
                token: loginRes.data.token,
                admin: loginRes.data.admin,
            });
            localStorage.setItem("auth-admin-token", loginRes.data.token);
            history.push("/admin");
        }catch(err){
            err.response.data.msg && setError(err.response.data.msg);
        }
        
    }
    return (
        <>
        <LoginForm error = {error} setError={setError} submit={submit} setEmail={setAdminEmail} setPassword={setAdminPassword}/>
        </>
    )
}