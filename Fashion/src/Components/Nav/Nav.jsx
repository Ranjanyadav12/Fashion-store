import React from "react";
import "./Nav.css";
import {
  FiSearch,
  FiUser,
  FiShoppingBag,
} from "react-icons/fi";

function Nav() {
  return (
    <nav className="navbar">
      {/* Logo */}
      <div className="logo">
        <div className="logo-icon">✕</div>
        <h2>URBAN NOMAD</h2>
      </div>

      {/* Menu */}
      <ul className="nav-links">
        <li>Home</li>
        <li>Shop</li>
        <li>New Arrival</li>
        <li>Collections</li>
        <li>Sale</li>
        <li>About Us</li>
      </ul>

      {/* Icons */}
      <div className="nav-icons">
        <FiSearch />
        <FiUser />

        <div className="cart">
          <FiShoppingBag />
          
        </div>
      </div>
    </nav>
  );
}

export default Nav;