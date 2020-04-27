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
} from "mdbreact";

class ModalPage extends React.Component {
  state = {
    modal1: localStorage.getItem("cookie") ? false : true,
  };

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
      >
        <MDBModalBody className="text-center py-4">
          <MDBRow className="justify-content-center align-items-center">
            <p className="pt-3 pr-2 text-left">
              Wir verwenden Cookies, um die Funktionsfähigkeit der Website
              aufrecht zu erhalten.
            </p>
            <MDBBtn color="agency-red" onClick={this.toggle(1)} size="lg">
              Ok, danke
            </MDBBtn>
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
