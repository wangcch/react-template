import React from "react";
import logo from "@/assets/logo.svg";
import "@/components/Logo.scss";
import { Link } from "react-router-dom";

const Logo = () => (
  <div className="logo">
    <Link to="/">
      <div className="logo_content">
        <img src={logo} className="logo_icon" alt="logo" />
        <h1 className="logo_title">React-template</h1>
      </div>
    </Link>
  </div>
);

export default Logo;
