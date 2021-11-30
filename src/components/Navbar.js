import React from "react";
import { useState } from "react";
import { Link } from "react-router-dom";
import { GiLongAntennaeBug } from "react-icons/gi";
import { FaBars, FaTimes } from "react-icons/fa";

function Navbar() {
  const [click, setClick] = useState(false);
  const [button, setButton] = useState(false);

  const handleClick = () => setClick(!click);
  return (
    <>
      <div className="navbar">
        <div className="navbar-container container">
          <Link className="navbar-logo" to="/">
            <GiLongAntennaeBug />
            EXTERMINATORS
          </Link>
          <div className="menu-icon" onClick={handleClick}>
            {click ? <FaTimes /> : <FaBars />}
          </div>
          <ul className={click ? "nav-menu active" : "nav-menu"}>
            <li className="nav-items">
              <Link className="nav-links" to="/">
                Home
              </Link>
            </li>
            <li className="nav-items">
              <Link className="nav-links" to="/">
                Services
              </Link>
            </li>
            <li className="nav-items">
              <Link className="nav-links" to="/">
                Products
              </Link>
            </li>
            <li className="nav-button">
              {button ? (
                <Link className="btn-link" to="/sign-up">
                  <Button buttonStyle="btn-outline">SIGN UP</Button>
                </Link>
              ) : (
                <Link className="btn-link" to="/sign-up"><Button buttonStyle="btn-outline" buttonSize="btn-mobile">SIGN UP</Button></Link>
              )}
            </li>
          </ul>
        </div>
      </div>
    </>
  );
}

export default Navbar;
