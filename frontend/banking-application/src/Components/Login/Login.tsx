import { useState, useContext } from "react";
import { Link } from "react-router-dom";
import { AuthContext } from "../../Context/AuthContext";
import Advertisement from "../Advertisement/Advertisement";
import Background from "../Background/Background";
import Footer from "../Footer/Footer";

import Navigation from "../Navigation/Navigation";

import "./Login.css";

const Login = () => {
	const [validForm, setValidForm] = useState<boolean>(true);
	const [email, setEmail] = useState<string>("");
	const [password, setPassword] = useState<string>("");
	const { login, loggedInUser } = useContext(AuthContext);

	const passwordHandler = (event: any) => {
		setPassword(event.target.value);
	};

	const emailHandler = (event: any) => {
		setEmail(event.target.value);
	};

	const loginHandler = (event: any) => {
		login(email, password).then(success => {
			if (success)
				setValidForm(true);
			else
				setValidForm(false)
		});
	};

	return (
		<>
			<div className="page">
				<Background />
				<Navigation />
				<div className="login-flex-container">
					<div className="login-flex-1">
					<div className="login-box">
						<h2>Login</h2>
						<form className="form">
							{!validForm && (
								<p className="invalid">Incorrect Email or Password</p>
							)}
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
							<Link className="login-button" to="/" onClick={loginHandler}>
								Login
							</Link>
						</form>
						<h3 className="member">Don't Have An Account?</h3>
						<div className="form">
							<Link className="login-button" to="/register">
								Create An Account
							</Link>
						</div>
					</div>
					</div>
					<div className="login-flex-2">
						<Advertisement />
					</div>
				</div>
				<Footer />
			</div>
		</>
	);
};

export default Login;
