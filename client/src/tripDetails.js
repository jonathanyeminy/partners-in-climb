import React, { useState } from "react";
import BringGear from "./bringGearForm";
import './tripDetails.css'
import './login.css'
const TripDetails = ({ tripDetails, tripId, first_name }) => {
    const [tripsData, setTripData] = useState(tripDetails)
    const [gearForm, setGearForm] = useState(false)
    const [imageFlag, setImageFlag] = useState(false)
    const [image, setImage] = useState("")

    function addClimberToTrip() {
        let url = `add-climber-to-trip/`
        let filter = tripsData.attributes.climber_trips.find((val) => val.short_name === first_name)
        console.log("filter", tripsData.attributes.climber_trips)
        if (!filter) {

            fetch(url, {
                method: "PATCH",
                headers: {
                    "Content-Type": "application/json",
                },
                body: JSON.stringify({ "id": tripId }),
            }).then((res) => {
                if (res.ok) {
                    res.json().then((data) => {
                        setTripData(data.data)
                        alert("Welcome!")
                    });
                } else {
                    res.json().then((errors) => {
                        console.log(errors);
                        // setErrors(errors.errors);
                    });
                }
            }).catch((err) => {
                console.log(err)
            });
        } else {
            alert("You are already on this trip!")
        }
    }   

    const uploadImages = () =>{
        debugger
        fetch("/trip_images", {
            method: "POST",
            headers: {
                "Content-Type": "application/json",
            },
            body: JSON.stringify({ "image_url": image, trip_id: tripId }),
        }).then((res) => {
            if (res.ok) {
                res.json().then((data) => {
                    setTripData(data.data)
                    alert("Welcome!")
                });
            } else {
                res.json().then((errors) => {
                    console.log(errors);
                    // setErrors(errors.errors);
                });
            }
        }).catch((err) => {
            console.log(err)
        });
    }

    return (
        <div>
            {gearForm ? <BringGear tripId={tripId} addGear={(user) => {
                
                setTripData(user.data)
                setGearForm(false)
            }} />
                : imageFlag ?
                     <div className="loginContainer" style={{ width: 500}}>
                        <div className="inputView">
                            <input className="inputStyle" type="text" onChange={(e) => setImage(e.target.value)} placeholder="Url"/>
                        </div>
                        <button className="detailBtn" onClick={uploadImages} >Uplaod Images</button>
                    
                    </div> : <div className="detailsContainer">
                    <p>Location: <span>{tripsData.attributes.location.name} </span></p>
                    <p>Date: <span>{tripsData.attributes.date}</span></p>
                    <p>Address: <span>{tripsData.attributes.location.address}</span></p>
                    <p>Trippers: {tripsData.attributes.climber_trips.map((e, i) => {
                        return (
                            <span key={i}>{e.short_name} {i < tripsData.attributes.climber_trips.length - 1 && ", "}</span>
                        )
                    })
                    }</p>
                    <p style={{ margin: 0 }}>Gear:</p>
                    <p style={{ paddingLeft: 50, margin: 0 }}>{tripsData.attributes.gears.map((e, i) => {
                        return (
                            <li>
                            <span key={i}>{e.owner} is bringing {e.quantity} {e.name}<br /> </span>
                            </li>
                        )

                    })}
                    </p>
                    <div style={{ display: "flex", justifyContent: "center" }}>
                        <button className="detailBtn" onClick={() => setImageFlag(true)} >Add Images</button>
                        <button className="detailBtn" onClick={addClimberToTrip} >Join Trip</button>
                        <button className="detailBtn" onClick={() => setGearForm(true)} >Bring Gear</button>
                    </div>
                    <href className="leaveTrip" >
                        Leave Trip
                    </href>

                </div>}
        </div>
    )
}

export default TripDetails