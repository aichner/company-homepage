//> React
// Contains all the functionality necessary to define React components
import React from "react";

//> Additional
// Google Analytics
import ReactGA from "react-ga";

//> MDB
// "Material Design for Bootstrap" is a great UI design framework
import {
  MDBContainer,
  MDBCard,
  MDBCardBody,
  MDBCardTitle,
  MDBCardText,
  MDBCardImage,
  MDBRow,
  MDBCol,
  MDBIcon,
  MDBRating,
} from "mdbreact";

//> Images
import drone from "../../../../assets/content/packages/drone.jpg";
import photo from "../../../../assets/content/packages/photo.jpg";
import web from "../../../../assets/content/packages/web.jpg";
import app from "../../../../assets/content/packages/app.jpg";
import social from "../../../../assets/content/packages/social.jpg";

class Packages extends React.Component {
  render() {
    return (
      <section id="reviews" className="py-5 text-center">
        <MDBContainer>
          <h2 className="font-weight-bold mb-0">Unsere Angebote</h2>
          <p className="text-muted mb-4">
            Dies ist natürlich nur eine grobe Übersicht.
            <br />
            Alle unsere Projekte werden genau an die Bedürfnisse der KundInnen
            angepasst.
          </p>
          <MDBRow>
            <MDBCol className="text-center item" md="4">
              <MDBCard className="card">
                <MDBCardBody className="mb-3">
                  <MDBCardImage
                    className="img-fluid"
                    src={drone}
                    width="500px"
                    height="275px"
                  />
                  <MDBCardTitle className="title">
                    Drohnenaufnahmen
                  </MDBCardTitle>
                  <MDBCardText>
                    Sie brauchen eine Perspektive aus der Luft? Wir erstellen
                    hochqualitative Drohnenaufnahmen für Sie.
                  </MDBCardText>
                </MDBCardBody>
              </MDBCard>
            </MDBCol>
            <MDBCol className="text-center item" md="4">
              <MDBCard className="card">
                <MDBCardBody className="mb-3">
                  <MDBCardImage
                    className="img-fluid"
                    src={photo}
                    width="500px"
                    height="275px"
                  />
                  <MDBCardTitle className="title">Eventfotografie</MDBCardTitle>
                  <MDBCardText>
                    Sie brauchen einen Fotografen für ein besonderes Event?
                    Unsere Experten stehen Ihnen zur Verfügung und halten Ihre
                    schönsten Momente auf Kamera fest.{" "}
                  </MDBCardText>
                </MDBCardBody>
              </MDBCard>
            </MDBCol>
            <MDBCol className="text-center item" md="4">
              <MDBCard className="card">
                <MDBCardBody className="mb-3">
                  <MDBCardImage
                    className="img-fluid"
                    src={web}
                    width="500px"
                    height="275px"
                  />
                  <MDBCardTitle className="title">Webdesign</MDBCardTitle>
                  <MDBCardText>
                    Wir bauen Ihnen eine Website, die einzigartig und genau auf
                    die Bedürfnisse Ihres Unternehmens zugeschnitten ist.
                  </MDBCardText>
                </MDBCardBody>
              </MDBCard>
            </MDBCol>
          </MDBRow>
          <MDBRow>
            <MDBCol className="text-center item" md="4">
              <MDBCard className="card">
                <MDBCardBody className="mb-3">
                  <MDBCardImage
                    className="img-fluid"
                    src={app}
                    width="500px"
                    height="275px"
                  />
                  <MDBCardTitle className="title">App-Entwicklung</MDBCardTitle>
                  <MDBCardText>
                    Sie brauchen eine Webapplikation? Unsere Webdevelopment
                    Experten können Ihnen helfen und eine Applikation genau nach
                    Ihren Vorstellungen erstellen.{" "}
                  </MDBCardText>
                </MDBCardBody>
              </MDBCard>
            </MDBCol>
            <MDBCol className="text-center item" md="4">
              <MDBCard className="card">
                <MDBCardBody className="mb-3">
                  <MDBCardImage
                    className="img-fluid"
                    src={social}
                    width="500px"
                    height="275px"
                  />
                  <MDBCardTitle className="title">
                    Social Media Marketing
                  </MDBCardTitle>
                  <MDBCardText>
                    Wir optimieren Ihre Social Media Kanäle wie Facebook oder
                    Instagram. Wir kümmern uns um die Erstellung von Beiträgen,
                    die Vermarktung der Seiten und die Analyse des
                    Seitenverkehrs.
                  </MDBCardText>
                </MDBCardBody>
              </MDBCard>
            </MDBCol>
          </MDBRow>
        </MDBContainer>
      </section>
    );
  }
}

export default Packages;

/**
 * SPDX-License-Identifier: (EUPL-1.2)
 * Copyright © 2019-2020 Werbeagentur Christian Aichner
 */
