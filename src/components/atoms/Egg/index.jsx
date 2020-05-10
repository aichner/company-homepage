//> React
// Contains all the functionality necessary to define React components
import React from "react";

//> Additional
// Analytics
import ReactGA from "react-ga";

//> MDB
// "Material Design for Bootstrap" is a great UI design framework
import {
	MDBIcon,
	MDBPopover,
	MDBPopoverHeader,
	MDBPopoverBody,
	MDBAnimation,
} from "mdbreact";

//> CSS
import "./egg.scss";

class Egg extends React.Component {
	state = {};

	componentDidMount = () => {
		const res = localStorage.getItem("egg_" + this.props.id);

		if (res) {
			this.setState({
				found: true,
			});
		} else {
			this.setState({
				found: false,
			});
		}
	};

	registerEasterEgg = (id) => {
		ReactGA.event({
			category: "Analysis",
			action: "Easter Egg Found",
			label: id,
		});
	};

	setEgg = () => {
		if (!this.state.found) {
			this.setState(
				{
					found: true,
					set: true,
				},
				() => {
					this.registerEasterEgg("egg_" + this.props.id);
					localStorage.setItem("egg_" + this.props.id, true);
				}
			);
		}
	};

	render() {
		return (
			<MDBPopover placement="top" popover clickable id="popper1" domElement>
				<span onClick={this.setEgg} className="clickable">
					<MDBAnimation
						type="bounce"
						infinite={!this.state.found}
						className="d-inline-block"
					>
						<MDBIcon icon="egg" className="ml-2 yellow-color" />
					</MDBAnimation>
				</span>
				<div>
					<MDBPopoverHeader className="text-center">
						<MDBIcon icon="egg" className="mr-2 yellow-color" />
						Easter Egg
					</MDBPopoverHeader>
					<MDBPopoverBody className="text-center">
						{this.state.set ? (
							<>
								<span className="d-block font-weight-bold">Gratuliere!</span>
								<span>
									Du hast ein Easter Egg gefunden! Aber wie Billy Mays sagte...
								</span>
							</>
						) : (
							<span>
								Du besitzt dieses Easter Egg bereits. Aber wie Billy Mays
								sagte...
							</span>
						)}
					</MDBPopoverBody>
				</div>
			</MDBPopover>
		);
	}
}

export default Egg;

/**
 * SPDX-License-Identifier: (EUPL-1.2)
 * Copyright © 2019-2020 Werbeagentur Christian Aichner
 */
