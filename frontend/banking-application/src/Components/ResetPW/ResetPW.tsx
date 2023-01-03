import React from "react";
import { useState, useContext } from "react";
import { Link } from "react-router-dom";
import { AuthContext } from "../../Context/AuthContext";
import Advertisement from "../Advertisement/Advertisement";
import Background from "../Background/Background";
import Footer from "../Footer/Footer";

import Navigation from "../Navigation/Navigation";

const ResetPW: React.FC = () => {

    const [checked, setChecked] = useState<boolean>(false);
    const [validPassword, setValidPassword] = useState<boolean>(true);
    const [validConfirmPassword, setValidConfirmPassword] = useState<boolean>(true);

    const [email, setEmail] = useState<string>("");
    const [ssn, setSsn] = useState<string>("");
    const [password, setPassword] = useState<string>("");
    const [confirmPassword, setConfirmPassword] = useState<string>("");
    const { resetPassword, checkedUser } = useContext(AuthContext);

    const emailHandler = (event: any) => {
        setEmail(event.target.value);
    };

    const ssnHandler = (event: any) => {
        setSsn(event.target.value);
    };

    const passwordHandler = (event: any) => {
        setPassword(event.target.value);
    };

    const confirmPasswordHandler = (event: any) => {
        setConfirmPassword(event.target.value);
    }

    const isValidPassword = (password: string): boolean => {
        return (/[^\n\s\t\r]+/).test(password);
    }

    const resetPasswordHandler = (event: any) => {
        event.preventDefault();

        let valid = true;
        
        if (isValidPassword(password))
        {
            setValidPassword(true);

            if (password == confirmPassword)
            {
                setValidConfirmPassword(true);
            }
            else
            {
                setValidConfirmPassword(false);
                valid = false;
            }
        }
        else {
            setValidPassword(false);
            setValidConfirmPassword(true);
            valid = false;
        }

        if (valid)
        {
            resetPassword(email, ssn, password);
        }
        
        setChecked(true);
    };

    return (
        <>
            <div className="page">
                <Background />
                <Navigation />
                <div className="login-flex-container">
					<div className="login-flex-1">
                        <div className="login-box">
                        <h2>Reset Password</h2>
                        <form className="form" onSubmit={resetPasswordHandler}>
                            {(checkedUser.email == "" && checked) && (
                                <p className="invalid">Incorrect Email or SSN</p>
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
                                name="ssn"
                                value={ssn}
                                placeholder="SSN (#########)"
                                onChange={ssnHandler}
                                />
                                {!validPassword && <p className="invalid">Invalid Password</p>}
                                {!validConfirmPassword && <p className="invalid">Password And Confirm Password Must Match</p>}
                            <input
                                type="password"
                                name="password"
                                value={password}
                                placeholder="New Password"
                                onChange={passwordHandler}
                                />
                                <input
								type="password"
								name="confirm-password"
								value={confirmPassword}
								placeholder="Confirm Password"
								onChange={confirmPasswordHandler}
                            />  
                            <button className="login-button" type="submit">Reset Password</button>
                        </form>
                            {<p>{checkedUser.email != "" ? "Password reset successfully." : ""
                        /* "Enter correct information above to reset your password." */} </p>}
                        <h3 className="member">Return to Login Page</h3>
                        <div className="form"><Link className="login-button" to="/login">Login</Link></div>
                        </div>
                    </div>
                    <div className="login-flex-2">
						<Advertisement />
					</div>
                </div>
                <Footer />
            </div>
        </>
    )
}

export default ResetPW