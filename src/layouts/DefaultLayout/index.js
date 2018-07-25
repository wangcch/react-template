import React, { Fragment } from "react";
// import { Route } from "react-router-dom";
import NavMenu from "../../components/NavMenu";

const DefaultLayout = ({ component: Component, ...rest }) => {
  return (
    <Fragment>
      <header>
        header
        <NavMenu />
      </header>
      <main>
        <Component {...rest} />
      </main>
      <footer>footer</footer>
    </Fragment>
  );
};

export default DefaultLayout;
