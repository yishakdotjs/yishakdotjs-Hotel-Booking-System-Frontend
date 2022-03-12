import React, { useEffect, useRef } from "react";
import { Link } from "react-router-dom";
import { useStateValue } from "../../context/StateProvider";
import { actionTypes } from "../../context/reducer";

import "./Navbar.css";

function Navbar(props) {
  const [state, dispatch] = useStateValue();

  var mobileMenu = useRef();

  function toggleNav() {
    dispatch({
      type: actionTypes.TOGGLE_NAV,
      navToggled: !state.navToggled,
    });
  }

  useEffect(() => {
    if (state.navToggled === true) {
      mobileMenu.current.classList.add("toggle-nav");
    } else if (state.navToggled === false) {
      mobileMenu.current.classList.remove("toggle-nav");
    }
  }, [state.navToggled]);

  return (
    <div>
      <div className="header__navbar shadow-sm d-flex align-items-center justify-content-center">
        <div className="container d-flex align-items-center justify-content-between">
          <Link to="/" onClick={props.scrollToHome}>
            <img
              src="http://hruyan.com/assets/images/logo.png"
              alt="Hotel Logo"
              className="header__navbar__logo"
            />
          </Link>
          <div className="d-flex align-items-center justify-content-between">
            <ul className="header__navbar__links d-flex m-0" ref={mobileMenu}>
              <li className="list-unstyled d-flex align-items-center justify-content-center">
                <Link to="/" className="nav-link" onClick={props.scrollToHome}>
                  Home
                </Link>
              </li>
              <li className="list-unstyled d-flex align-items-center justify-content-center">
                <Link
                  to=""
                  onClick={props.scrollToGallery}
                  className="nav-link"
                >
                  Gallery
                </Link>
              </li>
              <li className="list-unstyled d-flex align-items-center justify-content-center">
                <Link to="" onClick={props.scrollToRooms} className="nav-link">
                  Rooms
                </Link>
              </li>
              <li className="list-unstyled d-flex align-items-center justify-content-center">
                <Link
                  to=""
                  onClick={props.scrollToAccommodations}
                  className="nav-link"
                >
                  Accommodations
                </Link>
              </li>
              <li className="list-unstyled d-flex align-items-center justify-content-center">
                <Link to="" onClick={props.scrollToAbout} className="nav-link">
                  About Us
                </Link>
              </li>
              <li className="list-unstyled d-flex align-items-center justify-content-center">
                <Link
                  to=""
                  onClick={props.scrollToContact}
                  className="nav-link"
                >
                  Contact Us
                </Link>
              </li>
              <li className="list-unstyled d-flex align-items-center justify-content-center">
                <Link
                  to=""
                  onClick={props.scrollToBookNow}
                  className="nav-link button"
                  style={{ color: "#fff" }}
                >
                  Book Now
                </Link>
              </li>
            </ul>
            <div className="burger" onClick={toggleNav}>
              <div></div>
              <div></div>
              <div></div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Navbar;
