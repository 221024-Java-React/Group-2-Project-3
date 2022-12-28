import React from "react";
import { useState, useContext } from "react";
import { Link } from "react-router-dom";
import { AuthContext } from "../../Context/AuthContext";
import Advertisement from "../Advertisement/Advertisement";
import Background from "../Background/Background";
import Footer from "../Footer/Footer";

import Navigation from "../Navigation/Navigation";

import './Register.css'

const Register: React.FC = () => {

    const [validEmail, setValidEmail] = useState<boolean>(true);
    const [validPassword, setValidPassword] = useState<boolean>(true);
    const [successfulRegister, setSuccessfulRegister] = useState<boolean>(false);

	const [email, setEmail] = useState<string>("");
	const [password, setPassword] = useState<string>("");
	const { register } = useContext(AuthContext);

	const emailHandler = (event: any) => {
		setEmail(event.target.value);
	};

	const passwordHandler = (event: any) => {
		setPassword(event.target.value);
    };
    
    const isValidEmail = (email: string) : boolean => {
        return (/\w[a-zA-Z0-9]*@\w+.\w+/).test(email);
    }

    const isValidPassword = (password: string): boolean => {
        return (/[^\n\s\t\r]+/).test(password);
    }

	const registerHandler = (event: any) => {
        event.preventDefault();

        let valid = true;
        
        if (isValidEmail(email))
            setValidEmail(true);
        else {
            setValidEmail(false);
            valid = false;
        }
        
        if (isValidPassword(password))
            setValidPassword(true);
        else {
            setValidPassword(false);
            valid = false;
        }

        if (valid)
        {
            register(email, password);
            setSuccessfulRegister(true); // TODO check if successfully created account from response
        }
	};

	return (
		<>
			<div className="page">
				<Background />
				<Navigation />
				<div className="content">
					<div className="register box">
						<h2>Register</h2>
                        <form className="form" onSubmit={registerHandler}>
                            {successfulRegister && <p className="success">Account Creation Successful!</p>}
                            {!validEmail && <p className="invalid">Invalid Email</p>}
							<input
								type="text"
								name="email"
								value={email}
								placeholder="Email"
								onChange={emailHandler}
                            />
                            {!validPassword && <p className="invalid">Invalid Password</p>}
							<input
								type="password"
								name="password"
								value={password}
								placeholder="Password"
								onChange={passwordHandler}
                            />
							<button className="login-button" type="submit">Create Account</button>
						</form>
						<h3 className="member">Already Have An Account?</h3>
						<div className="form"><Link className="login-button" to="/login">Login</Link></div>
					</div>
					<Advertisement />
                </div>
                <Footer />
			</div>
		</>
	)
}

export default Register