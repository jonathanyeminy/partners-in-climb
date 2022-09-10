import React, { useState } from 'react';
import account from './account.svg'
import './login.css'

function Signup({ setCurrentUser,onSignIn }) {
    const [formData, setFormData] = useState({
        email: "",
        password: "",
    })

    const [error, setErrors] = useState([])

    console.log("error", error)
    const handleChange = (e) => {
        console.log("email", e.target)
        console.log("value", e.target.value)

        setFormData({
            ...formData,
            [e.target.name]: e.target.value
        })
    }

    const handleSubmit = (e) => {
        e.preventDefault();
        fetch("/climbers", {
            method: "POST",
            headers: {
                "Content-Type": "application/json",
            },
            body: JSON.stringify(formData),
        }).then((res) => {
            if (res.ok) {
                res.json().then((user) => {
                    console.log(user)
                    setCurrentUser(user)
                });
            } else {
                res.json().then((errors) => {
                    console.log("signup", errors.errors)
                    setErrors(errors.errors)
                })
            }
        })
    }


    return (
        // <div id="login">
        //     <ul>
        //         <form>
        //             <label>Signup
        //                 <input 
        //                     type="text" 
        //                     email="name"
        //                     placeholder="username"
        //                     value={formData.user} 
        //                     onChange={handleChange} 
        //                 />
        //             </label>
        //             <label>Password
        //                 <input 
        //                     type="text" 
        //                     name="password"
        //                     placeholder="password"
        //                     value={formData.password} 
        //                     onChange={handleChange} 
        //                 />
        //             </label>
        //         </form>
        //     </ul>
        //     <button className="signup-btn"
        //         onClick={handleSubmit}>
        //         Sign Up
        //     </button>
        // </div>
        <div className="loginMainContainer">
            <div className="loginSubContainer">
                <div className="loginContainer">
                    <div className="accountView">
                        <img src={account} alt="" />
                    </div>
                    <p style={{ margin: 0, marginBottom: 15, fontSize: 24 }}>Sign Up</p>
                    <form>
                        <div className="inputView">
                            <input
                                type="text"
                                name="email"
                                placeholder="Email"
                                value={formData.email}
                                onChange={handleChange}
                                className="inputStyle"
                            />
                        </div>
                        <div className="inputView">
                            <input
                                type="password"
                                name="password"
                                placeholder="Password"
                                value={formData.password}
                                onChange={handleChange}
                                className="inputStyle"
                            />
                        </div>
                    </form>
                    <div className="loginBtnView" onClick={handleSubmit}>
                        <button className="loginBtn" onClick={handleSubmit}>Sign Up</button>
                    </div>
                    <div className="rememberView">
                        <p style={{ margin: 0 }}>
                            Have an account?{" "}
                            <a onClick={onSignIn} style={{ color: "#3e87f2", textDecoration: "none" }}>
                                Sign In
                            </a>
                        </p>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Signup;