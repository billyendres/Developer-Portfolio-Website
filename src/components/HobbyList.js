import React from "react";
import Container from "react-bootstrap/Container";
import PageContent from "./PageContent";

const HobbyList = props => {
	return (
		<PageContent>
			<Container className="hobbyList">
				<PageContent>
					<h1 className="heading-1" style={{ color: "white" }}>
						SOME OF MY HOBBIES!
					</h1>
					<div>
						<div className="row">
							{props.hobbies.map(hobby => (
								<div className="Hobby col-lg-6 col-md-12 text-center" key={hobby.name}>
									<img src={hobby.src} alt={hobby.name} />
									<h3>
										<div className="underline" style={{ color: "white" }}>
											{hobby.name}
										</div>
									</h3>
								</div>
							))}
						</div>
					</div>
				</PageContent>
			</Container>
		</PageContent>
	);
};

export default HobbyList;
