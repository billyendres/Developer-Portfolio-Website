import React from "react";
import HobbyList from "./HobbyList";

const Routes = props => {
	return (
		<div>
			<HobbyList hobbies={props.hobbies} />
		</div>
	);
};

export default Routes;
