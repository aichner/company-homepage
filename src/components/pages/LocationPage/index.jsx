//> React
// Contains all the functionality necessary to define React components
import React from "react";

//> Additional
// React Helmet
import { Helmet } from "react-helmet";

//> MDB
// "Material Design for Bootstrap" is a great UI design framework
import { MDBContainer, MDBRow, MDBCol, MDBBtn, MDBIcon } from "mdbreact";

//> CSS
import "./location.scss";

//> Components
import { Egg } from "../../atoms";

//> Data
// Google Maps URL
const url =
	"https://www.google.com/maps/embed/v1/place?q=place_id:ChIJF-itd11_ekcR-bHkoK2Mfx4";

class LocationPage extends React.Component {
	state = {};

	render() {
		return (
			<MDBContainer id="location" className="py-5">
				<Helmet>
					<title>Wo Du uns findest</title>
					<meta
						name="description"
						content="Gerne sprechen wir mit Dir über deine Ziele und Deine Ideen. Du kannst uns gerne bei
            unserem Hauptstandort in Villach Landskron besuchen."
					/>
				</Helmet>
				<MDBRow>
					<MDBCol lg="6" className="mb-4">
						<h2 className="mb-3">Wie Du uns findest</h2>
						<div className="mb-4">
							<p className="lead font-weight-bold">Hauptstandort</p>
							<p className="mb-0">Emailwerkstraße 29</p>
							<p className="mb-0">9523 Villach-Landskron</p>
							<p>Kärtnen, Österreich</p>
							<p className="feature">
								<MDBIcon icon="wifi" className="blue-text" />
								Gäste WLAN
							</p>
							<p className="feature">
								<MDBIcon icon="users" className="blue-text" />
								Dedicated Meeting Room
							</p>
							<p className="feature">
								<MDBIcon icon="tv" className="blue-text" />
								Chromecast enabled Smart TV für Präsentationen
							</p>
							<p className="feature">
								<MDBIcon icon="car" className="blue-text" />
								Ausreichend Parkmöglichkeiten
							</p>
							<p className="feature">
								<MDBIcon icon="glass-whiskey" className="blue-text" />
								Für Erfrischungen ist gesorgt
							</p>
							<p className="feature">
								<MDBIcon far icon="sticky-note" className="blue-text" />
								Papier und Stifte stehen zur Verfügung
							</p>
							{(new Date().getHours() === 4 || new Date().getHours() === 16) &&
								new Date().getMinutes() === 20 && (
									<p className="feature">
										<MDBIcon icon="cannabis" className="green-text" />
										Nice. Du siehst Dir diese Seite um 4:20 an.
										<Egg id="420" />
									</p>
								)}
						</div>
						<p className="lead mb-3 font-weight-bold">Öffnungszeiten</p>
						<p>
							Wir haben keine fixen Öffnungszeiten. Bitte wenden Sie sich vor
							einem Besuch an uns oder machen Sie einen Termin mit uns aus.
						</p>
						<a
							href="https://termin.aichner.cloud"
							target="_blank"
							rel="noopener noreferrer"
						>
							<MDBBtn color="agency-red">
								<MDBIcon far icon="calendar" />
								Termin ausmachen
							</MDBBtn>
						</a>
						<a href="mailto:info@aichner-christian.com">
							<MDBBtn color="agency-red" outline>
								<MDBIcon icon="at" />
								Kontakt
							</MDBBtn>
						</a>
					</MDBCol>
					<MDBCol lg="6">
						<div className="google-maps">
							<iframe
								width="450"
								height="250"
								frameBorder="0"
								title="Location"
								style={{ Border: 0 }}
								src={url + `&key=${process.env.REACT_APP_GOOGLE_MAPS}`}
								allowFullScreen
							></iframe>
						</div>
					</MDBCol>
				</MDBRow>
			</MDBContainer>
		);
	}
}

export default LocationPage;

/**
 * SPDX-License-Identifier: (EUPL-1.2)
 * Copyright © 2019-2020 Werbeagentur Christian Aichner
 */
