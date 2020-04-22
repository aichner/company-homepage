//> React
// Contains all the functionality necessary to define React components
import React from "react";
// DOM bindings for React Router
import { Route, Switch } from "react-router-dom";

//> Components
/**
 * HomePage: A basic template page
 */
import {
  HomePage,
  MessagePage,
  LoginPage,
  ProfilePage,
  PrintingPage,
  BrandingPage,
} from "./components/pages";

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
          path="/login"
          render={(props) => <LoginPage {...props} globalProps={globalProps} />}
        />
        <Route
          exact
          path="/profile"
          render={(props) => (
            <ProfilePage {...props} globalProps={globalProps} />
          )}
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
          path="/branding"
          render={(props) => (
            <BrandingPage {...props} globalProps={globalProps} />
          )}
        />
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