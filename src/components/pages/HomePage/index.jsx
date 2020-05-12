//> React
// Contains all the functionality necessary to define React components
import React from "react";

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
} from "../../organisms/sections";

//> CSS
// All organisms use their own scss implementation

class HomePage extends React.Component {
  state = {};

  render() {
    const { globalProps, globalFunctions } = this.props;

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
          <Services info={this.state.info} />
          <Trusted />
          <CallToAction googleAnalytics={globalFunctions.googleAnalytics} />
          <ContactForm googleAnalytics={globalFunctions.googleAnalytics} />
        </>
      );
    } else {
      return null;
    }
  }
}

export default HomePage;

/**
 * SPDX-License-Identifier: (EUPL-1.2)
 * Copyright © 2019-2020 Werbeagentur Christian Aichner
 */
