import React, { useEffect, useState } from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import { NavLink, useNavigate } from "react-router-dom";
import './MainPage.css'
import TripDetails from "./tripDetails";

const MainPage = ({ tripsData, first_name, profilePhoto, signOut }) => {
  const [moreDetails, setMoreDetails] = useState(false)
  const [upcomingTrip, setUpcomingTrip] = useState(true)
  const [previousTrip, setPreviousTrip] = useState(false)
  const navigate = useNavigate()
  const [trips, setTrips] = useState([])
  const showDetails = (e) => {
    setMoreDetails(e)
    console.log("details", e)
  }
  const today = new Date()
  const upcomingTrips = trips.filter((val) => {
    if (new Date(val.attributes.date) > today) return val
  })
  const previousTrips = trips.filter((val) => {
    if (new Date(val.attributes.date) < today) return val
  })
  const fetchTrips = () => {
    fetch("/trips")
      .then((res) => res.json())
      .then((data) => {
        console.log("trips data", data.data);
        setTrips([...data.data]);

      });
  };
  useEffect(() => {
    fetchTrips();
  }, [])

  return (
    <div>
      <div className="navBar">
        <div style={{ display: "flex", alignItems: "center" }}>
          <img src={profilePhoto}
            className="profilePic" alt="profile" />
          <h2 style={{ margin: 0, marginLeft: 15 }}>Welcome, {first_name}</h2>
        </div>
        <NavLink to="/new-trip-form" className="tripsBtn">Plan a new trip</NavLink>
        <button onClick={()=>{
          navigate('/my-upcoming-trips')
          localStorage.setItem("firstName", first_name);
        }} className="tripsBtn">My upcoming trips</button>
        <NavLink className="editBtn" to="/edit-profile-form">Edit Profile</NavLink>
        <a className="signOutBtn" onClick={signOut}>Sign Out</a>
      </div>
      <div style={{ paddingRight: 40, paddingLeft: 40, backgroundImage: moreDetails && `url(${moreDetails?.attributes.location.image_url})` }}
        className={`${moreDetails && "bgImg"}`}>
        <div style={{ display: "flex", alignItems: "center" }}>
          <h3>{moreDetails ? "Trip Details" : upcomingTrip ? "Upcoming Trips" : "Previous Trips"}</h3>
         {!moreDetails && <button className="detailBtn" onClick={() =>{
            if(upcomingTrip){
              setUpcomingTrip(false)
              setPreviousTrip(true)
            } else{
              setUpcomingTrip(true)
              setPreviousTrip(false)
            }
          }}> {upcomingTrip ? "Previous Trips" : "Upcoming Trips"}</button>}
          {moreDetails && <div style={{ display: "flex", justifyContent: "center" }}>
            <button className="detailBtn" onClick={() => setMoreDetails(false)}> Back to Main Page</button>
          </div>}
        </div>
        {!moreDetails && upcomingTrip && upcomingTrips.map((e, i) => {
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
                <button className="detailBtn" onClick={() => showDetails(e)}>More details</button>
              </div>
            </div>
          )
        })
        }
        {!moreDetails && previousTrip && previousTrips.map((e, i) => {
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
                <button className="detailBtn" onClick={() => showDetails(e)}>More details</button>
              </div>
            </div>
          )
        })
        }
        {moreDetails && <TripDetails first_name={first_name} tripDetails={moreDetails} tripId={moreDetails.id} />}
      </div>
    </div>
  );
};

export default MainPage;
