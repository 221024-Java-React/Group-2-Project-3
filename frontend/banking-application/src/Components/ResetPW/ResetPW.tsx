import React from "react";
import { useState, useContext } from "react";
import { Link } from "react-router-dom";
import { AuthContext } from "../../Context/AuthContext";
import Advertisement from "../Advertisement/Advertisement";
import Background from "../Background/Background";

import Navigation from "../Navigation/Navigation";

const ResetPW: React.FC = () => {

	const [email, setEmail] = useState<string>("");
	const [password, setPassword] = useState<string>("");
    const [ssn, setSsn] = useState<string>("");
	const { resetPassword } = useContext(AuthContext);

	const emailHandler = (event: any) => {
		setEmail(event.target.value);
	};

    const ssnHandler = (event: any) => {
		setSsn(event.target.value);
	};

	const passwordHandler = (event: any) => {
		setPassword(event.target.value);
	};

	const resetHandler = (event: any) => {
		event.preventDefault();
		resetPassword(email, ssn, password);
	};

	return (
		<>
			<div className="page">
				<Background />
				<Navigation />
				<div className="content">
					<div className="register box">
						<h2>Reset Password</h2>
						<form className="form" onSubmit={resetHandler}>
							<input
								type="text"
								name="email"
								value={email}
								placeholder="Email"
								onChange={emailHandler}
							/>
							<input
								type="password"
								name="ssn"
								value={ssn}
								placeholder="Social Security #"
								onChange={ssnHandler}
							/>
                            <input
								type="password"
								name="password"
								value={password}
								placeholder="New Password"
								onChange={passwordHandler}
							/>
							<button className="login-button" type="submit">Reset Password</button>
						</form>
						<h3 className="member">Return to Login Page</h3>
						<div className="form"><Link className="login-button" to="/login">Login</Link></div>
					</div>
					<Advertisement />
				</div>
			</div>
		</>
	)
}

export default ResetPW