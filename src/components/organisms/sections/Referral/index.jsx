//> React
// Contains all the functionality necessary to define React components
import React from "react";
// Router bindings
import { Link } from "react-router-dom";

//> MDB
// "Material Design for Bootstrap" is a great UI design framework
import { MDBContainer } from "mdbreact";

//> Images
// to be added

//> CSS
import "./referral.scss";

class Referral extends React.Component {
  state = {};

  render() {
    const { ref } = this.props;

    return (
      <section id="referral">
        <MDBContainer className="py-5">
          Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam
          nonumy eirmod tempor invidunt ut labore et dolore magna aliquyam erat,
          sed diam voluptua. At vero eos et accusam et justo duo dolores et ea
          rebum. Stet clita kasd gubergren, no sea takimata sanctus est Lorem
          ipsum dolor sit amet. Lorem ipsum dolor sit amet, consetetur sadipscin
          g elitr, sed diam nonumy eirmod tempor invidunt ut labore et dolore
          mag na aliquyam erat, sed diam voluptua. At vero eos et accusam et
          just o duo dolores et ea rebum. Stet clita kasd gubergren, no sea
          takimata sanctus est Lorem ipsum dolor sit amet.
        </MDBContainer>
      </section>
    );
  }
}

export default Referral;

/**
 * SPDX-License-Identifier: (EUPL-1.2)
 * Copyright © 2019-2020 Werbeagentur Christian Aichner
 */
