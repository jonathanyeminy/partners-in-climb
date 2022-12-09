import React, { useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";
import TripDetails from "./tripDetails";

const MyUpcomingTrips = () => {
    const navigate = useNavigate()
    const [moreDetails, setMoreDetails] = useState(false)
    const [firstName, setFirstName] = useState("")
    const [trips, setTrips] = useState([])
    let today = new Date()
    const upcomingTrips = trips.filter((val) => {
        if (new Date(val.attributes.date) > today) return val
      })
      const myUpcomingTrip = upcomingTrips.filter((val)=>{
        if(val.attributes.climber_trips.map((e)=>e.short_name===firstName)) return val
      })
    const showMoreDetails = (e)=>{
        setMoreDetails(e)
    }
    const fetchTrips = () => {
        fetch("/trips")
            .then((res) => res.json())
            .then((data) => {
                console.log("trips data", data.data);
                setTrips([...data.data]);
                const name = localStorage.getItem("firstName")
                setFirstName(name)
            });
    };
    useEffect(() => {
        fetchTrips();
    }, [])
    return (
        <div  className={`${moreDetails && "bgImg"}`} style={{backgroundImage: moreDetails && `url(${moreDetails?.attributes.location.image_url})`}}>
            <div style={{ display: "flex", alignItems: "center" }}>
                <h3>My Upcoming Trips</h3>
                <button className="detailBtn" onClick={() => {
                    navigate("/")
                }}>Back To Main Page</button>
            </div >
            {!moreDetails && myUpcomingTrip.map((e, i) => {
                return (
                    <div key={i} className="tripCards">
                        <div style={{ display: "flex", justifyContent: "space-between" }}>
                            <div>
                                <p>
                                    Date: <span>{e.attributes.date}</span>
                                </p>
                                <p style={{ fontSize: 22 }}>
                                    {e.attributes.name}
                                </p>
                                <p>Organizer: {e.attributes.organizer.short_name}
                                </p>
                                <p style={{ margin: 0 }}>
                                    Location: <span>{e.attributes.location.name}</span>
                                </p>
                            </div>
                        </div>
                        <div style={{ display: "flex", justifyContent: "center" }}>
                            <button className="detailBtn" onClick={() => showMoreDetails(e)}>More details</button>
                        </div>
                    </div>
                )
            })
            }
             {moreDetails && <TripDetails first_name={firstName} tripDetails={moreDetails} tripId={moreDetails.id} />}
        </div >
    )
}

export default MyUpcomingTrips