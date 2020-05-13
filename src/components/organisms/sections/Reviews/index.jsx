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
  MDBRow,
  MDBCol,
  MDBIcon,
  MDBRating,
} from "mdbreact";

//> CSS
import "./reviews.scss";

//> Data
const reviews = [
  {
    name: "Andreas",
    message:
      "Eine sehr kompetente und ehrliche Zusammenarbeit! Meiner Meinung nach sind sie absolute Experten " +
      "in dem was sie machen! Besonders gut gefällt mir die schnelle Umsetzung der jeweiligen Wünsche, " +
      "immer mit Bedacht auf Qualität, Design und Funktionalität! 🎉",
  },
  {
    name: "Luther",
    message:
      "Die Videos haben einen hohen Produktionswert und Christian ist mit Herz und Seele dabei!",
  },
  {
    name: "Simeon",
    message:
      "Alle Videos und Aufträge wurden professionell und mit neuesten Equipment durchgeführt! Sehr freundlicher " +
      "und sympathischer Produzent.",
  },
];

class CallToAction extends React.Component {
  render() {
    return (
      <section id="reviews" className="py-5 text-center">
        <MDBContainer>
          <h2 className="font-weight-bold mb-0">Kundenbewertungen</h2>
          <p className="text-muted mb-4">Powered by Google</p>
          <MDBRow>
            {reviews.map((review, i) => {
              return (
                <MDBCol className="text-center item" md="4">
                  <MDBCard>
                    <MDBCardBody>
                      <div className="mb-3">
                        <MDBIcon icon="star" />
                        <MDBIcon icon="star" />
                        <MDBIcon icon="star" />
                        <MDBIcon icon="star" />
                        <MDBIcon icon="star" />
                      </div>
                      <p className="quote">&#xFF02;{review.message}&#xFF02; </p>
                      <p className="author text-muted mb-0">~ {review.name}</p>
                    </MDBCardBody>
                  </MDBCard>
                </MDBCol>
              );
            })}
          </MDBRow>
          <p className="lead mt-5 mb-3">Teile Deine Erfahrung mit uns</p>
          <MDBRating
            feedback
            className="text-center"
            getValue={(rating) => {
              ReactGA.event({
                category: "Rating",
                action: "Rating set",
                label: rating.title + " - " + rating.value,
              });
            }}
            submitHandler={(event, title, rating, msg) => {
              event.preventDefault();

              ReactGA.event({
                category: "Rating",
                action: "Rating message set",
                label: title + " - " + msg,
              });
            }}
          />
        </MDBContainer>
      </section>
    );
  }
}

export default CallToAction;

/**
 * SPDX-License-Identifier: (EUPL-1.2)
 * Copyright © 2019-2020 Werbeagentur Christian Aichner
 */
