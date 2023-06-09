import React from "react";
import { Outlet } from "react-router-dom";
import Header from "./components/Header.jsx";
import { Container } from "react-bootstrap";
import Footer from "./components/Footer.jsx";

const App = () => {
	return (
		<>
			<Header />
			<main className="py-3">
				<Container>
					<Outlet />
				</Container>
			</main>
			<Footer />
		</>
	);
};

export default App;
