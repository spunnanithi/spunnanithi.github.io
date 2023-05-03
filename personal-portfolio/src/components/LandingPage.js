import React from "react";
import programmer from "../images/programmer_at_desk.svg";

const LandingPage = () => {
	return (
		<div className="flex items-center justify-center h-screen bg-gradient-to-r from-pastelblue to-greyishblue">
			<img src={programmer} />
			<div className="text-6xl">Sirasit Punnanithi</div>
		</div>
	);
};

export default LandingPage;
