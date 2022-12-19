import React, { useState, FC } from "react";
import axios from "axios";

const context = {
	loggedIn: false,
	login: (email: string, password: string) => { },
    logout: () => { },
    register: (email: string, password: string) => { },
};

export const AuthContext = React.createContext(context);

export const AuthContextProvider: FC<{ children: JSX.Element }> = ({ children }) => {

	const [loggedIn, setLoggedIn] = useState<boolean>(false);

	const loginHandler = async (email: string, password: string) => {

        try {
            
            // TODO validate email & password

			// TODO make axios calls

			setLoggedIn(true);

		} catch (e) {
			console.log(e);
		}
	};

	const logoutHandler = async () => {

		try {

			// TODO make axios calls

			setLoggedIn(false);

		} catch (e) {
			console.log(e);
		}
    };
    
    const registerHandler = async (email: string, password: string) => {

        const userEmail = email;
        const userPassword = password;

        try {
            const {data} = await axios.post(
                'http://localhost:8000/user/register',
                {
                    email: userEmail,
                    password: userPassword
                }
            )
        } catch (error) {
            console.log(error)   
        }

        window.location.reload();
    }

	const contextValue = {
		loggedIn,
		login: loginHandler,
        logout: logoutHandler,
        register: registerHandler,
	};

	return (
		<AuthContext.Provider value={contextValue}>{children}</AuthContext.Provider>
	);
};