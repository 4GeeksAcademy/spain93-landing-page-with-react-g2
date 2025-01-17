import React from "react";
import { Navbar } from "./Navbar.jsx";
import { Jumbotron } from "./Jumbotron.jsx";
import { Footer } from "./Footer.jsx";
import { Card } from "./Card.jsx";


//create your first component
const Home = () => {
	return (
		<div className="text-center container">
			<Navbar/>
			<Jumbotron />
			<div className="row">
				
					<div className="col-md-3">
						<Card/>
					</div>
					<div className="col-md-3">
						<Card/>
					</div>
					<div className="col-md-3">
						<Card/>
					</div>
					<div className="col-md-3">
						<Card/>
					</div>
					
					
				
			</div>
			<Footer/>
		</div>
	);
};

export default Home;