import React from "react";

//Image
import ProfilePic from "../images/profile-pic.png";
import PageContent from "./PageContent";

const Portfolio = () => {
	return (
		<PageContent>
			<img src={ProfilePic} alt="profile" className="profile-image" />
			<div className="header-text">
				<h1>DEVELOPER PORTFOLIO</h1>
				<hr className="developer" />
				<h2>BILLY ENDRES</h2>
				{/* Social Media Icons With Links To GitHub/ Linkedin */}
				<hr className="developer-name" />
				<h3>endres63@hotmail.com</h3>
				<hr className="developer" />

				<div className="social-icons">
					<a
						href="https://www.linkedin.com/in/billy-endres-687743137/"
						rel="noopener noreferrer"
						target="_blank"
					>
						<i class="fab fa-linkedin" />
					</a>
					<a
						href="https://github.com/billyendres"
						rel="noopener noreferrer"
						target="_blank"
					>
						<i className="fab fa-github-square" />
					</a>
				</div>
			</div>
		</PageContent>
	);
};

export default Portfolio;
