import React from "react";
import { NavLink } from "react-router-dom";

function Header({ searchItems, searchInput, setShow, setCurrentUser }) {
  const logout = () => {
    fetch("/logout", {
      method: "DELETE",
    }).then(setCurrentUser(null));
  };

  return (
    <header className="headerbackground">
      <nav>
        <div className="navbar">
          <NavLink exact className="button" to="/">
            Partners In Climb
          </NavLink>
          {/* <NavLink exact className="button" to="/listings">
            Shop
          </NavLink> */}
          <NavLink exact className="button" to="/trips/new">
            Plan a Trip
          </NavLink>
          {/* <NavLink exact className="button" to="/my_trips">
            My Trips
          </NavLink> */}
          <NavLink exact className="button" onClick={logout} to="/">
            Logout
          </NavLink>
          {/* <div className="cart" onClick={() => setShow(false)}>
          <span>
            <i class="fas-fa-cart-plus"></i>
          </span>
          <span>{size}</span>
          </div>*/}
        </div>
      </nav>
    </header>
  );
}

export default Header;
