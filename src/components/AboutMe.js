import React from "react";

import Jumbotron from "react-bootstrap/Jumbotron";
import Container from "react-bootstrap/Container";
import PageContent from "./PageContent";

const AboutMe = () => {
	return (
		<PageContent>
			<Jumbotron
				className="JumbotronEducation"
				fluid
				style={{ backgroundColor: "transparent" }}
			>
				<Container id="education">
					<h1 className="heading-1">EDUCATION & EXPERIENCE</h1>
					<p className="education-p">
						My passion for development started when I was introduced to Blockchain
						technology and soon realised the potential it had to disrupt industries in
						a positive and beneficial way.
						<p />
						At this time became fascinated with the whole tech industry. I have since
						studied a Diploma of IT - Software Development at Coder Academy in
						Brisbane, Australia and taken a multitude of online courses to further my
						skills in full stack development. I feel that this self directed learning
						style shows my commitment to furthering my skillset and my dedication to
						ongoing learning. <p />
						My main focus on learning has been with full stack React development. I
						strongly believe React is the future of web development and their roadmap
						is unsurpassed, especially since the release of their Context API and
						Hooks with React 16.8. I am also excited about the adoption of GraphQL as
						a replacement for REST. I think this switch will get rid of a huge amount
						of complexity in client side state management and reduce the scope of this
						code to data rendered in the UI. In fact, this entire application is built
						with React Hooks & Context. No class based components! <p />
						I am currently building, or have built a variety of full stack
						applications. These projects are all built using; React, Node, MongoDB,
						Express &/or GraphQL. As well as this I am in the process of furthering my
						education in the field of Blockchain and starting to learn Solidity for
						dApp development. I feel that it is only a matter of time before mass
						adoption in this area is inevitable and I am excited to see what the
						future of the industry holds.
						<p />
						I am 24 years old and am a massive advocate for young people getting into
						the tech industry and would love to share that enthusiasm with other like
						minded people.
						<p />
						Feel free to contact me anytime, I would love to learn more about any
						available position with your company and am happy to answer any questions
						you might have, <p />
						Thanks for taking the time to read my aplication, I look forward to
						hearing back from you,
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
				</Container>
			</Jumbotron>
		</PageContent>
	);
};

export default AboutMe;
