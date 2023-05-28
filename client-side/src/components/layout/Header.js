
import React from "react";
import { Link } from "react-router-dom"

export const Header = () => {
  return (
    <div>
      <header>
        <ul className="navbar">
          <li className="nav-item">
            <Link to={"/"}>Home</Link>
          </li>
          <li className="nav-item">
            <Link to={"/AboutPage"}>About</Link>
          </li>
          <li className="nav-item">
            <Link to={"/ServicePage"}>Services</Link>
          </li>
          <li className="nav-item">
            <Link to={"/ContactPage"}>Contact</Link>
          </li>
        </ul>
      </header>
    </div>
  );
};
