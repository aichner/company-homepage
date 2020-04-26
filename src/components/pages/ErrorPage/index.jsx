//> React
// Contains all the functionality necessary to define React components
import React from "react";
// Router
import { Link } from "react-router-dom";

//> MDB
// "Material Design for Bootstrap" is a great UI design framework
import { MDBContainer, MDBBtn, MDBIcon } from "mdbreact";

//> CSS
import "./error.scss";

class ErrorPage extends React.Component {
	render() {
		return (
			<MDBContainer id="error" className="py-5 mb-5 text-center">
				<div className="mt-sm-5 mt-0">
					<h1>
						<span className="text-danger">4</span>
						<span>0</span>
						<span className="text-danger">4</span>
					</h1>
					<h2>Diese Seite wurde nicht gefunden</h2>
					<p className="text-muted">HTTP Status Code 404</p>
					<Link to="/">
						<MDBBtn color="agency-red">
							<MDBIcon icon="home" />
							Zur Startseite
						</MDBBtn>
					</Link>
				</div>
			</MDBContainer>
		);
	}
}

export default ErrorPage;

/**
 * SPDX-License-Identifier: (EUPL-1.2)
 * Copyright © 2019-2020 Werbeagentur Christian Aichner
 */
