import "./App.css";
import React, { useEffect, useState } from "react";
import { BrowserRouter, Routes, Route, Router } from "react-router-dom";
import PageLogin from "./PageLogin";
import EditProfileForm from "./EditProfileForm";
import NewTripForm from "./NewTripForm";
// import MainPage from "./MainPage";
import Header from "./Header";
import MainPage from "./MainPage";
// import MyItems from "./MyItems";
// import ListingsForm from "./ListingsForm";
// import ListingDetails from "./ListingDetails";

function App() {
  const [currentUser, setCurrentUser] = useState(null);
  const [errors, setErrors] = useState(null);
  const [trips, setTrips] = useState([]);
  const [searchInput, setSearchInput] = useState("");
  const [show, setShow] = useState(true);
console.log("data",currentUser)
  // on component mount, loads user from stored session if there is one
  useEffect(() => {
    fetch("/me").then((res) => {
      if (res.ok) {
        res
          .json()
          .then((data) => {setCurrentUser(data)
          console.log(data)
          })
          .then();
      } else {
        setErrors(res);
      }
    });
  }, []);

  const signOut = () => {
    fetch("/logout", {
      method: "DELETE",
      headers: {
        "Content-Type": "application/json"
      }
    }).then(() => {setCurrentUser(false)})
    .catch((err) => console.log(err))
  }

  const handleAddTrip = (trip) => {
    setTrips([...trips, trip])
  }

  function deleteById(id) {
    const filteredTrips = trips.filter((trip) => trip.id !== id);
    setTrips(filteredTrips);
  }

  function searchItems(type) {
    setSearchInput(type);
  }

  return (
    <BrowserRouter>
      <Routes>
        <Route exact path="/" element={currentUser ? <MainPage profilePhoto={currentUser.profile_photo} first_name={currentUser.first_name} tripsData={trips} setCurrentUser={(e)=>setCurrentUser(e)} signOut={signOut}/> : <PageLogin setCurrentUser={(e)=>setCurrentUser(e)} />} />
        <Route exact path="/edit-profile-form" element={<EditProfileForm setCurrentUser={(user)=>setCurrentUser(user)} formData={currentUser}/>} />
        <Route exact path="/new-trip-form" element={<NewTripForm/>} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
