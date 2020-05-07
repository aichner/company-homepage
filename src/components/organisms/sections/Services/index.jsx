//> React
// Contains all the functionality necessary to define React components
import React from "react";
// Router
//import { Link } from "react-router-dom";

//> MDB
// "Material Design for Bootstrap" is a great UI design framework
import { MDBRow, MDBCol, MDBContainer } from "mdbreact";

//> CSS
import "./services.scss";

//> Data for dynamically creating the services
import data from "./serviceList.js";

class Services extends React.PureComponent {
  render() {
    return (
      <section id="services" className={this.props.darkMode ? "dark" : "light"}>
        <MDBContainer className="py-5 text-center">
          <h2 className="gidole h1-responsive font-weight-bold">Dein Nutzen</h2>
          {this.props.info && (
            <p className="lead">
              Wie wir auch Dich mit <strong>{this.props.info.company}</strong>{" "}
              weiterbringen.
            </p>
          )}
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
                    {/*<Link to={service.action.link}>
                      <MDBBtn color={service.action.color} rounded>
                        {service.action.text}
                      </MDBBtn>
                    </Link>*/}
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
