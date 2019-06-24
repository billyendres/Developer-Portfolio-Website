import React from "react";

import Particle from "./Particles";
import NavBar from "./NavBar";
import AboutMe from "./AboutMe";
import Socials from "./Socials";
import PageContent from "./PageContent";
import PortfolioSites from "./PortfolioSites";
import { ThemeProvider } from "../contexts/ThemeContext";
import Routes from "./Routes";

const App = props => {
	return (
		<ThemeProvider>
			<PageContent>
				<NavBar />
				<Particle />
				<Socials />
				<AboutMe />
				<PortfolioSites />
				<Routes />
			</PageContent>
		</ThemeProvider>
	);
};

export default App;
