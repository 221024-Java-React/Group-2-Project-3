import React from "react";
import { useState, useContext } from "react";
import { Link } from "react-router-dom";
import { AuthContext } from "../../Context/AuthContext";

import Navigation from "../Navigation/Navigation";

const Register: React.FC = () => {

	const [email, setEmail] = useState<string>("");
	const [password, setPassword] = useState<string>("");
	const { register } = useContext(AuthContext);

	const emailHandler = (event: any) => {
		setEmail(event.target.value);
	};

	const passwordHandler = (event: any) => {
		setPassword(event.target.value);
	};

	const registerHandler = (event: any) => {
		event.preventDefault();

		register(email, password);
	};

	return (
		<>
			<Navigation />
			<div className="content">
				<div className="register box">
					<h2>Register</h2>
					<form className="form" onSubmit={registerHandler}>
						<input
							type="text"
							name="email"
							value={email}
							placeholder="Email"
							onChange={emailHandler}
						/>
						<input
							type="password"
							name="password"
							value={password}
							placeholder="Password"
							onChange={passwordHandler}
						/>
						<button type="submit">Register</button>
					</form>
					<h3 className="member">Already Have An Account?</h3>
					<Link to="/login"><button>Login</button></Link>
				</div>
			</div>
		</>
	)
}

export default Register