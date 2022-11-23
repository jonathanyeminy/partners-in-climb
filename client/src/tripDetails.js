import React, { useState } from "react";
import BringGear from "./bringGearForm";
import './tripDetails.css'

const TripDetails = ({ tripDetails, tripId, first_name }) => {
    const [tripsData, setTripData] = useState(tripDetails)
    const [gearForm, setGearForm] = useState(false)
    function addClimberToTrip() {
        let url = `add-climber-to-trip/`
        let filter = tripsData.climber_trips.find((val) => val.short_name === first_name)
        console.log("filter", tripsData.climber_trips)
        if (!filter) {

            fetch(url, {
                method: "PATCH",
                headers: {
                    "Content-Type": "application/json",
                },
                body: JSON.stringify({ "id": tripId }),
            }).then((res) => {
                if (res.ok) {
                    res.json().then((user) => {
                        console.log("dsadsa", user)
                        setTripData(user)
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
    let abc = tripsData.climber_trips.map((val) => console.log(val.short_name))
    console.log('detail', abc)
    return (
        <div>
            {gearForm ? <BringGear tripId={tripId} addGear={(user) => {
                setTripData(user)
                setGearForm(false)
            }} />
                : <div className="detailsContainer">
                    <p>Location: <span>{tripsData.location.name} </span></p>
                    <p>Date: <span>{tripsData.date}</span></p>
                    <p>Address: <span>{tripsData.location.address}</span></p>
                    <p>Trippers: {tripsData.climber_trips.map((e, i) => {
                        return (
                            <span key={i}>{e.short_name} {i < tripsData.climber_trips.length - 1 && ", "}</span>
                        )
                    })
                    }</p>
                    <p style={{ margin: 0 }}>Gear:</p>
                    <p style={{ paddingLeft: 50, margin: 0 }}>{tripsData.gears.map((e, i) => {
                        return (
                            <span key={i}>{e.owner} is bringing {e.quantity} {e.name}<br /> </span>
                        )

                    })}
                    </p>
                    <div style={{ display: "flex", justifyContent: "center" }}>
                        <button className="detailBtn" onClick={addClimberToTrip} >Join Trip</button>
                        <button className="detailBtn" onClick={() => setGearForm(true)} >Bring Gear</button>
                    </div>
                </div>}
        </div>
    )
}

export default TripDetails