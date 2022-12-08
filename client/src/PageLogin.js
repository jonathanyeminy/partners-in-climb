import React, { useState } from "react";
import Login from "./Login";
import Signup from "./Signup";
import LoginHeader from "./LoginHeader";
import "./PageLogin.css"

function PageLogin({ setCurrentUser }) {
    const [showLogin, setShowLogin] = useState(true)

    return (
        <div id="login-cont">
            <LoginHeader />
            {showLogin ? (
                <Login setCurrentUser={setCurrentUser} onSignUp={() => setShowLogin(false)} />
            
                ) : (

                <Signup setCurrentUser={setCurrentUser} onSignIn={() => setShowLogin(true)} />
            )
            }
        </div>
    )
}

export default PageLogin;