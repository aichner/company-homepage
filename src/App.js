//> React
// Contains all the functionality necessary to define React components
import React from "react";
// DOM bindings for React Router
import { BrowserRouter as Router } from "react-router-dom";

//> Components
/**
 * Footer: Global Footer
 * Navbar: Global navigation bar
 */
import { Footer, Navbar } from "./components/molecules";
import { DevelopmentPage } from "./components/pages";
import { ScrollToTop } from "./components/atoms";
// Routes
import Routes from "./Routes";

//> Configuration
// Is the homepage ready to launch?
const isLive = true;

class App extends React.Component {
  state = {
    darkMode: false,
  };

  render() {
    if (
      window.location.hostname === "localhost" ||
      window.location.hostname === "127.0.0.1" ||
      isLive
    ) {
      return (
        <Router basename={process.env.PUBLIC_URL}>
          <ScrollToTop>
            <div className="flyout">
              <Navbar darkMode={this.state.darkMode} />
              <main>
                <Routes globalProps={{ ...this.state }} />
              </main>
              <Footer darkMode={this.state.darkMode} />
            </div>
          </ScrollToTop>
        </Router>
      );
    } else {
      return <DevelopmentPage />;
    }
  }
}

export default App;

/**
 * SPDX-License-Identifier: (EUPL-1.2)
 * Copyright © 2019-2020 Werbeagentur Christian Aichner
 */
