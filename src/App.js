//> React
// Contains all the functionality necessary to define React components
import React from "react";
// DOM bindings for React Router
import { BrowserRouter as Router } from "react-router-dom";

//> Additional
// Analytics
import ReactGA from "react-ga";

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

	componentDidMount = () => {
		// Create custom user id for tracking
		let userId = localStorage.getItem("userId");
		if (!userId) {
			const sha256 = require("js-sha256");
			userId = sha256.create();
			localStorage.setItem("userId", userId);
		}

		// Check cookies
		let cookie = localStorage.getItem("cookie");
		if (cookie) {
			cookie = JSON.parse(cookie);
			if (cookie.marketing || cookie.statistics) {
				if (
					window.location.hostname !== "localhost" &&
					window.location.hostname !== "127.0.0.1"
				) {
					// Google Analytics
					ReactGA.initialize("UA-148740308-4", {
						gaOptions: {
							userId,
						},
					});
					this.registerPageView();
				}
			}
		}
	};

	registerPageView = () => {
		ReactGA.pageview(window.location.pathname + window.location.search);
	};

	registerAnalysisButton = () => {
		ReactGA.event({
			category: "Analysis",
			action: "Analysis button pressed",
		});
	};

	registerAnalysisStart = () => {
		ReactGA.event({
			category: "Analysis",
			action: "Analysis input started",
		});
	};

	registerAnalysisSend = () => {
		ReactGA.event({
			category: "Analysis",
			action: "Analysis requested",
		});
	};

	registerContactStart = () => {
		ReactGA.event({
			category: "Contact",
			action: "Contact input started",
		});
	};

	registerContactSend = () => {
		ReactGA.event({
			category: "Contact",
			action: "Contact sent",
		});
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
								<Routes
									globalProps={{ ...this.state }}
									globalFunctions={{
										googleAnalytics: {
											registerContactStart: this.registerContactStart,
                      registerContactSend: this.registerContactSend,
                      registerAnalysisStart: this.registerAnalysisStart,
                      registerAnalysisSend: this.registerAnalysisSend,
                      registerAnalysisButton: this.registerAnalysisButton,
										},
									}}
								/>
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
