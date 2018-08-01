import React, { Fragment } from "react";
import NavMenu from "../../components/NavMenu";

const DefaultLayout = props => (
  <Fragment>
    <header>
      header
      <NavMenu />
    </header>
    <main>{props.children}</main>
    <footer>footer</footer>
  </Fragment>
);

export default DefaultLayout;
