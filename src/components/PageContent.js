import React, { useContext } from "react";
import { ThemeContext } from "../contexts/ThemeContext";

export const darkTheme = {
	backgroundColor: "rgb(66, 134, 244)",
	backgroundSize: "cover",
	fontFamily: "Montserrat"
};
export const lightTheme = {
	background: "rgb(249, 127, 127)",
	backgroundSize: "cover",
	fontFamily: "Boogaloo"
};

const PageContent = props => {
	const { isDarkTheme } = useContext(ThemeContext);
	return (
		<div style={isDarkTheme ? darkTheme : lightTheme}>{props.children}</div>
	);
};

export default PageContent;
