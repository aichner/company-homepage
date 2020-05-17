//> React
// Contains all the functionality necessary to define React components
import React from "react";

//> MDB
// "Material Design for Bootstrap" is a great UI design framework
import { MDBModal, MDBModalBody } from "mdbreact";

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
  { src: pharmaziegasseIMG, alt: "Pharmaziegasse Logo" },
  { src: snekIMG, alt: "SNEK" },
  { src: gasserPartnerIMG, alt: "Gasser+Partner" },
  { src: kelagbigbandIMG, alt: "KELAG BigBand" },
  { src: e4yIMG, alt: "Emotions 4 You" },
  { src: erlebnishotelIMG, alt: "Erlebnishotel Mölltal" },
  { src: psvIMG, alt: "Polizeisportverein" },
  { src: rauchIMG, alt: "Andreas Rauch" },
  { src: kelagIMG, alt: "KELAG" },
  { src: bluelupiIMG, alt: "Blue Lupi" },
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
        className="partner"
      >
        <MDBModalBody>
          <h1>{this.props.partner}</h1>
          <div>Lorem ipsum dolor sit amet</div>
          <img src={img.src} alt={img.alt} className="img-fluid" />
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
