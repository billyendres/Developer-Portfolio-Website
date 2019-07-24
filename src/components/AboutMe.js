import React from "react";

import Jumbotron from "react-bootstrap/Jumbotron";
import Container from "react-bootstrap/Container";
import PageContent from "./PageContent";
import Zoom from "react-reveal/Zoom";

const AboutMe = () => {
	return (
		<PageContent>
			<Jumbotron
				className="JumbotronEducation"
				fluid
				style={{ backgroundColor: "transparent" }}
			>
				<Container id="education">
					<Zoom>
						<h1 className="heading-1">EDUCATION & EXPERIENCE</h1>
						<p className="education-p">
							My passion for development started when I was introduced to Blockchain
							technology and soon realised the potential it had to disrupt industries
							in a positive and beneficial way. At this time became fascinated with the
							whole tech industry. I have since studied a Diploma of IT - Software
							Development at Coder Academy in Brisbane. As well as this formal
							education, I have taken a variety of online courses through training
							providers such as Udemy and Udacity to further my skills in full stack
							development. I feel that this self directed learning style shows my
							commitment and dedication to ongoing learning.
							<p />
							I have focused my education in full stack React development (MERN Stack).
							I strongly believe React is the future of web development and their
							roadmap is unsurpassed, especially since the release of their Context API
							and Hooks with React 16.8. In fact, this entire application is built with
							React Hooks & Context. No class based components! I enjoy all aspects of
							full stack developments, including adding a creative, stylish flair to
							projects. I am currently building, or have built a variety of full stack
							applications and front end design projects. These projects are all built
							using; React, Node, MongoDB, Express &/or GraphQL.
							<p />
							As mentioned, Blockchain was the field that originally sparked my
							interest and passion for technology. I have recently been studying this
							space in my spare time and picking up some skills and general industry
							knowledge, including Solidity programming for dApp and Smart Contract
							Development. I feel that it is only a matter of time before mass adoption
							in this area is inevitable and I am excited to see what the future of the
							industry holds.
							<p />
							Although my skills in are primarily with MERN Stack development, I am
							more than happy to acquire any new skills or technologies necessary to
							succeed in the position. My approach to education is a practical, learn
							by doing style which I feel is necessary to succeed in this ever evolving
							industry. With technology and tools changing and advancing so frequently,
							ongoing learning is a must have quality and something I strive to
							achieve.
							<p />
							I am 24 years old and am a massive advocate for young people getting into
							the tech industry and would love to share that enthusiasm with other like
							minded people. I would love the opportunity to find a position with a
							well respected company to commit to long term. I am available to start
							work immediately and would be happy to sort out a chat to discuss the
							position further. <p />
							Thanks again for taking the time to read my application. Feel free to
							contact me anytime, I would love to learn more about any available
							position with your company and am happy to answer any questions you might
							have, Billy.
							<p />
							Billy.
						</p>
						<div className="education-icons">
							<i className="fab fa-html5" />
							<i className="fab fa-js-square" />
							<i className="fab fa-css3-alt" />
						</div>
						<div className="education-icons">
							<i className="fab fa-node" />
							<i className="fab fa-react" />
							<i className="fab fa-npm" />
						</div>
						<div className="education-icons">
							<i class="fab fa-ethereum" />
							<i class="fas fa-code" />
						</div>
					</Zoom>
				</Container>
			</Jumbotron>
		</PageContent>
	);
};

export default AboutMe;
