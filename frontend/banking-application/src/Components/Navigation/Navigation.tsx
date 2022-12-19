import { useContext } from "react";
import { Link } from "react-router-dom";
import { AuthContext } from "../../Context/AuthContext";

import "./Navigation.css";

const Navigation = () => {

	const { loggedIn } = useContext(AuthContext);

	const searchHandler = (event: any) => {
		event.preventDefault();

		// TODO search
	};

	return (
		<div className="navbar">
			<Link to="/" className="navbar-brand">
				<h1>Bank App</h1>
			</Link>
			{ loggedIn && (
				<div className="nav">
					<form onSubmit={searchHandler}>
						<input type="text" name="search" placeholder="Search"></input>
						<button type="submit">Search Icon</button>
					</form>
				</div>
			)}
		</div>
	);
};

export default Navigation;
