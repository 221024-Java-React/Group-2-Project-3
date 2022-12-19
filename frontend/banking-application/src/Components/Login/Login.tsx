import { useState, useContext } from "react";
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
            <div className="login">
                <h2>Login</h2>
                <form onSubmit={loginHandler}>
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
                    <button type="submit">Login</button>
                </form>
                <div className="member">
                    <h4>Don't Have An Account?</h4>
                    <a href="/register">Sign Up</a>
                </div>
            </div>
        </>
    );
};

export default Login;
