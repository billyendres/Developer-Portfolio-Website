import React from "react";
import Container from "react-bootstrap/Container";
import PageContent from "./PageContent";
import Zoom from "react-reveal/Zoom";

const HobbyList = props => {
	return (
		<PageContent>
			<Container className="hobbyList">
				<PageContent>
					<Zoom>
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
					</Zoom>
				</PageContent>
			</Container>
		</PageContent>
	);
};

export default HobbyList;
