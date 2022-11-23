import React, { useState } from "react";
import account from './account.svg'
import './login.css'
import {useNavigate} from 'react-router-dom'

const EditProfileForm = ({ formData,setCurrentUser }) => {
    const navigate = useNavigate()
    const [editFormData, setEditFormData] = useState({
        first_name: formData.first_name,
        last_name: formData.last_name,
        email: formData.email,
        phone: formData.phone,
        profile_photo: formData.profile_photo
    })

    const handleChange = (e) => {
        console.log("name", e.target.name)
        console.log("value", e.target.value)

        setEditFormData({
            ...editFormData,
            [e.target.name]: e.target.value,
        });
    };

    const handleSubmit = (e) => {
        e.preventDefault();
        let url = `climber-update/`
        fetch(url, {
            method: "PATCH",
            headers: {
                "Content-Type": "application/json",
            },
            body: JSON.stringify(editFormData),
        }).then((res) => {
            if (res.ok) {
                res.json().then((user) => {
                    console.log("edituser",user);
                    setCurrentUser(user)
                   navigate('/')                  
                });
            } else {
                res.json().then((errors) => {
                    console.log(errors);
                    // setErrors(errors.errors);
                });
            }
        }).catch((err)=> {
            console.log(err)
        });
    };
    console.log("editFormdata", editFormData)
    return (
        <div className="loginMainContainer">
            <div className="loginSubContainer">
                <div className="loginContainer">
                    <div className="accountView">
                        <img src={account} alt="" />
                    </div>
                    <p style={{ margin: 0, marginBottom: 15, fontSize: 24 }}>Edit Profile</p>
                    <form>
                        <div className="inputView">
                            <input
                                type="text"
                                name="first_name"
                                placeholder="First name"
                                className="inputStyle"
                                value={editFormData.first_name}
                                onChange={handleChange}
                            />
                        </div>
                        <div className="inputView">
                            <input
                                type="text"
                                name="last_name"
                                placeholder="Last name"
                                className="inputStyle"
                                value={editFormData.last_name}
                                onChange={handleChange}
                            />
                        </div>
                        <div className="inputView">
                            <input
                                type="number"
                                name="phone"
                                placeholder="Phone"
                                className="inputStyle"
                                value={editFormData.phone}
                                onChange={handleChange}
                            />
                        </div>
                        {/* <div className="inputView">
                            <input
                                type="text"
                                name="email"
                                placeholder="Email"
                                className="inputStyle"
                                value={editFormData.email}
                                onChange={handleChange}
                            />
                        </div> */}
                        {/* <div className="inputView">
                            <input
                                type="password"
                                name="password"
                                placeholder="Password"
                                className="inputStyle"
                                value={editFormData.password}
                                onChange={handleChange}
                            />
                        </div> */}
                        <div className="inputView">
                            <input
                                type="text"
                                name="profile_photo"
                                placeholder="Profile photo"
                                className="inputStyle"
                                value={editFormData.profile_photo}
                                onChange={handleChange}
                            />
                        </div>
                    </form>
                    <div className="loginBtnView" onClick={handleSubmit}>
                        <button className="loginBtn" onClick={handleSubmit}>Save Changes</button>
                    </div>

                </div>
            </div>
        </div>
    )
}

export default EditProfileForm