import React from "react";
import HobbyList from "./HobbyList";

import surfing from "../images/surfing.png";
import climbing from "../images/climbing.png";
import hiking from "../images/hiking.png";
import snowBoarding from "../images/snow.png";

const Routes = () => {
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
		<div>
			<HobbyList hobbies={image.hobbies} />
		</div>
	);
};

export default Routes;
