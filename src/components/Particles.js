import React from "react";
import Particles from "react-particles-js";

const Particle = () => {
	return (
		<div>
			<Particles
				className="particles"
				style={{ position: "fixed", width: "100%" }}
				params={{
					particles: { number: { value: 100 }, size: { value: 4 } },
					interactivity: { events: { onhover: { enable: true, mode: "repulse" } } }
				}}
			/>
		</div>
	);
};

export default Particle;
