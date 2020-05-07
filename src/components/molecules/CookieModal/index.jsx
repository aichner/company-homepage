//> React
// Contains all the functionality necessary to define React components
import React from "react";

//> MDB
// "Material Design for Bootstrap" is a great UI design framework
import {
  MDBContainer,
  MDBBtn,
  MDBModal,
  MDBModalBody,
  MDBIcon,
  MDBRow,
  MDBCol,
  MDBInput,
} from "mdbreact";

class ModalPage extends React.Component {
  state = {
    modal1: localStorage.getItem("essenziell") ? false : true,
    essenziell: true,
    statistiken: false,
    marketing: false,
  };

  checkBoxCheck(e) {
    this.setState({ [e.target.name]: e.target.isChecked });
  }

  checkAll() {
    this.setState({ essenziell: true, statistiken: true, marketing: true });
  }

  save() {
    localStorage.setItem("essenziell", this.state.essenziell);
    localStorage.setItem("statistiken", this.state.statistiken);
    localStorage.setItem("marketing", this.state.marketing);
    this.setState({ modal1: false });
  }

  toggle = (nr) => () => {
    let modalNumber = "modal" + nr;

    this.setState(
      {
        [modalNumber]: !this.state[modalNumber],
      },
      () => {
        if (!localStorage.getItem("cookie")) {
          localStorage.setItem("cookie", true);
        }
      }
    );
  };

  render() {
    return (
      <MDBModal
        isOpen={this.state.modal1}
        toggle={this.toggle(1)}
        frame
        position="bottom"
        backdrop="static"
        keyboard={false}
      >
        <MDBModalBody className="text-center py-4">
          <MDBRow className="justify-content-center align-items-center">
            <MDBCol>
              <h2>Cookie Einstellungen</h2>
              <p>
                Wir verwenden auf unserer Website Cookies, um die
                Benutzererfahrung zu optimieren. Einige davon sind essenziell.
              </p>
            </MDBCol>
          </MDBRow>
          <MDBRow className="justify-content-center align-items-center">
            <MDBCol className="col-4"></MDBCol>
            <MDBCol className="col-2">
              <MDBInput
                label="Essenziell"
                filled
                checked={this.state.essenziell}
                disabled
                type="checkbox"
                id="cookieEssenziell"
                containerClass="mr-5"
              />
              <MDBInput
                label="Marketing"
                filled
                checked={this.state.marketing}
                name="marketing"
                color="primary"
                type="checkbox"
                id="cookieMarketing"
                containerClass="mr-5"
                onClick={(e) => this.checkBoxCheck(e)}
              />
            </MDBCol>
            <MDBCol className="col-2">
              <MDBInput
                label="Statistiken"
                filled
                checked={this.state.statistiken}
                name="statistiken"
                type="checkbox"
                id="cookieStatistiken"
                containerClass="mr-5"
                onClick={(e) => this.checkBoxCheck(e)}
              />
            </MDBCol>
            <MDBCol className="col-4"></MDBCol>
          </MDBRow>
          <MDBRow className="justify-content-center align-items-center">
            <MDBCol>
              <MDBBtn color="success" onClick={() => this.checkAll()}>
                Alle akzeptieren
              </MDBBtn>
            </MDBCol>
          </MDBRow>
          <MDBRow className="justify-content-center align-items-center">
            <MDBCol>
              <MDBBtn color="" onClick={() => this.save()}>
                Speichern
              </MDBBtn>
            </MDBCol>
          </MDBRow>
        </MDBModalBody>
      </MDBModal>
    );
  }
}

export default ModalPage;

/**
 * SPDX-License-Identifier: (EUPL-1.2)
 * Copyright © 2019-2020 Werbeagentur Christian Aichner
 */
