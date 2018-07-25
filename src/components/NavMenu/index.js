import React from "react";
import { NavLink } from "react-router-dom";
import "./navMenu.scss"

const NavMenu = () => {
  return (
    <nav className="nav-menu">
      <NavLink exact to="/" className="nav-link" activeClassName="nav-link_active">home</NavLink>
      <NavLink exact to="/about" className="nav-link" activeClassName="nav-link_active">about</NavLink>
    </nav>
  );
}

export default NavMenu;
