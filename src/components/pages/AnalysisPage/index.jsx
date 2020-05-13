//> React
// Contains all the functionality necessary to define React components
import React from "react";
// Router
import { Link, withRouter } from "react-router-dom";

//> Additional
// React Helmet
import { Helmet } from "react-helmet";

//> MDB
// "Material Design for Bootstrap" is a great UI design framework
import {
  MDBContainer,
  MDBBtn,
  MDBIcon,
  MDBRow,
  MDBCol,
  MDBCard,
  MDBCardBody,
  MDBBadge,
} from "mdbreact";

//> Redux
// Connect
import { connect } from "react-redux";
// Actions
import { createAnalysisRequest } from "../../../store/actions/contactActions";

//> Images
import requestImg from "../../../assets/content/analysis/request.gif";

//> CSS
import "./analysis.scss";

class AnalysisPage extends React.Component {
  state = {
    company: "",
    full_name: "",
    email: "",
  };

  onTextChange = (e) => {
    const { company, full_name, email } = this.state;

    if (
      email === "" &&
      full_name === "" &&
      company === "" &&
      !this.state.firstChange
    ) {
      this.setState({ firstChange: true }, () =>
        this.props.googleAnalytics.registerAnalysisStart()
      );
    }

    this.setState({
      [e.target.name]: e.target.value,
    });
  };

  onCheckChange = (e) => {
    this.setState({
      [e.target.name]: e.target.checked,
    });
  };

  handleSubmit = (e) => {
    e.preventDefault();

    // Analytics
    this.props.googleAnalytics.registerAnalysisSend();

    if (this.state.company && this.state.full_name && this.state.email) {
      // Compact the data
      const data = {
        company: this.state.company,
        full_name: this.state.full_name,
        email: this.state.email,
      };

      // Create analysis
      this.setState(
        {
          success: true,
        },
        () => {
          // Set for local use on website
          localStorage.setItem("info", JSON.stringify(data));
          // Send request to Firebase
          this.props.createAnalysisRequest(data);
        }
      );
    }
  };

  render() {
    return (
      <>
        <Helmet>
          <title>Deine kostenlose Analyse</title>
          <meta
            name="description"
            content="Was taugt Deine Online-Präsenz? Unsere ExpertInnen beantworten 
            Dir diese Frage anhand einer kostenlosen Analyse."
          />
        </Helmet>
        <MDBContainer id="analysis" className="py-5 mb-5 text-center">
          <div className="mt-sm-5 mt-0">
            <h2>Was taugt Deine Online-Präsenz?</h2>
            <p className="lead">
              Unsere ExpertInnen beantworten Dir diese Frage anhand einer
              kostenlosen Analyse.
            </p>
            <MDBRow>
              <MDBCol md="6">
                <MDBCard className="mb-3">
                  <MDBCardBody className="text-left">
                    <p className="lead font-weight-bold">
                      Wieso ist eine starke Online-Präsenz so wichtig?
                    </p>
                    <p className="feature lead">
                      <MDBIcon icon="check" className="green-text" />
                      Erhöhte Reichweite
                      <small className="text-muted">
                        Eine Website macht Kunden auf Dein Unternehmen
                        aufmerksam
                      </small>
                    </p>
                    <p className="feature lead">
                      <MDBIcon icon="check" className="green-text" />
                      Bessers Firmenimage
                      <small className="text-muted">
                        Firmen mit eine Online-Präsenz gelten generell
                        vertrauenswürdiger
                      </small>
                    </p>
                    <p className="feature lead">
                      <MDBIcon icon="check" className="green-text" />
                      Informationsquelle für Ihre Kunden
                      <small className="text-muted">
                        Seien es Neuigkeiten, Öffnungszeiten oder
                        Kontaktmöglichkeiten
                      </small>
                    </p>
                    <p className="feature lead">
                      <MDBIcon icon="check" className="green-text" />
                      Jederzeit erreichbar
                      <small className="text-muted">
                        Über eine Website ist Dein Unternehmen jederzeit
                        erreichbar
                      </small>
                    </p>
                    <p className="feature lead">
                      <MDBIcon icon="check" className="green-text" />
                      Steigerung des Umsatzes
                      <small className="text-muted">
                        Als Produkt der Vorteile wist Du auch eine Steigerung
                        Deines Umsatzes bemerken
                      </small>
                    </p>
                    <p className="feature lead">
                      <MDBIcon icon="check" className="green-text" />
                      Modern
                      <small className="text-muted">
                        Mit einer guten Website wirkt Dein Unternehmen auch
                        modern und zeitgemäß
                      </small>
                    </p>
                  </MDBCardBody>
                </MDBCard>
              </MDBCol>
              <MDBCol md="6">
                <MDBCard className="mt-4 mb-3 z-depth-1">
                  <MDBCardBody>
                    {this.state.success ? (
                      <div className="py-4">
                        <MDBIcon
                          icon="check-circle"
                          className="green-text"
                          size="2x"
                        />
                        <p className="lead font-weight-bold mb-1">
                          Erfolgreich angefordert!
                        </p>
                        <p className="text-muted mb-0">
                          Wir bearbeiten Ihren Antrag und analysieren Ihre
                          Online-Präsenz.
                        </p>
                      </div>
                    ) : (
                      <>
                        <p className="lead mb-1">
                          Wir benötigen nur wenige Informationen
                        </p>
                        <p className="text-muted">
                          So finden wir alles über Ihr Unternehmen heraus, wie
                          es ein potentieller Kunde sehen würde.
                        </p>
                        <form
                          onSubmit={(e) => this.handleSubmit(e)}
                          method="post"
                        >
                          <div className="input-group my-3">
                            <div className="input-group-prepend">
                              <span
                                className="input-group-text"
                                id="basic-addon"
                              >
                                <i className="fa fa-building prefix"></i>
                              </span>
                            </div>
                            <input
                              type="text"
                              className="form-control"
                              placeholder="Dein Unternehmen"
                              aria-label="Dein Unternehmen"
                              name="company"
                              value={this.state.company}
                              onChange={(e) => this.onTextChange(e)}
                              aria-describedby="basic-addon"
                              required
                            />
                          </div>
                          <div className="input-group my-3">
                            <div className="input-group-prepend">
                              <span
                                className="input-group-text"
                                id="basic-addon"
                              >
                                <i className="fa fa-user prefix"></i>
                              </span>
                            </div>
                            <input
                              type="text"
                              className="form-control"
                              placeholder="Deine Name"
                              aria-label="Deine Name"
                              name="full_name"
                              value={this.state.full_name}
                              onChange={(e) => this.onTextChange(e)}
                              aria-describedby="basic-addon"
                              required
                            />
                          </div>
                          <div className="input-group my-3">
                            <div className="input-group-prepend">
                              <span
                                className="input-group-text"
                                id="basic-addon"
                              >
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
                          <div className="text-left mb-2">
                            <small>
                              Mit dem Anfordern der Analyse bestätigen Sie, dass
                              Sie damit einverstanden sind, Ihre Analyse per
                              Post zu erhalten. Weiters bestätigen Sie, unsere{" "}
                              <Link to="privacy" target="_blank">
                                Datenschutzerklärung
                              </Link>{" "}
                              gelesen und akzeptiert zu haben.
                            </small>
                          </div>
                          <MDBBtn color="agency-red" type="submit" size="lg">
                            <MDBIcon icon="signature" />
                            Analyse anfordern
                          </MDBBtn>
                        </form>
                      </>
                    )}
                  </MDBCardBody>
                </MDBCard>
              </MDBCol>
            </MDBRow>
          </div>
        </MDBContainer>
        <div className="showcase">
          <MDBContainer className="py-5">
            <MDBRow>
              <MDBCol md="6">
                <img src={requestImg} alt="Request" className="img-fluid" />
              </MDBCol>
              <MDBCol md="6">
                <h2 className="font-weight-bold">
                  Erlange hilfreiche Insights
                  <MDBBadge color="indigo" className="ml-2">
                    Pro
                    <MDBIcon icon="angle-double-up" className="ml-2" />
                  </MDBBadge>
                </h2>
                <p className="lead">
                  Alle unsere KundInnen können sich ganz einfach mit deren
                  Konkurrenz vergleichen und Analysen von anderen Unternehmen
                  anfordern.
                </p>
                <p className="feature lead">
                  <MDBIcon icon="award" className="indigo-text" />
                  Einfacher Zugang
                  <small className="text-muted">
                    Über unser innovatives Kunden-Informations-System (KISy)
                    kannst Du einfach Unternehmen miteinander vergleichen.
                  </small>
                </p>
                <p className="feature lead">
                  <MDBIcon icon="award" className="indigo-text" />
                  Vorher / Nachher
                  <small className="text-muted">
                    Der Vergleich macht sich sicher! Wie war der Stand eines
                    Unternehmens bevor und nachdem wir deren Online-Präsenz
                    verbessert haben?
                  </small>
                </p>
                <p className="lead font-weight-bold">
                  Alle unsere Kunden erhalten kostenlosen
                  <MDBBadge color="indigo" className="mx-2">
                    Pro
                    <MDBIcon icon="angle-double-up" className="ml-1" />
                  </MDBBadge>
                  Zugang
                </p>
              </MDBCol>
            </MDBRow>
          </MDBContainer>
        </div>
      </>
    );
  }
}

const mapStateToProps = (state) => {
  return {
    auth: state.firebase.auth,
    contact: state.contact,
  };
};

const mapDispatchToProps = (dispatch) => {
  return {
    createAnalysisRequest: (newRequest) =>
      dispatch(createAnalysisRequest(newRequest)),
  };
};

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(withRouter(AnalysisPage));

/**
 * SPDX-License-Identifier: (EUPL-1.2)
 * Copyright © 2019-2020 Werbeagentur Christian Aichner
 */
