import React, { useState, FC } from "react";
import axios from "axios";
import User from "../Types/User";
import { Account } from "../Types/Account";

export const defaultUser: User = {
    id: -1,
    firstName: "",
    lastName: "",
    email: "",
    password: "",
    type: -1,
    accounts: [],
    address: "",
    city: "",
    state: "",
    zip: -1,
    phone: "",
    occupation: "",
    income: -1,
    dob: "",
    ssn: -1,
    usCitizen: false,
    creditScore: -1
}

const defaultAccount: Account[] = [
    {   
        id: -1,
        user: defaultUser,
        balance: -1,
        type: 0,
        transactions: [],
        interestRate: -1,
        creationDate: ""
    },
    {   
        id: -1,
        user: defaultUser,
        balance: -1,
        type: 1,
        transactions: [],
        interestRate: -1,
        creationDate: ""
    },
    {   
        id: -1,
        user: defaultUser,
        balance: -1,
        type: 2,
        transactions: [],
        interestRate: -1,
        creationDate: ""
    }
]


const context = {
	loggedInUser: defaultUser,
    userAccounts: defaultAccount,
	login: (email: string, password: string) => { },
    logout: () => { },
    register: (email: string, password: string) => { },
    search: (value: string) => {},
    findAccounts: () => { }
};

export const AuthContext = React.createContext(context);

export const AuthContextProvider: FC<{ children: JSX.Element }> = ({ children }) => {

	const [loggedInUser, setLoggedInUser] = useState<User>(defaultUser);

    const [userAccounts, setUserAccounts] = useState<Account[]>([]);


	const loginHandler = async (userEmail: string, userPassword: string) => {

        try {
            
            const { data } = await axios.post<User>(
                'http://localhost:8000/user/login',
                {
                    email: userEmail,
                    password: userPassword
                }
            );

			setLoggedInUser(data);

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
        
        setLoggedInUser(defaultUser);
        // window.location.reload();
    };
    
    const registerHandler = async (userEmail: string, userPassword: string) => {

        try {

            const { data } = await axios.post(
                'http://localhost:8000/user/register',
                {
                    email: userEmail,
                    password: userPassword
                }
            );

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

    const findAccountsHandler = async () => {

        try {

            const { data } = await axios.get<Account[]>(
                `http://localhost:8000/account/all?id=${loggedInUser.id}`,
                {
                    headers: {
                        Accept: 'application/json'
                    }
                }

            );
            
            console.log("api call")
            console.log(data)
            setUserAccounts(data);

        } catch (error) {
            console.log(error)
        }

    }

	const contextValue = {
		loggedInUser,
        userAccounts,
		login: loginHandler,
        logout: logoutHandler,
        register: registerHandler,
        search: searchHandler,
        findAccounts: findAccountsHandler
	};

	return (
		<AuthContext.Provider value={contextValue}>{children}</AuthContext.Provider>
	);
};