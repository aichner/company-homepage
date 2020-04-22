//> React
// Contains all the functionality necessary to define React components
import React from "react";
// React Router DOM bindings
import { Link } from "react-router-dom";

//> Additional libraries
// Parallax
import { Parallax } from "react-scroll-parallax";

//> MDB
// "Material Design for Bootstrap" is a great UI design framework
import { MDBRow, MDBCol, MDBBtn, MDBView, MDBIcon, MDBMask } from "mdbreact";

//> Images
// Rocket
import rocket from "../../../../assets/content/icons/rocket.png";
//import rocket_pen from '../../../../assets/content/icons/rocket_pen.png';
import planet1 from "../../../../assets/content/icons/planet1.jpg";

//> CSS
import "./callToAction.scss";

class CallToAction extends React.Component {
  render() {
    const { darkMode } = this.props;

    return (
      <section id="calltoaction">
        <MDBRow>
          <MDBCol className="text-center">
            <MDBRow className="space-left">
              <MDBCol>
                <MDBView>
                  <Parallax className="planet1" x={[60, 0]} tagOuter="figure">
                    <img className="rotate" src={planet1} alt="Moon" />
                  </Parallax>
                  <MDBMask />
                </MDBView>
              </MDBCol>
              <MDBCol>
                <MDBView>
                  <Parallax className="rocket" y={[60, -60]} tagOuter="figure">
                    <img className="fly" src={rocket} alt="Rocket" />
                  </Parallax>
                  <MDBMask />
                </MDBView>
              </MDBCol>
              <MDBCol></MDBCol>
            </MDBRow>
          </MDBCol>
          <MDBCol md="auto" className="text-center">
            <h2 className="gidole">
              Es ist einfach, <strong>jetzt</strong> zu starten!
            </h2>
            <p>Und der Einstieg und Erstberatung sind kostenlos.</p>
            <Link to="/analysis">
              <MDBBtn color="agency-red" size="lg">
                <MDBIcon icon="rocket" className="pr-2" />
                Jetzt starten
              </MDBBtn>
            </Link>
          </MDBCol>
          <MDBCol>
            <MDBRow className="space-right">
              <MDBCol>
                <MDBView>
                  <Parallax className="planet2" y={[60, 0]} tagOuter="figure">
                    <img className="rotate" src={planet1} alt="Moon" />
                  </Parallax>
                  <MDBMask />
                </MDBView>
              </MDBCol>
            </MDBRow>
          </MDBCol>
        </MDBRow>
      </section>
    );
  }
}

export default CallToAction;

/**
 * SPDX-License-Identifier: (EUPL-1.2)
 * Copyright © 2019-2020 Werbeagentur Christian Aichner
 */
