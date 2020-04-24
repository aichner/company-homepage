//> React
// Contains all the functionality necessary to define React components
import React from "react";
import { withRouter, Link } from "react-router-dom";

//> MDB
// "Material Design for Bootstrap" is a great UI design framework
import {
	MDBNavbar,
	MDBNavbarBrand,
	MDBNavbarNav,
	MDBNavbarToggler,
	MDBCollapse,
	MDBNavItem,
	MDBNavLink,
	MDBContainer,
	MDBSmoothScroll,
	MDBBtn,
	MDBIcon,
} from "mdbreact";

//> Images
// Logo
import { ReactComponent as Logo } from "../../../assets/content/logo_main.svg";

//> CSS
import "./navbar.scss";

class Navbar extends React.Component {
	constructor(props) {
		super(props);

		this.state = {
			collapseID: "",
		};
	}

	toggleCollapse = (collapseID) => () =>
		this.setState((prevState) => ({
			collapseID: prevState.collapseID !== collapseID ? collapseID : "",
		}));

	closeCollapse = (collapseID) => () => {
		window.scrollTo(0, 0);
		this.state.collapseID === collapseID && this.setState({ collapseID: "" });
	};

	render() {
		const overlay = (
			<div
				id="sidenav-overlay"
				style={{ backgroundColor: "transparent" }}
				onClick={this.toggleCollapse("mainNavbarCollapse")}
			/>
		);

		// Get react-router-dom location and navbar collapseID
		const { location } = this.props;
		const { collapseID } = this.state;

		// Debugging
		//console.log(location);

		return (
			<div>
				<MDBNavbar
					color={this.props.darkMode ? "agency-dark" : "white"}
					light={!this.props.darkMode}
					dark={this.props.darkMode}
					expand="md"
					fixed="top"
					scrolling
				>
					<MDBContainer>
						<MDBNavbarBrand href="/" className="py-1 font-weight-bold">
							<Logo id="logo" />
						</MDBNavbarBrand>
						<MDBNavbarToggler
							onClick={this.toggleCollapse("mainNavbarCollapse")}
						/>
						<MDBCollapse
							id="mainNavbarCollapse"
							isOpen={this.state.collapseID}
							navbar
						>
							<MDBNavbarNav right>
								<MDBNavItem>
									<a
										href="https://termin.aichner.cloud"
										target="_blank"
										rel="noopener noreferrer"
									>
										<MDBBtn color="agency-red" outline>
											<MDBIcon far icon="calendar" />
											Termin
										</MDBBtn>
									</a>
								</MDBNavItem>
								<MDBNavItem>
									{location.pathname === "/" ? (
										<MDBSmoothScroll to="contactForm">
											<MDBBtn color="agency-red">Kostenlose Analyse</MDBBtn>
										</MDBSmoothScroll>
									) : (
										<MDBNavLink exact to="/">
											<MDBBtn color="agency-red">Kostenlose Analyse</MDBBtn>
										</MDBNavLink>
									)}
								</MDBNavItem>
								<MDBNavItem>
									{location.pathname === "/" ? (
										<MDBSmoothScroll to="hero" active>
											Home
										</MDBSmoothScroll>
									) : (
										<MDBNavLink exact to="/">
											Home
										</MDBNavLink>
									)}
								</MDBNavItem>
								<MDBNavItem>
									<a
										href="https://www.kisy.at"
										target="_blank"
										rel="noopener noreferrer"
									>
										Login
									</a>
								</MDBNavItem>
							</MDBNavbarNav>
						</MDBCollapse>
					</MDBContainer>
				</MDBNavbar>
				{collapseID && overlay}
			</div>
		);
	}
}

export default withRouter(Navbar);

/**
 * SPDX-License-Identifier: (EUPL-1.2)
 * Copyright © 2019-2020 Werbeagentur Christian Aichner
 */
