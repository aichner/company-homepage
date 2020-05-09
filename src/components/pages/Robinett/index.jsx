//> React
// Contains all the functionality necessary to define React components
import React from "react";
// Router
import { Link } from "react-router-dom";

//> Additional
// React Helmet
import { Helmet } from "react-helmet";

//> MDB
// "Material Design for Bootstrap" is a great UI design framework
import {
  MDBContainer,
  MDBRow,
  MDBCol,
  MDBCard,
  MDBCardBody,
  MDBCardFooter,
  MDBBtn,
  MDBIcon,
} from "mdbreact";
import MDBSortable from "mdb-react-sortable";

//> Components
import { Egg } from "../../atoms";

//> CSS
import "./robinett.scss";

//> Data
const Item = (props) => <span className={props.className}>{props.title}</span>;
const items = ["4", "4", "0"];
const renderedItems = items.map((item, i) => {
  return (
    <Item
      title={item}
      key={i}
      className={i !== 2 ? "text-danger" : undefined}
    />
  );
});

class Robinett extends React.Component {
  state = { locked: true };

  onSortOverHandler = (obj) => {
    const { oldIndex, newIndex, index } = obj;

    if (
      (index === 1 && newIndex === 2) ||
      (index === 0 && newIndex === 2) ||
      (index === 2 && newIndex === 1)
    ) {
      if (this.state.locked) {
        this.setState({
          locked: false,
        });
      }
    } else {
      if (!this.state.locked) {
        this.setState({
          locked: true,
        });
      }
    }
  };

  render() {
    return (
      <MDBContainer id="robinett" className="py-5 mb-5 text-center">
        <Helmet>
          <title>Seite nicht gefunden</title>
          <meta
            name="description"
            content="Die gewünschte Seite konnte nicht gefunden werden."
          />
        </Helmet>
        <div className="mt-sm-5 mt-0">
          <div>
            <MDBSortable
              axis="x"
              items={renderedItems}
              itemClassName="SortableItem"
              listClassName="SortableList"
              onSortOver={(obj) => this.onSortOverHandler(obj)}
            />
          </div>
          {this.state.locked ? (
            <>
              <h2>Diese Seite wurde nicht gefunden</h2>
              <p className="text-muted">HTTP Status Code 404</p>
              <Link to="/">
                <MDBBtn color="agency-red">
                  <MDBIcon icon="home" />
                  Zur Startseite
                </MDBBtn>
              </Link>
            </>
          ) : (
            <>
              <h2 className="d-inline-block">
                Gratulation!
                <MDBIcon icon="egg" className="ml-2" />
              </h2>
              <p className="lead text-muted">
                Hast du gewusst, dass Warren Robinett in seinem Spiel
                "Adventure" das erste Easter Egg erschaffen hat?
              </p>
              <h2 className="font-weight-bold mt-3 mb-4">Easter Eggs</h2>
              <MDBRow className="d-flex justify-content-center">
                <MDBCol md="4">
                  <MDBCard className="border">
                    <MDBCardBody className="text-left">
                      <div className="d-flex justify-content-between align-items-center">
                        <p className="font-weight-bold lead mb-0">420</p>
                        <MDBIcon icon="cannabis" className="green-text" />
                      </div>
                      <p className="text-muted mb-0">
                        <small>
                          Du warst zur richtigen Zeit am richtigen Ort.
                        </small>
                      </p>
                    </MDBCardBody>
                    <MDBCardFooter>
                      {localStorage.getItem("egg_420") ? (
                        <>
                          <MDBIcon
                            icon="check-circle"
                            className="text-success mr-2"
                          />
                          Du hast dieses Easter Egg gefunden
                        </>
                      ) : (
                        <>
                          <MDBIcon
                            icon="times-circle"
                            className="text-danger mr-2"
                          />
                          Noch nicht entdeckt
                        </>
                      )}
                    </MDBCardFooter>
                  </MDBCard>
                </MDBCol>
                <MDBCol md="4">
                  <MDBCard className="border">
                    <MDBCardBody className="text-left">
                      <div className="d-flex justify-content-between align-items-center">
                        <p className="font-weight-bold lead mb-0">Developer</p>
                        <MDBIcon icon="code" className="blue-text" />
                      </div>
                      <p className="text-muted mb-0">
                        <small>
                          You must be a developer! Who else would do that?!
                        </small>
                      </p>
                    </MDBCardBody>
                    <MDBCardFooter>
                      {localStorage.getItem("egg_dev") ? (
                        <>
                          <MDBIcon
                            icon="check-circle"
                            className="text-success mr-2"
                          />
                          Du hast dieses Easter Egg gefunden
                        </>
                      ) : (
                        <>
                          <MDBIcon
                            icon="times-circle"
                            className="text-danger mr-2"
                          />
                          Noch nicht entdeckt
                        </>
                      )}
                    </MDBCardFooter>
                  </MDBCard>
                </MDBCol>
                <MDBCol md="4">
                  <MDBCard className="border">
                    <MDBCardBody className="text-left">
                      <div className="d-flex justify-content-between align-items-center">
                        <p className="font-weight-bold lead mb-0">Explorer</p>
                        <MDBIcon icon="map-signs" className="orange-text" />
                      </div>
                      <p className="text-muted mb-0">
                        <small>You found this page. Wow.</small>
                      </p>
                    </MDBCardBody>
                    <MDBCardFooter>
                      <MDBIcon
                        icon="check-circle"
                        className="text-success mr-2"
                      />
                      Du hast dieses Easter Egg gefunden
                    </MDBCardFooter>
                  </MDBCard>
                </MDBCol>
                <MDBCol md="4">
                  <MDBCard className="border">
                    <MDBCardBody className="text-left">
                      <div className="d-flex justify-content-between align-items-center">
                        <p className="font-weight-bold lead mb-0">
                          Cave explorer
                        </p>
                        <MDBIcon
                          icon="angle-double-down"
                          className="blue-text"
                        />
                      </div>
                      <p className="text-muted mb-0">
                        <small>You really want to go down there, right?</small>
                      </p>
                    </MDBCardBody>
                    <MDBCardFooter>
                      {localStorage.getItem("egg_bottom") ? (
                        <>
                          <MDBIcon
                            icon="check-circle"
                            className="text-success mr-2"
                          />
                          Du hast dieses Easter Egg gefunden
                        </>
                      ) : (
                        <>
                          <MDBIcon
                            icon="times-circle"
                            className="text-danger mr-2"
                          />
                          Noch nicht entdeckt
                        </>
                      )}
                    </MDBCardFooter>
                  </MDBCard>
                </MDBCol>
                <MDBCol md="4">
                  <MDBCard className="border">
                    <MDBCardBody className="text-left">
                      <div className="d-flex justify-content-between align-items-center">
                        <p className="font-weight-bold lead mb-0">
                          We love you too
                        </p>
                        <MDBIcon icon="heart" className="red-text" />
                      </div>
                      <p className="text-muted mb-0">
                        <small>Awwww.</small>
                      </p>
                    </MDBCardBody>
                    <MDBCardFooter>
                      {localStorage.getItem("egg_bottom") ? (
                        <>
                          <MDBIcon
                            icon="check-circle"
                            className="text-success mr-2"
                          />
                          Du hast dieses Easter Egg gefunden
                        </>
                      ) : (
                        <>
                          <MDBIcon
                            icon="times-circle"
                            className="text-danger mr-2"
                          />
                          Noch nicht entdeckt
                        </>
                      )}
                    </MDBCardFooter>
                  </MDBCard>
                </MDBCol>
              </MDBRow>
              <p className="lead font-weight-bold mt-3 mb-4">
                Na? Was denkst Du passiert, wenn du alle gefunden hast?
              </p>
            </>
          )}
        </div>
      </MDBContainer>
    );
  }
}

export default Robinett;

/**
 * SPDX-License-Identifier: (EUPL-1.2)
 * Copyright © 2019-2020 Werbeagentur Christian Aichner
 */
