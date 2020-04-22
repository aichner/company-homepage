//> React
// Contains all the functionality necessary to define React components
import React from "react";
// Router Link
import { Link } from "react-router-dom";

//> MDB
// "Material Design for Bootstrap" is a great UI design framework
import { MDBRow, MDBCol, MDBBtn, MDBContainer } from "mdbreact";

//> CSS
import "./services.scss";

//> Images
// Working svg
import webIMG from "../../../../assets/content/services/web.png";
import adIMG from "../../../../assets/content/services/ad.png";
import imageIMG from "../../../../assets/content/services/image.png";

//> Data
const data = {
  services: [
    {
      title: "Website / Shop / App",
      img: webIMG,
      lead: "Gib Deinem Business ein einzigartiges zu Hause!",
      text: `Wir designen und entwickeln Deine unique Homepage inkl. Online-Shop und 
      sonstigen Zusatzfunktionen.`,
      action: {
        text: "Erkunden",
        color: "red",
        link: "/services/online-presence",
      },
    },
    {
      title: "Werbefilm",
      img: adIMG,
      lead: "Auch die tollsten Produkte benötigen Marketing!",
      text: `Ein Werbefilm ist der perfekte Weg zu einer höheren Bekanntheit und 
      dadurch zu garantiert mehr Umsatz.`,
      action: {
        text: "Erkunden",
        color: "red",
        link: "/services/ads",
      },
    },
    {
      title: "Imagefilm",
      img: imageIMG,
      lead: "Setze Dein Unternehmen professionell ins Bild.",
      text: `Mit einem Imagefilm erhaltest Du ein Video, welches Du vielseitig und 
      auf allen Plattformen einsetzen kannst.`,
      action: {
        text: "Erkunden",
        color: "red",
        link: "/services/image",
      },
    },
  ],
};

class Services extends React.PureComponent {
  render() {
    return (
      <section id="services">
        <MDBContainer className="py-5 text-center">
          <h2 className="gidole h1-responsive font-weight-bold">Dein Nutzen</h2>
          <p className="lead">
            Wir bieten Dir <strong>hochwertige</strong>, auf Deine Vision
            zugeschnittene Lösungen in sämtlichen Bereichen des Marketings.
          </p>
          <MDBRow className="mt-5">
            {data.services.map((service, i) => {
              return (
                <MDBCol md="4" key={i}>
                  <img
                    src={service.img}
                    className="img-fluid"
                    alt={service.title}
                  />
                  <div className="pl-3 pr-3">
                    <h4 className="font-weight-bold mt-3">{service.title}</h4>
                    <p className="lead">{service.lead}</p>
                    <p>{service.text}</p>
                    <Link to={service.action.link}>
                      <MDBBtn color={service.action.color} rounded>
                        {service.action.text}
                      </MDBBtn>
                    </Link>
                  </div>
                </MDBCol>
              );
            })}
            <MDBCol md="12"></MDBCol>
          </MDBRow>
        </MDBContainer>
      </section>
    );
  }
}

export default Services;

/**
 * SPDX-License-Identifier: (EUPL-1.2)
 * Copyright © 2019-2020 Werbeagentur Christian Aichner
 */
