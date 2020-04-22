//> React
// Contains all the functionality necessary to define React components
import React from "react";

//> MDB
// "Material Design for Bootstrap" is a great UI design framework
import {
  MDBContainer,
  MDBBtn,
  MDBIcon,
  MDBView,
} from "mdbreact";

//> CSS
import "./development.scss";

class DevelopmentPage extends React.Component {
  state = {};

  render() {
    return (
      <div className="flyout">
        <main className="dev-main">
          <MDBView id="dev" className="flex-center text-center">
            <MDBContainer>
              <MDBIcon icon="hard-hat" className="text-warning" size="3x" />
              <h2 className="mt-2 mb-1">
                Unsere Website wird derzeit erneuert.
              </h2>
              <p className="lead mb-3">
                Unsere alte Homepage von 2017 wurde uns doch etwas zu peinlich.
              </p>
              <a href="https://www.facebook.com/werbeagentur.aichner">
                <MDBBtn social="fb">
                  <MDBIcon fab icon="facebook-f" className="mr-1" />
                  Facebook
                </MDBBtn>
              </a>
              <a href="https://www.instagram.com/aichnerchristian/">
                <MDBBtn social="ins">
                  <MDBIcon fab icon="instagram" className="mr-1" />
                  Instagram
                </MDBBtn>
              </a>
              <a href="https://github.com/aichner">
                <MDBBtn social="git">
                  <MDBIcon fab icon="github" className="mr-1" />
                  GitHub
                </MDBBtn>
              </a>
            </MDBContainer>
          </MDBView>
        </main>
      </div>
    );
  }
}

export default DevelopmentPage;

/**
 * SPDX-License-Identifier: (EUPL-1.2)
 * Copyright © 2019 Christian Aichner
 */
