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
  MDBAlert,
  MDBIcon,
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
    phone: "",
    note: "",
  };

  componentDidMount = () => {};

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
          <MDBRow className="flex-center">
            <MDBCol md="6">
              <MDBCard>
                <MDBCardBody className="py-5">
                  <h3 className="font-weight-bold">Kontakt aufnehmen</h3>
                  <p className="text-muted">
                    Du hast eine Projekt-Idee und bist Dir nicht sicher um deren
                    Umsetzung? Du benötigst einen Web-Shop, Imagefilm, eine
                    Website oder eine individuelle Applikation? Zögere nicht und
                    kontaktiere uns.
                  </p>
                  <form onSubmit={(e) => this.handleSubmit(e)}>
                    <div className="input-group my-3">
                      <div className="input-group-prepend">
                        <span className="input-group-text" id="basic-addon">
                          <i className="fa fa-user prefix"></i>
                        </span>
                      </div>
                      <input
                        type="text"
                        className="form-control"
                        placeholder="Deine voller Name"
                        aria-label="Deine voller Name"
                        name="fullname"
                        value={this.state.fullname}
                        onChange={(e) => this.onTextChange(e)}
                        aria-describedby="basic-addon"
                        required
                      />
                    </div>
                    <div className="input-group my-3">
                      <div className="input-group-prepend">
                        <span className="input-group-text" id="basic-addon">
                          <i className="fa fa-at prefix"></i>
                        </span>
                      </div>
                      <input
                        type="email"
                        className="form-control"
                        placeholder="Deine E-Mail"
                        aria-label="Deine E-Mail"
                        name="email"
                        value={this.state.email}
                        onChange={(e) => this.onTextChange(e)}
                        aria-describedby="basic-addon"
                        required
                      />
                    </div>
                    <div className="input-group mb-3">
                      <div className="input-group-prepend">
                        <span className="input-group-text" id="basic-addon">
                          <i className="fa fa-phone prefix"></i>
                        </span>
                      </div>
                      <input
                        type="phone"
                        className="form-control"
                        placeholder="Telefon (Optional)"
                        aria-label="Telefon (Optional)"
                        name="phone"
                        value={this.state.phone}
                        onChange={(e) => this.onTextChange(e)}
                        aria-describedby="basic-addon"
                      />
                    </div>
                    <div className="input-group mb-3">
                      <div className="input-group-prepend">
                        <span className="input-group-text" id="basic-addon">
                          <i className="fas fa-pencil-alt prefix"></i>
                        </span>
                      </div>
                      <textarea
                        className="form-control"
                        name="note"
                        id="exampleFormControlTextarea1"
                        value={this.state.note}
                        placeholder="Wie können wir Dich weiterbringen?"
                        onChange={(e) => this.onTextChange(e)}
                        rows="5"
                        required
                      ></textarea>
                    </div>
                    <MDBBtn color="agency-red" type="submit">
                      <MDBIcon icon="paper-plane" />
                      Absenden
                    </MDBBtn>
                  </form>
                </MDBCardBody>
              </MDBCard>
            </MDBCol>
            <MDBCol md="6">
              <MDBCard className="z-depth-3">
                <MDBCardBody className="py-5 text-center">
                  <h3 className="font-weight-bold">Direkt Termin ausmachen</h3>
                  <p className="lead mb-0">
                    Die Erstberatung ist immer kostenlos.
                  </p>
                  <p className="text-muted mb-3">
                    Jetzt einfach und online Termin festlegen.
                  </p>
                  <a
                    href="https://termin.aichner.cloud"
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    <MDBBtn color="agency-red" outline>
                      <MDBIcon far icon="calendar" size="lg" />
                      Termin ausmachen
                    </MDBBtn>
                  </a>
                  <div className="w-100">
                    <div className="splitter my-4">
                      <span className="or">
                        <span className="or-text lead">oder</span>
                      </span>
                    </div>
                  </div>
                  <a href="mailto:info@aichner-christian.com">
                    <MDBBtn color="primary">
                      <MDBIcon icon="envelope" />
                      E-Mail senden
                    </MDBBtn>
                  </a>
                  <MDBBtn
                    color="primary"
                    onClick={() => this.setState({ call: true })}
                    disabled={this.state.call}
                  >
                    <MDBIcon icon="phone" />
                    Anrufen
                  </MDBBtn>
                  {this.state.call && (
                    <MDBAlert color="primary" className="mt-3">
                      <span className="d-block">
                        Du kannst uns täglich von 9:00 bis 18:00 telefonisch
                        unter
                        <br />
                        <strong>+43 681 205 027 54</strong> erreichen.
                      </span>
                    </MDBAlert>
                  )}
                </MDBCardBody>
              </MDBCard>
            </MDBCol>
          </MDBRow>
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
