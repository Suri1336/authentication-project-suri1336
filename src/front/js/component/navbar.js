import React from "react";
import { Link } from "react-router-dom";

export const Navbar = () => {
	return (
		<nav className="navbar navbar-light bg-light">
			<div className="container">
				<Link to="/">
					<span className="navbar-brand mb-0 h1">Authentication system with Python Flask and React.js</span>
				</Link>
				<div className="ml-auto">
				</div>
			</div>
		</nav>
	);
};