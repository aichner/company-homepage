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
    fullname: "",
    email: "",
    text: "",
  };

  componentDidMount = () => { };

  onTextChange = (e) => {
    this.setState({
      [e.target.name]: e.target.value,
    });
  };

  onCheckChange = (e) => {
    this.setState({
      [e.target.name]: e.target.checked,
    });
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
                    <MDBInput
                      label="Dein Name"
                      name="fullname"
                      value={this.state.fullname}
                      onChange={(e) => this.onTextChange(e)}
                    />
                    <MDBInput
                      label="Deine Email Adresse"
                      name="email"
                      value={this.state.email}
                      onChange={(e) => this.onTextChange(e)}
                    />
                    <br />
                    <MDBInput
                      type="textarea"
                      name="text"
                      label="Dein Anliegen"
                      onChange={(e) => this.onTextChange(e)}
                    />
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
