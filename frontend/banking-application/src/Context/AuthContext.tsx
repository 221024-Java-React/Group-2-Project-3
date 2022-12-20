import React, { useState, FC } from "react";
import axios from "axios";
import User from "../Types/User";

export const defaultUser: User = {
    id: -1,
    firstName: "Testfirst",
    lastName: "Testlast",
    email: "test@email.com",
    password: "password",
    type: 1,
    accounts: [],
    address: "123 Test St.",
    city: "Testcity",
    state: "TX",
    zip: 11111,
    phone: "111-111-1111",
    occupation: "Test Occupation",
    income: 50000,
    dob: "1977/01/01",
    ssn: 123456789,
    usCitizen: true,
    creditScore: 800
}

const context = {
	loggedIn: false,
	login: (email: string, password: string) => { },
    logout: () => { },
    register: (email: string, password: string) => { },
    search: (value: string) => {},
};

export const AuthContext = React.createContext(context);

export const AuthContextProvider: FC<{ children: JSX.Element }> = ({ children }) => {

	const [loggedIn, setLoggedIn] = useState<boolean>(false);

	const loginHandler = async (userEmail: string, userPassword: string) => {

        try {
            
            // const { data } = await axios.post(
            //     'http://localhost:8000/user/login',
            //     {
            //         email: userEmail,
            //         password: userPassword
            //     }
            // );

			setLoggedIn(true);

		} catch (e) {
			console.log(e);
        }
        
        // window.location.reload();
	};

	const logoutHandler = async () => {

		try {

            // const { data } = await axios.post(
            //     'http://localhost:8000/user/logout',
            //     {}
            // );

		} catch (e) {
			console.log(e);
        }
        
        setLoggedIn(false);
        // window.location.reload();
    };
    
    const registerHandler = async (userEmail: string, userPassword: string) => {

        try {

            // const { data } = await axios.post(
            //     'http://localhost:8000/user/register',
            //     {
            //         email: userEmail,
            //         password: userPassword
            //     }
            // );

        } catch (error) {
            console.log(error)   
        }

        // window.location.reload();
    }

    const searchHandler = async (searchValue: string) => {

        try {

            // const { data } = await axios.post(
            //     'http://localhost:8000/search',
            //     {
            //         value: searchValue,
            //     }
            // );

        } catch (error) {
            console.log(error)   
        }

        // window.location.reload();
    }

	const contextValue = {
		loggedIn,
		login: loginHandler,
        logout: logoutHandler,
        register: registerHandler,
        search: searchHandler,
	};

	return (
		<AuthContext.Provider value={contextValue}>{children}</AuthContext.Provider>
	);
};