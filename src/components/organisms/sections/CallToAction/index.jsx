//> React
// Contains all the functionality necessary to define React components
import React from "react";
// React Router DOM bindings
//import { Link } from "react-router-dom";

//> Additional libraries
// Parallax
import { Parallax } from "react-scroll-parallax";

//> MDB
// "Material Design for Bootstrap" is a great UI design framework
import {
	MDBRow,
	MDBCol,
	MDBBtn,
	MDBView,
	MDBIcon,
	MDBMask,
	MDBSmoothScroll,
} from "mdbreact";

//> Images
// Rocket
import rocket from "../../../../assets/content/icons/rocket.png";
import planet1 from "../../../../assets/content/icons/planet1.jpg";

//> CSS
import "./callToAction.scss";

class CallToAction extends React.Component {
	render() {
		const { darkMode } = this.props;

		return (
			<section id="calltoaction" className={darkMode ? "dark" : "light"}>
				<MDBRow>
					<MDBCol className="text-center">
						<MDBRow className="space-left">
							<MDBCol>
								<MDBView>
									<Parallax className="planet1" x={[60, 0]} tagOuter="figure">
										<img className="rotate" src={planet1} alt="Moon" />
									</Parallax>
									<MDBMask />
								</MDBView>
							</MDBCol>
							<MDBCol>
								<MDBView>
									<Parallax className="rocket" y={[60, -60]} tagOuter="figure">
										<img className="fly" src={rocket} alt="Rocket" />
									</Parallax>
									<MDBMask />
								</MDBView>
							</MDBCol>
							<MDBCol></MDBCol>
						</MDBRow>
					</MDBCol>
					<MDBCol md="auto" className="text-center">
						<h2 className="gidole">
							Es ist einfach, <strong>jetzt</strong> zu starten!
						</h2>
						<p>Und der Einstieg und die Erstberatung sind kostenlos.</p>
						<MDBSmoothScroll to="contactForm">
							<MDBBtn color="agency-red" size="lg">
								<MDBIcon icon="rocket" className="pr-2" />
								Jetzt starten
							</MDBBtn>
						</MDBSmoothScroll>
					</MDBCol>
					<MDBCol>
						<MDBRow className="space-right">
							<MDBCol>
								<MDBView>
									<Parallax className="planet2" y={[60, 0]} tagOuter="figure">
										<img className="rotate" src={planet1} alt="Moon" />
									</Parallax>
									<MDBMask />
								</MDBView>
							</MDBCol>
						</MDBRow>
					</MDBCol>
				</MDBRow>
			</section>
		);
	}
}

export default CallToAction;

/**
 * SPDX-License-Identifier: (EUPL-1.2)
 * Copyright © 2019-2020 Werbeagentur Christian Aichner
 */
