import React from 'react';
import './style.css';

const Form = () => {
    return (

        <>
        <div className="login-div">
        <div>
            <label for="username-signin" className="username-signin-label">User</label>
            <input type="text" id="username-signin" className="username-signin-input"></input>
        </div>
        
        <div>
            <label for="password-signin" className="password-signin-label">Password</label>
            <input type="password" id = "password-signin" className="password-signin-input"></input>
        </div>
        <button type="submit" className="submit-button">Login</button>
        </div>
        
        </>
    ); 

};

export default Form;