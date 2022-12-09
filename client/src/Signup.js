import React, { useState } from 'react';
import { renderMatches } from 'react-router-dom';
import account from './account.svg'
import './login.css'

function Signup({ setCurrentUser, onSignIn }) {
    const [formData, setFormData] = useState({
        first_name: "",
        last_name: "",
        email: "",
        phone: "",
        profile_photo: "",
        password: ""
    })
    console.log(formData)
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
        e.preventDefault()
        fetch("/climbers", {
            method: "POST",
            headers: {
                "Content-Type": "application/json",
            },
            body: JSON.stringify(formData),
        }).then((res) => {
            if (res.ok) {
                res.json().then((user) => {
                    console.log("users", user)
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

    console.log(formData)
    return (
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
                                name="first_name"
                                placeholder="First name"
                                value={formData.first_name}
                                onChange={handleChange}
                                className="inputStyle"
                            />
                        </div>
                        <div className="inputView">
                            <input
                                type="text"
                                name="last_name"
                                placeholder="Last name"
                                value={formData.last_name}
                                onChange={handleChange}
                                className="inputStyle"
                            />
                        </div>
                        <div className="inputView">
                            <input
                                type="number"
                                name="phone"
                                placeholder="Phone"
                                value={formData.phone}
                                onChange={handleChange}
                                className="inputStyle"
                            />
                        </div>
                        <div className="inputView">
                            <input
                                type="text"
                                name="email"
                                placeholder="Email/User Name"
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
                        <div className="inputView">
                            <input
                                type="text"
                                name="profile_photo"
                                placeholder="Profile photo"
                                value={formData.profile_photo}
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