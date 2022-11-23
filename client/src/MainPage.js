import React, { useEffect, useState } from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import { NavLink } from "react-router-dom";
import './MainPage.css'
import TripDetails from "./tripDetails";

const MainPage = ({ tripsData, first_name, profilePhoto, signOut }) => {
  const [moreDetails, setMoreDetails] = useState(false)
  const [trips, setTrips] = useState([])
  const showDetails = (e) => {
    setMoreDetails(e)
    console.log("details", e)
  }

  const fetchTrips = () => {
    fetch("/trips")
      .then((res) => res.json())
      .then((data) => {
        console.log("trips data",data);
        setTrips([...data.data]);
      });
  };

  useEffect(()=> {
    fetchTrips();
  }, [])

  console.log(profilePhoto)
  return (
    <div>
      <div className="navBar">
        <div style={{ display: "flex", alignItems: "center" }}>
          <img src={profilePhoto}
            className="profilePic" alt="profile" />
          <h2 style={{ margin: 0, marginLeft: 15 }}>Welcome, {first_name}</h2>
        </div>
        <NavLink to="/new-trip-form" className="tripsBtn">Plan a new trip</NavLink>
        <button className="tripsBtn">My upcoming trips</button>
        <NavLink className="editBtn" to="/edit-profile-form">Edit Profile</NavLink>
        <a className="signOutBtn" onClick={signOut}>Sign Out</a>
      </div>
      <div style={{ paddingRight: 40, paddingLeft: 40,}}
      className={`${moreDetails && "bgImg"}`}>
        <div style={{ display: "flex", alignItems: "center" }}>
          <h3>{moreDetails ? "Trip Details" : "Upcoming Trips"}</h3>
          {moreDetails && <div style={{ display: "flex", justifyContent: "center" }}>
            <button className="detailBtn" onClick={() => setMoreDetails(false)}> Back to Main Page</button>
          </div>}
        </div>
        {!moreDetails && trips.map((e, i) => {
          return (

            <div key={i} className="tripCards">
              <div style={{ display: "flex", justifyContent: "space-between" }}>
                <div>
                  <p>
                    {e.attributes.name}
                  </p>
                  <p>Organizer :
                    {' '}{e.attributes.organizer.short_name}
                  </p>
                  <p>
                    Date: <span>{e.attributes.date}</span>
                  </p>
                  <p style={{ margin: 0 }}>
                    Location: <span>{e.attributes.location.name}</span>
                  </p>
                </div>
                {/* <div>
                  <p>organizer
                    {e.climber_trips.map((val, ind) => val.organizer &&
                      <span key={ind}>{val.climber_id}</span>)
                    }
                  </p>
                </div> */}
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
