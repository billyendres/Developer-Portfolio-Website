import React, { useContext } from "react";
import { ThemeContext } from "../contexts/ThemeContext";

import Navbar from "react-bootstrap/Navbar";
import Button from "react-bootstrap/Button";

const NavBar = props => {
	const { isDarkTheme, toggleTheme } = useContext(ThemeContext);
	return (
		<div style={{ marginBottom: "5em" }}>
			<Navbar
				className="nav-bar"
				bg={isDarkTheme ? "light" : "dark"}
				variant={isDarkTheme ? "outline-light" : "dark"}
				fixed="top"
				expand="lg"
			>
				<Navbar.Brand className="nav-text" style={{ fontSize: "2.5rem" }}>
					BILLY ENDRES
				</Navbar.Brand>
				<Button
					onClick={toggleTheme}
					variant={isDarkTheme ? "outline-info" : "danger"}
					size="md"
				>
					CHANGE THEME
				</Button>
			</Navbar>
		</div>
	);
};

export default NavBar;
