import React, { useState } from "react";
import "./Navbar.css";
import light from "../Assets/light.png";
import dark from "../Assets/dark.png";
import Products from "./Products";
function Navbar() {
  const [mode, setMode] = useState(true);
  const handleChange = () => {
    setMode(!mode);
  };
  return (
    <>
      <div
        className={
          mode === true ? "navabar-container" : "navabar-container dark-navbar"
        }
      >
        <div className="logo">Logo</div>
        <div className="content">
          <ul className="ul">
            <li>Home</li>
            <li>About</li>
            <li>Contact</li>
          </ul>
        </div>
        <div className="light-dark">
          <img
            src={mode === true ? dark : light}
            onClick={() => {
              handleChange();
            }}
            alt="light"
          />
        </div>
      </div>
      <div className={mode === true ? "body-content" : "body-content dark"}>
        <h2>{mode === true ? "Light" : "Dark"} Mode</h2>
        <Products />
      </div>
    </>
  );
}

export default Navbar;
