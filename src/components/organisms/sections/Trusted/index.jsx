//> React
// Contains all the functionality necessary to define React components
import React from "react";

//> MDB
// "Material Design for Bootstrap" is a great UI design framework
import { MDBContainer, MDBRow, MDBCol } from "mdbreact";

//> CSS
import "./trusted.scss";

//> Images
import kelagIMG from "../.././../../assets/content/trusted/kelag.png";
import kelagbigbandIMG from "../.././../../assets/content/trusted/kelagbigband.png";
import pharmaziegasseIMG from "../.././../../assets/content/trusted/pharmaziegasse.png";
import bluelupiIMG from "../.././../../assets/content/trusted/bluelupi.png";
import erlebnishotelIMG from "../.././../../assets/content/trusted/erlebnishotel.png";
import rauchIMG from "../.././../../assets/content/trusted/rauch.png";
import gasserPartnerIMG from "../../../../assets/content/trusted/gasser+partner.png";
import snekIMG from "../../../../assets/content/trusted/snek.png";
import psvIMG from "../../../../assets/content/trusted/psv.png";
import e4yIMG from "../../../../assets/content/trusted/e4y.png";

class Trusted extends React.PureComponent {
  render() {
    return (
      <div id="trusted">
        <MDBContainer className="py-5 text-center text-dark">
          <h2 className="gidole h1-responsive font-weight-bold">
            Viele Firmen profitieren von unseren Services
          </h2>
          <p className="lead">
            Wir bieten Dir <strong>hochwertige</strong>, auf Deine Vision
            zugeschnittene Lösungen in sämtlichen Bereichen des Marketing.
          </p>
          <MDBRow className="flex-center">
            <MDBCol md="2" className="p-3">
              <img
                src={pharmaziegasseIMG}
                alt="Pharmaziegasse Logo"
                className="img-fluid"
              />
            </MDBCol>
            <MDBCol md="2" className="p-3">
              <img src={snekIMG} alt="SNEK" className="img-fluid" />
            </MDBCol>
            <MDBCol md="2" className="p-3">
              <img
                src={gasserPartnerIMG}
                alt="Gasser+Partner"
                className="img-fluid"
              />
            </MDBCol>
            <MDBCol md="2" className="p-3">
              <img
                src={kelagbigbandIMG}
                alt="Kelag Big Band Logo"
                className="img-fluid"
              />
            </MDBCol>
            <MDBCol md="2" className="p-3">
              <img src={e4yIMG} alt="Emotions 4 you" className="img-fluid" />
            </MDBCol>
            <MDBCol md="2" className="p-3">
              <img
                src={erlebnishotelIMG}
                alt="Erlebnishotel Mölltal Logo"
                className="img-fluid"
              />
            </MDBCol>
            <MDBCol md="2" className="p-3">
              <img
                src={psvIMG}
                alt="Polizeisportverein Villach"
                className="img-fluid"
              />
            </MDBCol>
            <MDBCol md="2" className="p-3">
              <img src={rauchIMG} alt="Andreas Rauch" className="img-fluid" />
            </MDBCol>
            <MDBCol md="2" className="p-3">
              <img src={kelagIMG} alt="Kelag Logo" className="img-fluid" />
            </MDBCol>
            <MDBCol md="2" className="p-3">
              <img
                src={bluelupiIMG}
                alt="Blue Lupi Logo"
                className="img-fluid"
              />
            </MDBCol>
          </MDBRow>
        </MDBContainer>
      </div>
    );
  }
}

export default Trusted;

/**
 * SPDX-License-Identifier: (EUPL-1.2)
 * Copyright © 2019 Werbeagentur Christian Aichner
 */
