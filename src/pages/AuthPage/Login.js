import React from 'react';
import { Link } from 'react-router-dom';
import './Auth.css';
import Header from '../../components/Header/Header';
export default function Register() {
    return (
        <>
        <Link to="/"><Header /></Link>
        <div className="auth-page">
            <h2>Login</h2>
            <form>
                <label htmlFor="login-email">Email</label>
                <input id="login-email" type="email"/>
                <label htmlFor="login-pass">Password</label>
                <input id="login-pass" type="password"/>
                <input type="submit" value="Login"/>
            </form>
            
        </div>
        </>
    )
}