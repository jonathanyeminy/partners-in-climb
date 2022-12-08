import React, { useState } from 'react';
import './login.css'
import account from './account.svg'

function Login({ setCurrentUser,onSignUp }) {
  const [formData, setFormData] = useState({
    email: "",
    password: "",
  });

  const [setErrors] = useState([]);

  const handleChange = (e) => {
    console.log("name", e.target.name)
    console.log("value", e.target.value)

    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    fetch("/login", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(formData),
    }).then((res) => {
      if (res.ok) {
        res.json().then((user) => {
          console.log(user);
          setCurrentUser(user);
        });
      } else {
        res.json().then((errors) => {
          console.log(errors);
          // setErrors(errors.errors);
        });
      }
    });
  };

  console.log(formData)
  return (
    <div className="loginMainContainer bgImg" id='login' style={{backgroundImage:`url(https://i.imgur.com/IRTPaI2.jpg)`}}>
      <div className="loginSubContainer">
        <div className="loginContainer">
          <div className="accountView">
            <img src={account} alt="" />
          </div>
          <p style={{ margin: 0, marginBottom: 15, fontSize: 24 }}>Sign In</p>
          <form>

            <div className="inputView">
              <input
                type="text"
                name="email"
                placeholder="Email/Username"
                className="inputStyle"
                value={formData.email}
                onChange={handleChange}
              />
            </div>
            <div className="inputView">
              <input
                type="password"
                name="password"
                placeholder="Password"
                className="inputStyle"
                value={formData.password}
                onChange={handleChange}
              />
            </div>
          </form>
          <div className="loginBtnView" onClick={handleSubmit}>
            <button className="loginBtn" onClick={handleSubmit}>Login</button>
          </div>
          <div className="rememberView">
            <p style={{ margin: 0 }}>
              Don't have an account?{" "}
              <a onClick={onSignUp} style={{ color: "#3e87f2", textDecoration: "none",cursor:"pointer" }}>
                SignUp
              </a>
            </p>          </div>
        </div>
      </div>
    </div>
  )
}

export default Login;