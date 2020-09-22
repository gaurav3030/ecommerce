import React from 'react';
import { Link } from 'react-router-dom';
import './Auth.css';
import Header from '../../components/Header/Header';
export default function Register() {
    return (
        <>
        <Link to="/"><Header /></Link>
        <div className="auth-page">
            <h2>Register </h2>
            <form>
                <label htmlFor="register-email">Email</label>
                <input id="register-email" type="email"/>
                <label htmlFor="register-pass">Password</label>
                <input id="register-pass" type="password"/>
                <label htmlFor="register-cpass">Comfirm Password</label>
                <input id="register-cpass" type="password"/>
                <label htmlFor="register-name">Username</label>
                <input id="register-name" type="text"/>
                <input type="submit" value="Register"/>
            </form>
            
        </div>
        </>
    )
}
