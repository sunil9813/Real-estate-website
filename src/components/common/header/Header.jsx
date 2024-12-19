import React, { useState } from "react";
import "./header.css"; // Ensure this file contains the correct styles
import { nav } from "../../data/Data";
import { Link, useNavigate } from "react-router-dom";

const Header = () => {
  const [navList, setNavList] = useState(false);
  const [showDropdown, setShowDropdown] = useState(false); // State for dropdown visibility
  const navigate = useNavigate();

  return (
    <>
      <header>
        <div className="container flex">
          {/* Logo */}
          <div className="logo">
            <img src="./images/logo.png" alt="Logo" />
          </div>

          {/* Toggle Menu Button (for mobile view) */}
          <div className="toggle">
            <button onClick={() => setNavList(!navList)}>
              {navList ? (
                <i className="fa fa-times"></i> // Close icon for mobile menu
              ) : (
                <i className="fa fa-bars"></i> // Open icon for mobile menu
              )}
            </button>
          </div>

          {/* Navigation */}
          <div className="nav">
            <ul className={navList ? "small" : "flex"}>
              {nav.map((list, index) => (
                <li key={index}>
                  <Link to={list.path}>{list.text}</Link>
                </li>
              ))}
              {/* Add "Get In" and "Log Out" buttons to the sidebar */}
              {navList && (
                <>
                  <li>
                    <button
                      className="btn1"
                      onClick={() => setShowDropdown(!showDropdown)}
                    >
                      Get In
                    </button>
                  </li>
                  <li>
                    <button className="btn1">Log out</button>
                  </li>
                </>
              )}
            </ul>
          </div>

          {/* Buttons */}
          <div className="button flex" style={{ gap: 5, position: "relative" }}>
            {/* Get In Button */}
            <button
              className="btn1"
              onClick={() => setShowDropdown(!showDropdown)}
            >
              <i className="fa fa-sign-out"></i> Get In
            </button>

            {/* Dropdown Menu */}
            {showDropdown && (
              <div className="dropdown-menu">
                <button
                  className="dropdown-item"
                  onClick={() => {
                    setShowDropdown(false);
                    navigate("/signup"); // Navigate to Sign Up page
                  }}
                >
                  Sign Up
                </button>
                <button
                  className="dropdown-item"
                  onClick={() => {
                    setShowDropdown(false);
                    navigate("/login"); // Navigate to Login page
                  }}
                >
                  Log In
                </button>
              </div>
            )}

            {/* Log Out Button */}
            <button className="btn1">
              <i className="fa fa-sign-out"></i> Log out
            </button>
          </div>
        </div>
      </header>
    </>
  );
};

export default Header;