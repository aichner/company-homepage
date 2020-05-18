//> React
// Contains all the functionality necessary to define React components
import React from "react";

//> MDB
// "Material Design for Bootstrap" is a great UI design framework
import {
  MDBModal,
  MDBModalBody,
  MDBCard,
  MDBCardBody,
  MDBCardFooter,
  MDBBtn,
  MDBRow,
  MDBCol,
} from "mdbreact";

//> CSS
import "./partnermodal.scss";

//> Images
import kelagIMG from "../.././../assets/content/trusted/kelag.png";
import kelagbigbandIMG from "../.././../assets/content/trusted/kelagbigband.png";
import pharmaziegasseIMG from "../.././../assets/content/trusted/pharmaziegasse.png";
import bluelupiIMG from "../.././../assets/content/trusted/bluelupi.png";
import erlebnishotelIMG from "../.././../assets/content/trusted/erlebnishotel.png";
import rauchIMG from "../.././../assets/content/trusted/rauch.png";
import gasserPartnerIMG from "../../../assets/content/trusted/gasser+partner.png";
import snekIMG from "../../../assets/content/trusted/snek.png";
import psvIMG from "../../../assets/content/trusted/psv.png";
import e4yIMG from "../../../assets/content/trusted/e4y.png";

//> Data
const data = [
  {
    src: pharmaziegasseIMG,
    alt: "Pharmaziegasse Logo",
    projects: [
      {
        titel: "projekt1",
        beschreibung: "lol",
        link: "https://www.nasa.com",
      },
      { titel: "projekt2", beschreibung: "rofl", link: "abc" },
      { titel: "projekt3", beschreibung: "lmao", link: "abc" },
    ],
  },
  {
    src: snekIMG,
    alt: "SNEK",
    projects: [
      { titel: "projekt1", beschreibung: "lol", link: "abc" },
      { titel: "projekt2", beschreibung: "rofl", link: "abc" },
      { titel: "projekt3", beschreibung: "lmao", link: "abc" },
    ],
  },
  {
    src: gasserPartnerIMG,
    alt: "Gasser+Partner",
  },
  {
    src: kelagbigbandIMG,
    alt: "KELAG BigBand",
    projects: [
      { titel: "projekt1", beschreibung: "lol", link: "abc" },
      { titel: "projekt2", beschreibung: "rofl", link: "abc" },
      { titel: "projekt3", beschreibung: "lmao", link: "abc" },
    ],
  },
  {
    src: e4yIMG,
    alt: "Emotions 4 You",
    projects: [
      { titel: "projekt1", beschreibung: "lol", link: "abc" },
      { titel: "projekt2", beschreibung: "rofl", link: "abc" },
      { titel: "projekt3", beschreibung: "lmao", link: "abc" },
    ],
  },
  {
    src: erlebnishotelIMG,
    alt: "Erlebnishotel Mölltal",
    projects: [
      { titel: "projekt1", beschreibung: "lol", link: "abc" },
      { titel: "projekt2", beschreibung: "rofl", link: "abc" },
      { titel: "projekt3", beschreibung: "lmao", link: "abc" },
    ],
  },
  {
    src: psvIMG,
    alt: "Polizeisportverein",
    projects: [
      { titel: "projekt1", beschreibung: "lol", link: "abc" },
      { titel: "projekt2", beschreibung: "rofl", link: "abc" },
      { titel: "projekt3", beschreibung: "lmao", link: "abc" },
    ],
  },
  {
    src: rauchIMG,
    alt: "Andreas Rauch",
    projects: [
      { titel: "projekt1", beschreibung: "lol", link: "abc" },
      { titel: "projekt2", beschreibung: "rofl", link: "abc" },
      { titel: "projekt3", beschreibung: "lmao", link: "abc" },
    ],
  },
  {
    src: kelagIMG,
    alt: "KELAG",
    projects: [{ titel: "projekt1", beschreibung: "lol", link: "abc" }],
  },
  {
    src: bluelupiIMG,
    alt: "Blue Lupi",
    projects: [
      { titel: "projekt1", beschreibung: "lol", link: "abc" },
      { titel: "projekt2", beschreibung: "rofl", link: "abc" },
      { titel: "projekt3", beschreibung: "lmao", link: "abc" },
    ],
  },
];

class PartnerModal extends React.PureComponent {
  state = {
    show: true,
    partner: "",
  };

  componentDidMount = () => {
    this.setState({ show: this.props.show, partner: this.props.partner });
  };

  render() {
    let img = {};
    if (this.props.partner) {
      img = data.filter((i) => i.alt === this.props.partner)[0];
    }
    return (
      <MDBModal
        isOpen={this.props.show}
        disableFocusTrap={true}
        toggle={() => this.props.changeShow()}
        id="partnermodal"
      >
        <MDBModalBody className="logo">
          <img src={img.src} alt={img.alt} className="img-fluid" />
          <div>Lorem ipsum dolor sit amet</div>
          <MDBRow>
            {img.projects &&
              img.projects.map((p) => {
                return (
                  <MDBCol>
                    <MDBCard className="card">
                      <MDBCardBody>
                        <h2>{p.titel}</h2>
                        <div>{p.beschreibung}</div>
                      </MDBCardBody>
                      <MDBCardFooter>
                        <a
                          href={p.link}
                          target="_blank"
                          rel="noopener noreferrer"
                        >
                          <MDBBtn color="agency-red" outline rounded>
                            Click here - not a scam
                          </MDBBtn>
                        </a>
                      </MDBCardFooter>
                    </MDBCard>
                  </MDBCol>
                );
              })}
          </MDBRow>
        </MDBModalBody>
      </MDBModal>
    );
  }
}

export default PartnerModal;

/**
 * SPDX-License-Identifier: (EUPL-1.2)
 * Copyright © 2019-2020 Werbeagentur Christian Aichner
 */
