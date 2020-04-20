//> React
// Contains all the functionality necessary to define React components
import React from "react";

//> Components
// Sections
import { Hero } from "../../organisms/sections";

//> CSS
// All organisms use their own scss implementation

class HomePage extends React.Component {
  componentDidMount = () => {
    document.title = "Ihr verlässlicher Allround-Partner";
  };

  render() {
    const { globalProps } = this.props;

    return (
      <>
        <Hero darkMode={globalProps.darkMode} />
      </>
    );
  }
}

export default HomePage;

/**
 * SPDX-License-Identifier: (EUPL-1.2)
 * Copyright © 2019-2020 Werbeagentur Christian Aichner
 */
