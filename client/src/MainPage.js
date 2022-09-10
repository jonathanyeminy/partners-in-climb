import React, { useEffect, useState } from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";

import Header from "./Header";
import Search from "./Search";
import ListingContainer from "./ListingContainer";
import ListingsForm from "./ListingsForm";
import ListingDetails from "./ListingDetails";

const MainPage = ({
  currentUser,
  setCurrentUser,
  listings,
  setListings,
  searchInput,
  setSearchInput,
  searchItems,
  handleClick,
  deleteById,
}) => {
  //currentUser={currentUser}
//       //     setCurrentUser={setCurrentUser}
//       //     setTrips={setTrips}
//       //     trips={trips}
//       //     searchInput={searchInput}
//       //     setSearchInput={setSearchInput}
//       //     searchTrips={searchTrips}
//       //     handleClick={handleClick}
//       //     setShow={setShow}
//       //     deleteById={deleteById}

  //   const handleChange = (item, d) => {
  //     const ind = cart.indexOf(item);
  //     const arr = cart;
  //     arr[ind].amount += d;

  //     if (arr[ind].amount === 0) arr[ind].amount = 1;
  //     setCart([...arr]);
  //   };

  return (
    <div>
      <Search searchItems={searchItems} searchInput={searchInput} />
      <ListingContainer
        listings={listings}
        deleteById={deleteById}
        handleClick={handleClick}
        searchInput={searchInput}
      />
    </div>
  );
};

export default MainPage;
