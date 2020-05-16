//> React
// Contains all the functionality necessary to define React components
import React from "react";
// Router DOM bindings
import { withRouter } from "react-router-dom";

//> Additional
// React Helmet
import { Helmet } from "react-helmet";

//> Components
// Sections
import {
  Hero,
  ContactForm,
  Services,
  CallToAction,
  Trusted,
  Reviews,
  Referral,
} from "../../organisms/sections";

//> CSS
// All organisms use their own scss implementation

class HomePage extends React.Component {
  state = { ref: false };

  componentDidMount() {
    if (this.props.location.search) {
      this.setState({ ref: true });
    }
  }

  render() {
    const { globalProps, globalFunctions, location } = this.props;

    if (globalProps) {
      return (
        <>
          <Helmet>
            <title>Werbeagentur Christian Aichner - Ihr Partner</title>
            <meta
              name="description"
              content="Unsere kostenlose Analyse zeigt Dir den aktuellen Stand Deiner gesamten Online-Präsenz und
              liefert individuelle und unkomplizierte Lösungen."
            />
          </Helmet>
          <Hero
            darkMode={globalProps.darkMode}
            googleAnalytics={globalFunctions.googleAnalytics}
          />
          {location?.search && location.search.includes("ref") && (
            <Referral ref={location.search} />
          )}
          <Services info={this.state.info} />
          <Trusted />
          <CallToAction googleAnalytics={globalFunctions.googleAnalytics} />
          <Reviews />
          <ContactForm googleAnalytics={globalFunctions.googleAnalytics} />
        </>
      );
    } else {
      return null;
    }
  }
}

export default withRouter(HomePage);

/**
 * SPDX-License-Identifier: (EUPL-1.2)
 * Copyright © 2019-2020 Werbeagentur Christian Aichner
 */
