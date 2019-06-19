import React from "react";

//Components
import Particle from "./Particles";
import NavBar from "./NavBar";
import AboutMe from "./AboutMe";
import Portfolio from "./Portfolio";
import PageContent from "./PageContent";
import PortfolioSites from "./PortfolioSites";
import { ThemeProvider } from "../contexts/ThemeContext";
import Routes from "./Routes";
// import Nav from "./Nav";

import surfing from "../images/surfing.png";
import climbing from "../images/climbing.png";
import hiking from "../images/hiking.png";
import snowBoarding from "../images/snow.png";

const App = props => {
	const image = {
		hobbies: [
			{
				name: "Snow Boarding",
				src: snowBoarding
			},
			{
				name: "Hiking",
				src: hiking
			},
			{
				name: "Rock Climbing",
				src: climbing
			},
			{
				name: "Surfing",
				src: surfing
			}
		]
	};
	return (
		<ThemeProvider>
			<PageContent>
				<NavBar />
				<Particle />
				<Portfolio />
				<AboutMe />
				<PortfolioSites />
				<Routes hobbies={image.hobbies} />
			</PageContent>
		</ThemeProvider>
	);
};

export default App;
