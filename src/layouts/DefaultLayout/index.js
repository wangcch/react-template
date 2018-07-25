import React, { Fragment } from "react";
import { Route } from "react-router-dom";
import NavMenu from "../../components/NavMenu";

const DefaultLayout = ({ component: Component, ...rest }) => {
  return (
    <Route
      {...rest}
      render={props => {
        return (
          <Fragment>
            <header>
              header
              <NavMenu />
            </header>
            <main>
              <Component {...props} />
            </main>
            <footer>footer</footer>
          </Fragment>
        );
      }}
    />
  );
};

export default DefaultLayout;
