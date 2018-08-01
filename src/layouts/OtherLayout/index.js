import React, { Fragment } from "react";
import NavMenu from "../../components/NavMenu";

const OtherLayout = props => (
  <Fragment>
    <header>
      other layout
      <NavMenu />
    </header>
    <main>{props.children}</main>
  </Fragment>
);

export default OtherLayout;
