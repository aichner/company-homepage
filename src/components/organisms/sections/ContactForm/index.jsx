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
  MDBCard,
  MDBCardBody,
  MDBInput,
} from "mdbreact";

//> Images
// To be added

//> CSS
import "./contactForm.scss";

//> Settings
// To be added

class ContactForm extends React.Component {
  state = {

  };

  componentDidMount = () => {

  };

  render() {
    const { darkMode } = this.props;

    return (
      <section id="contactForm" className={darkMode ? "dark" : "light"}>
        <MDBContainer className="py-5">
          <MDBView className="contactForm-view">
            <MDBRow className="flex-center">
              <MDBCol md="6">
                <MDBCard>
                  <MDBCardBody className="py-5 my-5">
                    <MDBInput label="Dein Name" />
                    <MDBInput label="Deine Email Adresse" />
                    <br />
                    <MDBInput type="textarea" label="Dein Anliegen" />
                  </MDBCardBody>
                </MDBCard>
              </MDBCol>
            </MDBRow>
          </MDBView>
        </MDBContainer>
      </section>
    );
  }
}

export default ContactForm;

/**
 * SPDX-License-Identifier: (EUPL-1.2)
 * Copyright © 2019-2020 Werbeagentur Christian Aichner
 */
