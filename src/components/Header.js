import React from "react";
import "@/components/Header.scss";
import Logo from "@/components/Logo";
import NavMenu from "@/components/NavMenu";

const Header = () => (
  <header>
    <Logo />
    <NavMenu />
  </header>
);

export default Header;
