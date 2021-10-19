import React from 'react'
import "./Login.css";


function Login() {
    const sigIn=()=>{

    };
    return (
        <div className="login">
            <div className="login__logo">
                <img
                    src="https://upload.wikimedia.org/wikipedia/commons/thumb/d/d4/Akash_rajoriya_Facebook_.png/120px-Akash_rajoriya_Facebook_.png"
                />
                <img
                     src="https://www.logo.wine/
                     a/logo/Facebook/Facebook-logo.wine.svg"
                />
            </div>
            <button type="submit" onClick={sigIn}>
                Sign In
            </button>
        </div>
    )
}

export default Login
