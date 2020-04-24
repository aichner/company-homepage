//> React
// Contains all the functionality necessary to define React components
import React from "react";
// DOM bindings for React Router
import { Route, Switch } from "react-router-dom";

//> Components
import {
  HomePage,
  MessagePage,
  PrintingPage,
  BrandingPage,
  LocationPage,
} from "./components/pages";

//> MessagePage content
const messagePage = ["about", "privacy"];

class Routes extends React.Component {
  render() {
    const { globalProps } = this.props;

    return (
      <Switch>
        <Route
          exact
          path="/"
          render={(props) => <HomePage {...props} globalProps={globalProps} />}
        />
        <Route
          exact
          path="/printing"
          render={(props) => (
            <PrintingPage {...props} globalProps={globalProps} />
          )}
        />
        <Route
          exact
          path="/location"
          render={(props) => (
            <LocationPage {...props} globalProps={globalProps} />
          )}
        />
        <Route
          exact
          path="/branding"
          render={(props) => (
            <BrandingPage {...props} globalProps={globalProps} />
          )}
        />
        {messagePage.map((page, i) => {
          return (
            <Route
              key={i}
              exact
              path={"/" + page}
              render={(props) => (
                <MessagePage {...props} globalProps={globalProps} />
              )}
            />
          );
        })}
        <Route component={HomePage} />
      </Switch>
    );
  }
}

export default Routes;

/**
 * SPDX-License-Identifier: (EUPL-1.2)
 * Copyright © 2019-2020 Werbeagentur Christian Aichner
 */
