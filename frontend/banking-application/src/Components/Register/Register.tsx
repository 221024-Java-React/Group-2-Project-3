import React from "react";
import { useState, useContext } from "react";
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
            <div className="register">
                <h2>Register</h2>
                <form onSubmit={registerHandler}>
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
                <div className="member">
                    <h4>Already Have An Account?</h4>
                    <a href="/login">Login</a>
                </div>
            </div>
        </>
    )
}

export default Register