import React, { useEffect } from "react";
import { useState } from "react";
import { Link } from "react-router-dom";
import { GiLongAntennaeBug } from "react-icons/gi";
import { FaBars, FaTimes } from "react-icons/fa";
import { Button } from "./Button";

import { IconContext } from "react-icons/lib";

import "./Navbar.css";

function Navbar() {
  const [click, setClick] = useState(false);
  const [button, setButton] = useState(true);

  const handleClick = () => setClick(!click);
  const closeMobileMenu = () => setClick(false);

  const showButton = () => {
    if (window.innerWidth <= 960) {
      setButton(false);
    } else {
      setButton(true);
    }
  };

  useEffect(() => {
    showButton();
  }, []);

  window.addEventListener("resize", showButton);
  return (
    <>
      <IconContext.Provider value={{ color: `#fff` }}>
        <div className="navbar">
          <div className="navbar-container container">
            <Link className="navbar-logo" to="/" onClick={closeMobileMenu}>
              <GiLongAntennaeBug className="navbar-icon" />
              EXTERMINATORS
            </Link>
            <div className="menu-icon" onClick={handleClick}>
              {click ? <FaTimes /> : <FaBars />}
            </div>
            <ul className={click ? "nav-menu active" : "nav-menu"}>
              <li className="nav-items">
                <Link className="nav-links" to="/"  onClick={closeMobileMenu}>
                  Home
                </Link>
              </li>
              <li className="nav-items">
                <Link className="nav-links" to="/"  onClick={closeMobileMenu}>
                  Services
                </Link>
              </li>
              <li className="nav-items">
                <Link className="nav-links" to="/"  onClick={closeMobileMenu}>
                  Products
                </Link>
              </li>
              <li className="nav-button">
                {button ? (
                  <Link className="btn-link" to="/sign-up" >
                    <Button buttonStyle="btn-outline">Contact Us</Button>
                  </Link>
                ) : (
                  <Link className="btn-link" to="/sign-up"  onClick={closeMobileMenu}>
                    <Button buttonStyle="btn-outline" buttonSize="btn-mobile">
                      Contact Us
                    </Button>
                  </Link>
                )}
              </li>
            </ul>
          </div>
        </div>
      </IconContext.Provider>
    </>
  );
}

export default Navbar;
