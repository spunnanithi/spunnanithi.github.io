import React from "react";
import config from "../index.json";
import programmer from "../images/programmer_at_desk.svg";
import resume from "../images/resume.pdf";
import wavingHand from "../images/waving-hand.png";
import wavingHandSm from "../images/waving-hand-sm.png";
import developer from "../images/developer.png";

const AboutPage = () => {
	const about = config.about;

	return (
		<div
			id="about"
			className="h-screen px-8 md:px-32 pb-32 content-center bg-lightblue">
			<h1 className="pt-32 uppercase font-bold text-center text-black text-bold text-4xl">
				ABOUT ME
			</h1>
			<div className="mt-16 flex flex-col md:flex-row align-center items-center">
				<div className="w-1/2 flex justify-center content-center">
					<img
						src={developer}
						alt="about"
						className="shadow-lg"
						width={300}
						height={300}
					/>
				</div>
				<div className="pt-8 md:py-0 md:w-1/2 text-black md:ml-4 text-center md:text-left">
					<h2 className="text-2xl font-semibold">
						Hello there!
						<img className="pl-3 inline" src={wavingHandSm} />
					</h2>{" "}
					<div className="mt-6">
						<span>{about.primary}</span>
					</div>
					<div className="mt-6">
						<span>{about.secondary}</span>
					</div>
					<div className="mt-6 mx-auto md:mx-0 border-2 border-pastelblue py-1 px-2 w-36 text-center font-bold">
						<a
							href={resume}
							target="_blank"
							className="about__resume text-black text-l">
							View Resume
						</a>
					</div>
				</div>
			</div>
		</div>
	);
};

export default AboutPage;
