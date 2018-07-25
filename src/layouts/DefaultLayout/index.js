import React, { Fragment } from "react";
import { Route } from "react-router-dom";

const DefaultLayout = ({ component: Component, ...rest }) => {
  return (
    <Route
      {...rest}
      render={props => {
        return (
          <Fragment>
            <header>header</header>
            <main>
              <Component {...props} />
            </main>
            <footer>footer</footer>
          </Fragment>
        );
      }}
    />
  );
}

export default DefaultLayout;
