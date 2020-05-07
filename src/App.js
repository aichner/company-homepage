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
import { Footer, Navbar, CookieModal } from "./components/molecules";
import { DevelopmentPage } from "./components/pages";
import { ScrollToTop } from "./components/atoms";
// Routes
import Routes from "./Routes";

// Check if dark or light mode
function getMode() {
  let mode = localStorage.getItem("mode");
  if (mode !== null) {
    return JSON.parse(mode);
  } else {
    // Set default
    localStorage.setItem("mode", false);
    return false;
  }
}

// Save the mode
const mode = getMode();

//> Configuration
// Is the homepage ready to launch?
const isLive = true;

class App extends React.Component {
  state = {
    darkMode: mode,
  };

  // Handler for all child components who can set the mode
  handler = () => {
    // Update mode for all child components and write it to localStorage
    this.setState(
      {
        darkMode: !this.state.darkMode,
      },
      () => localStorage.setItem("mode", this.state.darkMode)
    );
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
              <main className={this.state.darkMode ? "darkMode" : undefined}>
                <Routes globalProps={{ ...this.state }} />
                <CookieModal />
              </main>
              <Footer darkMode={this.state.darkMode} handler={this.handler} />
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
