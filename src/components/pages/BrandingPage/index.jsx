//> React
// Contains all the functionality necessary to define React components
import React from "react";

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
	MDBTable,
	MDBTableBody,
	MDBBtn,
	MDBIcon,
} from "mdbreact";

//> CSS
import "./branding.scss";

//> Images
// Logo
import { ReactComponent as Logo } from "../../../assets/content/logo_full.svg";
// Wedding logo
import weddingsLogo from "../../../assets/content/weddings.png";

class BrandingPage extends React.Component {
	render() {
		const { globalProps } = this.props;

		return (
			<div id="branding" className={globalProps.darkMode ? "dark" : undefined}>
				<Helmet>
					<title>Evolving Our Identity</title>
					<meta
						name="description"
						content="Du willst über uns berichten?
						Nutze gerne unsere Ressourcen unter Berücksichtung der auf der Seite angeführten Regeln."
					/>
				</Helmet>
				<MDBContainer className="py-5">
					<h2 className="text-center mb-5">Logos und Verwendung</h2>
					<MDBRow className="text-center">
						<MDBCol md="4">
							<MDBCard className="light-item">
								<MDBCardBody>
									<p className="lead">Logo (on light)</p>
									<Logo className="logo-light" />
									<div>
										<MDBBtn
											color="elegant"
											rounded
											onClick={() => this.downloadImage("dark", "svg")}
										>
											<MDBIcon icon="download" className="pr-2" />
											.svg
										</MDBBtn>
										<MDBBtn
											color="elegant"
											rounded
											onClick={() => this.downloadImage("dark", "png")}
										>
											<MDBIcon icon="download" className="pr-2" />
											.png
										</MDBBtn>
									</div>
								</MDBCardBody>
							</MDBCard>
						</MDBCol>
						<MDBCol md="4">
							<MDBCard>
								<MDBCardBody className="elegant-color white-text">
									<p className="lead">Logo (on dark)</p>
									<Logo className="logo-dark" />
									<div>
										<MDBBtn
											color="white"
											rounded
											onClick={() => this.downloadImage("light", "svg")}
										>
											<MDBIcon icon="download" className="pr-2" />
											.svg
										</MDBBtn>
										<MDBBtn
											color="white"
											rounded
											onClick={() => this.downloadImage("light", "png")}
										>
											<MDBIcon icon="download" className="pr-2" />
											.png
										</MDBBtn>
									</div>
								</MDBCardBody>
							</MDBCard>
						</MDBCol>
						<MDBCol md="4">
							<MDBCard>
								<MDBCardBody className="elegant-color white-text">
									<p className="lead">Wedding Logo (universal)</p>
									<img
										className="img-fluid"
										src={weddingsLogo}
										alt="Weddings logo"
									/>
									<div>
										<MDBBtn
											color="white"
											rounded
											onClick={() => this.downloadImage("wedding", "png")}
										>
											<MDBIcon icon="download" className="pr-2" />
											.png
										</MDBBtn>
									</div>
								</MDBCardBody>
							</MDBCard>
						</MDBCol>
					</MDBRow>
					<MDBRow className="mt-5">
						<MDBCol md="6">
							<p className="lead font-weight-bold">Mach diese tollen Dinge</p>
							<ul>
								<li>
									<p className="mt-2">
										<MDBIcon icon="check" className="green-text pr-2" />
										Verwende unser Logo um auf uns zu verlinken
									</p>
								</li>
								<li>
									<p>
										<MDBIcon icon="check" className="green-text pr-2" />
										Verwende unser Logo in Deinem Blog oder Nachrichtenartikel
										über uns
									</p>
								</li>
								<li>
									<p>
										<MDBIcon icon="check" className="green-text pr-2" />
										Verwende unser Logo um auf Zusammenarbeit hinzuweisen
									</p>
								</li>
							</ul>
						</MDBCol>
						<MDBCol md="6">
							<p className="lead font-weight-bold">
								Bitte tu diese Dinge nicht
							</p>
							<ul>
								<li>
									<p>
										<MDBIcon icon="times" className="red-text pr-2" />
										Verwendung des Logos für eigene Zwecke
									</p>
								</li>
								<li>
									<p>
										<MDBIcon icon="times" className="red-text pr-2" />
										Erstellung einer abgeänderten / modifizierten Version des
										Logos
									</p>
								</li>
								<li>
									<p>
										<MDBIcon icon="times" className="red-text pr-2" />
										Einbettung des Logos in Dein eigenes Logo
									</p>
								</li>
								<li>
									<p>
										<MDBIcon icon="times" className="red-text pr-2" />
										Verwendung jeglicher Schaffungen der Agentur ohne Erlaubnis
									</p>
								</li>
								<li>
									<p>
										<MDBIcon icon="times" className="red-text pr-2" />
										Verkauf jeglicher Schaffungen der Agentur ohne Erlaubnis
									</p>
								</li>
								<li>
									<p>
										<MDBIcon icon="times" className="red-text pr-2" />
										Jegliche Veränderung des Logos (z.B. Farben, Maße, Text,
										...)
									</p>
								</li>
								<li>
									<p>
										<MDBIcon icon="times" className="red-text pr-2" />
										Einbettung des Logos auf unpassendem Hintergrund (z.B.
										Dunkles Logo auf dunklem Hintergrund)
									</p>
								</li>
							</ul>
						</MDBCol>
					</MDBRow>
					<hr />
					<MDBRow>
						<MDBCol md="4">
							<MDBCard className="c-red">
								<MDBCardBody>
									<h2>AGENCY RED</h2>
									<MDBTable>
										<MDBTableBody>
											<tr>
												<td>HEX COLOR</td>
												<td>#f61a42</td>
											</tr>
											<tr>
												<td>RGB</td>
												<td>246, 26, 66</td>
											</tr>
											<tr>
												<td>HSL</td>
												<td>349°, 92%, 53%</td>
											</tr>
											<tr>
												<td>CMYK</td>
												<td>0%, 89%, 73%, 4%</td>
											</tr>
										</MDBTableBody>
									</MDBTable>
								</MDBCardBody>
							</MDBCard>
						</MDBCol>
						<MDBCol md="4">
							<MDBCard className="c-dark">
								<MDBCardBody>
									<h2>AGENCY DARK</h2>
									<MDBTable>
										<MDBTableBody>
											<tr>
												<td>HEX COLOR</td>
												<td>#212529</td>
											</tr>
											<tr>
												<td>RGB</td>
												<td>33, 37, 41</td>
											</tr>
											<tr>
												<td>HSL</td>
												<td>210°, 11%, 15%</td>
											</tr>
											<tr>
												<td>CMYK</td>
												<td>20%, 10%, 0%, 84%</td>
											</tr>
										</MDBTableBody>
									</MDBTable>
								</MDBCardBody>
							</MDBCard>
						</MDBCol>
						<MDBCol md="4">
							<MDBCard className="c-light">
								<MDBCardBody>
									<h2>AGENCY LIGHT</h2>
									<MDBTable>
										<MDBTableBody>
											<tr>
												<td>HEX COLOR</td>
												<td>#e5e5e5</td>
											</tr>
											<tr>
												<td>RGB</td>
												<td>229, 229, 229</td>
											</tr>
											<tr>
												<td>HSL</td>
												<td>0°, 0%, 90%</td>
											</tr>
											<tr>
												<td>CMYK</td>
												<td>0%, 0%, 0%, 10%</td>
											</tr>
										</MDBTableBody>
									</MDBTable>
								</MDBCardBody>
							</MDBCard>
						</MDBCol>
					</MDBRow>
					<hr />
					<MDBRow>
						<MDBCol md="6">
							<p className="lead font-weight-bold">Bitte kontaktiere uns</p>
							<p>
								wenn Du unsere Schaffungen verwenden willst oder Du diese in
								einem Video oder Mainstream-Medien verwenden willst.
							</p>
							<MDBBtn
								color="elegant"
								size="md"
								rounded
								tag="a"
								href="mailto:contact@aichner-christian.com"
							>
								Kontakt
							</MDBBtn>
						</MDBCol>
						<MDBCol md="6">
							<p className="lead font-weight-bold">
								Du willst über uns berichten?
							</p>
							<p>
								Nutze gerne unsere Ressourcen unter Berücksichtung der oben
								angeführten Regeln.
							</p>
							<p className="lead font-weight-bold">Du benötigst Auskunft?</p>
							<p>
								Über firmeninterne Details können wir Dir für deinen Bericht /
								Blog / Artikel gerne Auskunft geben.
							</p>
							<MDBBtn
								color="elegant"
								size="md"
								rounded
								tag="a"
								href="mailto:contact@aichner-christian.com"
							>
								Kontakt
							</MDBBtn>
						</MDBCol>
					</MDBRow>
				</MDBContainer>
			</div>
		);
	}
}

export default BrandingPage;

/**
 * SPDX-License-Identifier: (EUPL-1.2)
 * Copyright © 2019-2020 Werbeagentur Christian Aichner
 */
