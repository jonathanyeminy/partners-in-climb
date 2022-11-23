import React, { useState, useEffect } from "react";
import account from './account.svg'
import { useNavigate } from "react-router-dom";
import './login.css'

const NewTripForm = ({ formData }) => {
    const navigate = useNavigate()
    const [locations, setLocations] = useState([])
    const [newTripFormData, setNewTripFormData] = useState({
        name: "",
        date: "",
        location_id: null
    })
    const handleChange = (e) => {
        console.log("name", e.target.name)
        console.log("value", e.target.value)
        setNewTripFormData({
            ...newTripFormData,
            [e.target.name]: e.target.value,
        });
    };


    const handleCreateTrip = async (e) => {

        e.preventDefault()
        await fetch("/trips", {
            method: "POST",
            headers: {
                "Content-Type": "application/json",
            },
            body: JSON.stringify(newTripFormData),
        }).then((res) => {
            if (res.ok) {
                res.json((data) => console.log("tripsPlained", data))
            }
            navigate("/")
        })
       
    }

    const getLocations = () => {
        fetch("/locations")
            .then((res) => {
                if (res.ok) {
                    res.json().then((data) => {
                        setLocations(data)
                        console.log("location", data)
                    })
                }
            })
    }
    useEffect(() => {
        getLocations()
    }, [])

    return (
        <div className="loginMainContainer">
            <div className="loginSubContainer">
                <div style={{ display: "flex", justifyContent: "center" }}>
                    <button className="detailBtn" onClick={() => navigate('/')}>Back to Main Page</button>
                </div>
                <div className="loginContainer">
                    <p style={{ margin: 0, marginBottom: 15, fontSize: 24 }}>Plan a new Trip!</p>
                    <form>
                        <div className="inputView">
                            <input
                                type="text"
                                name="name"
                                placeholder="Name Your Trip"
                                className="inputStyle"
                                value={newTripFormData.name}
                                onChange={handleChange}
                            />
                        </div>
                        <div className="inputView">
                            <input
                                type="date"
                                name="date"
                                placeholder="Date"
                                className="inputStyle"
                                value={newTripFormData.date}
                                onChange={handleChange}
                            />
                        </div>
                        <div className="inputView">
                            <select className="inputStyle" name = "location_id"  onChange={handleChange}>
                                <option>Select Location</option>
                                {locations.map((e, i) => {
                                    return (
                                        <option 
                                            key={i}

                                            value={e.id}
                                        >   
                                        {e.name}
                                        </option>
                                    )
                                })}
                            </select>
                        </div>
                    </form>
                    <div className="loginBtnView" onClick={handleCreateTrip}>
                        <button className="loginBtn">Save Trip</button>
                    </div>

                </div>
            </div>
        </div>
    )
}
export default NewTripForm