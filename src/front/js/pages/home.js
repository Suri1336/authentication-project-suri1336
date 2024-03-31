import React, { useContext, useEffect, useState } from "react";
import { Link } from "react-router-dom";
import SignUp from "../pages/signup";
import { Context } from "../store/appContext";
import "../../styles/home.css";

export const Home = () => {
	const { store, actions } = useContext(Context);

	function handleLogOut() {
		actions.logout();
	}
	useEffect(()=>{
		actions.getmessage

	})
	return (
		<div className="text-center mt-5">
			<h1>welcome to the home page</h1>
			
			<div className="alert alert-info">
				{store.message || "Loading message from the backend (make sure your python backend is running)..."}
			</div>
			<div>
				{
					!store.token?
					<div>
						<Link to="/login"> 
						<button className="btn btn-success">Login</button>
						</Link>
						<Link to="/signup"> 
						<button className="btn btn-success">Sign Up</button>
						</Link>
					</div>
					:
					<button className="btn btn-warrning" onClick={handleLogOut}>Logout</button>
				}
			</div>
		</div>
	);
};
