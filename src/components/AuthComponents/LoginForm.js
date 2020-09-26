import React from 'react';
import Error from '../misc/Error';

export default function LoginForm(props) {
    return (
        <div className="auth-page">
            <h2>Login</h2>
            {props.error && <Error message = {props.error} clearError={()=> props.setError(undefined) }/>}
            <form onSubmit={props.submit}>
                <label htmlFor="login-email">Email</label>
                <input id="login-email" type="email" onChange={e=> props.setEmail(e.target.value)}/>
                <label htmlFor="login-pass">Password</label>
                <input id="login-pass" type="password" onChange={e=> props.setPassword(e.target.value)}/>
                <input type="submit" value="Login"/>
            </form>
            
        </div>
    )
}
