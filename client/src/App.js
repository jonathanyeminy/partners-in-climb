import "./App.css";
import React, { useEffect, useState } from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import PageLogin from "./PageLogin";
// import MainPage from "./MainPage";
import Header from "./Header";
// import MyItems from "./MyItems";
// import ListingsForm from "./ListingsForm";
// import ListingDetails from "./ListingDetails";

function App() {
  const [currentUser, setCurrentUser] = useState(null);
  const [errors, setErrors] = useState(null);
  const [trips, setTrips] = useState([]);
  const [searchInput, setSearchInput] = useState("");
  const [show, setShow] = useState(true);

  // on component mount, loads user from stored session if there is one
  useEffect(() => {
    fetch("/me").then((res) => {
      if (res.ok) {
        res
          .json()
          .then((email) => setCurrentUser(email))
          .then(fetchTrips());
      } else {
        setErrors(res);
      }
    });
  }, []);

  const fetchTrips = () => {
    fetch("/trips")
      .then((res) => res.json())
      .then((data) => {
        console.log(data);
        setTrips(data);
      });
  };

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
          <Route exact path = "/" 
          element = { <PageLogin setCurrentUser={setCurrentUser} />} >
            
          </Route>
      </Routes>
   </BrowserRouter>
  );
}

export default App;

// {/* <Router>
// <div className="">
//   {currentUser && (
//     <Header setCurrentUser={setCurrentUser} />
//   )}
//   <Routes>
//     <Route exact path="/">
//       {/* if user is logged in, show the main page, otherwise, show the login forms */}
//       {
//       // currentUser ? (
//       //   <MainPage
//       //     currentUser={currentUser}
//       //     setCurrentUser={setCurrentUser}
//       //     setTrips={setTrips}
//       //     trips={trips}
//       //     searchInput={searchInput}
//       //     setSearchInput={setSearchInput}
//       //     searchTrips={searchTrips}
//       //     handleClick={handleClick}
//       //     setShow={setShow}
//       //     deleteById={deleteById}
//       //   />
//       // ) : 
//       (
//         <PageLogin setCurrentUser={setCurrentUser} />
//       )}
//     </Route>
//   </Routes>
// </div>
// </Router> */}