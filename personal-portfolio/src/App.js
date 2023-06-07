import "./App.css";
import Navbar from "./components/Navbar";
import AboutPage from "./pages/AboutPage";
import LandingPage from "./pages/LandingPage";
import ProjectsPage from "./pages/ProjectsPage";

function App() {
	return (
		<>
			<Navbar />
			<LandingPage />
			<AboutPage />
			<ProjectsPage />
		</>
	);
}

export default App;
