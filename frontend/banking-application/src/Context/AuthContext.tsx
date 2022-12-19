import React, { useState, FC } from "react";

const context = {
	loggedIn: false,
	login: (email: string, password: string) => { },
	logout: () => { },
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

	const contextValue = {
		loggedIn,
		login: loginHandler,
		logout: logoutHandler,
	};

	return (
		<AuthContext.Provider value={contextValue}>{children}</AuthContext.Provider>
	);
};