import React from "react";
import config from "../index.json";
import linkedin from "../images/linkedin.svg";
import gitlab from "../images/gitlab.svg";
import github from "../images/github.svg";

const LandingPage = () => {
	const hero = config.hero;

	return (
		<section
			id="hero"
			className="h-screen overflow-x-hidden bg-gradient-to-r from-pastelblue to-greyishblue">
			<div className="px-8 lg:px-32 flex flex-col justify-center align-between">
				<h1 className="text-6xl mt-64 font-bold tracking-wide">
					Hi, my name is
					<span className="ml-3 whitespace-nowrap bg-gradient-to-r from-purple-600 via-pink-600 to-blue-600 bg-clip-text text-transparent">
						{hero.name}
					</span>
				</h1>
				<h1 className="text-6xl font-bold tracking-wide mt-4">
					{hero.subtitle}
				</h1>
				<a
					href="#about"
					className="text-2xl font-bold p-0.5 mt-6 w-44 bg-gradient-to-r from-rose-400 via-fuchsia-500 to-indigo-500">
					<div className="bg-lightblue">
						<span className="block text-center py-0.5 px-2 bg-white font-bold bg-gradient-to-r from-rose-400 via-fuchsia-500 to-indigo-500 bg-clip-text text-transparent">
							Contact Me
						</span>
					</div>
				</a>

				{/* Links to socials */}
				<div className="mt-3 space-x-4 flex p-1">
					<div className="p-1 border-4 bg-lightblue rounded-full cursor-pointer hover:border-beige hover:scale-105 transition transform duration-200">
						<a href="https://github.com/spunnanithi" target="_blank">
							<img
								className="block h-6 w-6 rounded-full"
								alt="Github icon"
								src={github}
							/>
						</a>
					</div>
					<div className="p-1 border-4 bg-lightblue rounded-full cursor-pointer hover:border-beige hover:scale-105 transition transform duration-200">
						<a
							href="https://www.linkedin.com/in/sirasit-punnanithi/"
							target="_blank">
							<img
								className="block h-6 w-6 rounded-full"
								alt="Github icon"
								src={linkedin}
							/>
						</a>
					</div>
					<div className="p-1 border-4 bg-lightblue rounded-full cursor-pointer hover:border-beige hover:scale-105 transition transform duration-200">
						<a href="https://gitlab.com/spunnanithi" target="_blank">
							<img
								className="block h-6 w-6 rounded-full"
								alt="Gitlab icon"
								src={gitlab}
							/>
						</a>
					</div>
				</div>
			</div>
		</section>
	);
};

export default LandingPage;
