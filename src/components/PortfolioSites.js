import React from "react";

import Carousel from "react-bootstrap/Carousel";

import PageContent from "./PageContent";
import dev from "../images/dev.png";
import mountain from "../images/mountain.png";
import cards from "../images/cards.png";
import youtubeClone from "../images/youtubeClone.png";

// Arrow Function Composing Component
const PortfolioSites = () => {
	return (
		<PageContent>
			<h1 className="heading-1" style={{ color: "white" }}>
				A FEW RECENT PROJECTS
			</h1>
			{/* //Portfolio Sites Image Carousel */}
			<div id="portfolio" style={{ paddingBottom: "5rem" }}>
				<Carousel className="carousel">
					<Carousel.Item>
						<img className="d-block w-50" src={youtubeClone} alt="slide" />
						<Carousel.Caption>
							<PageContent>
								<h3>Youtube Clone</h3>
								<a
									href="https://billyendres.github.io/React-Mini-Youtube/"
									alt="youtubeClone"
									rel="noopener noreferrer"
									target="_blank"
								>
									GitHub Pages Link
								</a>
							</PageContent>
						</Carousel.Caption>
					</Carousel.Item>

					<Carousel.Item>
						<img className="d-block w-50" src={mountain} alt="slide" />
						<Carousel.Caption>
							<PageContent>
								<h3>React Mountains App</h3>
								<a
									href="https://billyendres.github.io/React-Mountains-Project/"
									alt="mountains"
									rel="noopener noreferrer"
									target="_blank"
								>
									GitHub Pages Link
								</a>
							</PageContent>
						</Carousel.Caption>
					</Carousel.Item>

					<Carousel.Item>
						<img className="d-block w-50" src={cards} alt="slide" />
						<Carousel.Caption>
							<PageContent>
								<h3>React Cards Animation</h3>
								<a
									href="https://billyendres.github.io/React-Cards-API/"
									alt="cards"
									rel="noopener noreferrer"
									target="_blank"
								>
									GitHub Pages Link
								</a>
							</PageContent>
						</Carousel.Caption>
					</Carousel.Item>

					<Carousel.Item>
						<img className="d-block w-50" src={dev} alt="slide" />
						<Carousel.Caption>
							<PageContent>
								<h3>MERN Stack DevConnector</h3>
								<a
									href="https://nameless-journey-89471.herokuapp.com/"
									alt="dev"
									rel="noopener noreferrer"
									target="_blank"
								>
									Heroku Link (Work in progress!)
								</a>
							</PageContent>
						</Carousel.Caption>
					</Carousel.Item>
					<Carousel.Item>
						<img className="d-block w-50" src={dev} alt="slide" />
						<Carousel.Caption>
							<PageContent>
								<h3>MERN Stack Email App With Stripe Payment Gateway</h3>
								<a
									href="https://intense-temple-32289.herokuapp.com/"
									alt="dev"
									rel="noopener noreferrer"
									target="_blank"
								>
									Heroku Link
								</a>
							</PageContent>
						</Carousel.Caption>
					</Carousel.Item>
				</Carousel>
			</div>
		</PageContent>
	);
};

export default PortfolioSites;
