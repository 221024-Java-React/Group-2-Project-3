import { useState, useContext } from "react";
import { Link } from "react-router-dom";
import { AuthContext } from "../../Context/AuthContext";

import Navigation from "../Navigation/Navigation";

import "./Login.css";

const Login = () => {

    const [email, setEmail] = useState<string>("");
    const [password, setPassword] = useState<string>("");
    const { login } = useContext(AuthContext);

    const emailHandler = (event: any) => {
        setEmail(event.target.value);
    };

    const passwordHandler = (event: any) => {
        setPassword(event.target.value);
    };

    const loginHandler = (event: any) => {
        event.preventDefault();

        login(email, password);
    };

    return (
        <>
            <Navigation />
            <div className="content">
                <div className="login box">
                    <h2>Login</h2>
                    <form className="form" onSubmit={loginHandler}>
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
                        <button className="login-button" type="submit">Login</button>
                    </form>
                    <h3 className="member">Don't Have An Account?</h3>
                    <div className="form">
                        <Link className="login-button" to="/register">Create An Account</Link>
                    </div>
                </div>
            </div>
        </>
    );
};

export default Login;
