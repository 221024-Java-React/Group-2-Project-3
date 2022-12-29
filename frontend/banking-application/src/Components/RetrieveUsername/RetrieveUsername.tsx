import React from "react";
import { useState, useContext } from "react";
import { Link } from "react-router-dom";
import { AuthContext } from "../../Context/AuthContext";
import Advertisement from "../Advertisement/Advertisement";
import Background from "../Background/Background";
import Footer from "../Footer/Footer";

import Navigation from "../Navigation/Navigation";

const RetrieveUsername: React.FC = () => {

	// const [email, setEmail] = useState<string>("");
	// const [password, setPassword] = useState<string>("");
    const [ssn, setSsn] = useState<string>("");
    const [dob, setDob] = useState<string>("");
	// const { resetPassword } = useContext(AuthContext);
    const { retrieveUsername } = useContext(AuthContext);

	// const emailHandler = (event: any) => {
	// 	setEmail(event.target.value);
	// };

    const ssnHandler = (event: any) => {
		setSsn(event.target.value);
	};

    const dobHandler = (event: any) => {
		setDob(event.target.value);
	};

	// const passwordHandler = (event: any) => {
	// 	setPassword(event.target.value);
	// };

	// const resetHandler = (event: any) => {
	// 	event.preventDefault();
	// 	resetPassword(email, ssn, password);
	// };

    const retrieveUsernameHandler = (event: any) => {
		event.preventDefault();
		retrieveUsername(ssn, dob);
	};

	return (
		<>
			<div className="page">
				<Background />
				<Navigation />
				<div className="content">
					<div className="register box">
						<h2>Username Lookup</h2>
						<form className="form" onSubmit={retrieveUsernameHandler}>
							<input
								type="password"
								name="ssn"
								value={ssn}
								placeholder="SSN (#########)"
								onChange={ssnHandler}
							/>
                            <input
								name="dob"
								value={dob}
                                placeholder="Date of Birth (mm / dd / yyyy)"
								onFocus={(e) => (e.target.type = "date")}
								onChange={dobHandler}
							/>
							<button className="login-button" type="submit">Retrieve Username</button>
						</form>
						<h3 className="member">Return to Login Page</h3>
						<div className="form"><Link className="login-button" to="/login">Login</Link></div>
					</div>
					<Advertisement />
                </div>
                <Footer />
			</div>
		</>
	)
}

export default RetrieveUsername