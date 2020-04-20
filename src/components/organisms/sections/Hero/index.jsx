//> React
// Contains all the functionality necessary to define React components
import React from "react";
// Router
import { Link } from "react-router-dom";

//> MDB
// "Material Design for Bootstrap" is a great UI design framework
import {
  MDBRow,
  MDBCol,
  MDBBtn,
  MDBView,
  MDBContainer,
  MDBIcon,
  MDBCard,
  MDBCardBody,
} from "mdbreact";
// Chart
import { Radar } from "react-chartjs-2";

//> Images
// To be added

//> CSS
import "./hero.scss";

//> Settings
import radarSettings from "./radarSettings.js";

class HomePage extends React.Component {
  state = {
    valuesRadar: undefined,
  };

  componentDidMount = () => {
    // Set random values for the signet chart
    if (!this.state.valuesRadar) {
      this.setState({ valuesRadar: this.generateRandom() });
    }
    // Generate new random values every 1000 ms
    this.interval = setInterval(
      () => this.setState({ valuesRadar: this.generateRandom() }),
      1000
    );
  };

  componentWillUnmount() {
    clearInterval(this.interval);
  }

  generateRandom = () => {
    let min = Math.ceil(10);
    let max = Math.floor(100);

    let arr = [1, 2, 3, 4, 5, 6, 7];

    let results = arr.map((item, i) => {
      return Math.floor(Math.random() * (max - min + 1)) + min;
    });

    return results;
  };

  getRadarData = () => {
    return {
      labels: [
        "Website",
        "Social Media",
        "Branding",
        "SEO",
        "Image",
        "Marketing",
        "Security",
      ],
      datasets: [
        {
          backgroundColor: "rgba(246, 26, 66, 0.5)",
          borderColor: "rgb(246, 26, 66)",
          data: this.state.valuesRadar,
        },
      ],
    };
  };

  render() {
    const { darkMode } = this.props;

    return (
      <section id="hero" className={darkMode ? "dark" : "light"}>
        <MDBContainer className="py-5">
          <MDBView className="hero-view">
            <MDBRow className="flex-center">
              <MDBCol md="6">
                <h1 className="font-weight-bold pb-4">
                  Deine Vision ist unser Auftrag
                </h1>
                <MDBBtn size="lg" color="agency-red">
                  Mehr erfahren
                  <MDBIcon icon="angle-down" className="pl-2" />
                </MDBBtn>
              </MDBCol>
              <MDBCol md="6" className="py-5">
                <MDBCard>
                  <MDBCardBody className="py-5 my-5">
                    <p className="lead">Test</p>
                  </MDBCardBody>
                </MDBCard>
              </MDBCol>
            </MDBRow>
          </MDBView>
        </MDBContainer>
        <MDBContainer
          fluid
          id="seperator"
          className="d-sm-block d-none text-dark"
        >
          <MDBContainer>
            <MDBRow className="h-100">
              <MDBCol md="3" className="p-0">
                <Radar data={this.getRadarData} options={radarSettings} />
              </MDBCol>
              <MDBCol md="7" className="p-0">
                <h3>Was taugt Deine Online-Präsenz?</h3>
                <p className="lead">
                  Unsere <strong>kostenlose</strong> Analyse zeigt Dir den
                  aktuellen Stand Deiner gesamten Online-Präsenz und liefert
                  individuelle und unkomplizierte Lösungen.
                </p>
                <Link to="/me">
                  <MDBBtn size="lg" color="agency-red" className="btn-start">
                    <MDBIcon icon="rocket" className="pr-2" />
                    JETZT kostenlos herausfinden
                  </MDBBtn>
                </Link>
              </MDBCol>
            </MDBRow>
          </MDBContainer>
        </MDBContainer>
      </section>
    );
  }
}

export default HomePage;

/**
 * SPDX-License-Identifier: (EUPL-1.2)
 * Copyright © 2019-2020 Werbeagentur Christian Aichner
 */
