import React from "react";
import "@/components/NavMenu.scss";
import { NavLink } from "react-router-dom";
import { getMenuData } from "@/menu.js";

const NavMenu = () => (
  <nav className="navmenu">
    {getMenuData().map((route, index) => (
      <NavLink
        exact={route.exact}
        key={index}
        to={route.path}
        className="nav-link"
        activeClassName="nav-link_active"
      >
        {route.name}
      </NavLink>
    ))}
  </nav>
);

export default NavMenu;
