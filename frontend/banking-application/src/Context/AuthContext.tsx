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
    resetPassword: (userEmail: string, userSsn: string, userPassword: string) => { },
    search: (value: string) => {},
    findAccounts: () => { },
    updateInfo: (user: User) => {},
	depositFunds: (account: Account) => { },
	withdrawFunds: (account: Account) => { },

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
	}


    const resetPasswordHandler = async (userEmail: string, userSsn: string, userPassword: string) => {

        try {

            const { data } = await axios.put(
                'http://localhost:8000/user/reset-password',
                {
                    email: userEmail,
                    ssn: userSsn,
                    password: userPassword
                }
            );

        } catch (error) {
            console.log(error)   
        }
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

			setUserAccounts(data);

		} catch (error) {
			console.log(error)
		}
	}

	const updateInfoHandler = async () => {

		try {

			const { data } = await axios.put<User>(
				`http://localhost:8000/user/update`, loggedInUser);

			setLoggedInUser(data);

		} catch (error) {
			console.log(error);
		}

	}

	const depositFundsHandler = async (account: Account) => {

		try {

			const { data } = await axios.patch<Account>(
                `http://localhost:8000/account/deposit`, account);

			for (let index = 0; index < userAccounts.length; index++) {
				if (userAccounts[index].id == account.id) {
					userAccounts[index] = data;
					break;
				}
			}

		} catch (error) {
			console.log(error);
		}

	}

	const withdrawFundsHandler = async (account: Account) => {

		try {

			const { data } = await axios.patch<Account>(
				`http://localhost:8000/account/withdraw`, account);

			for (let index = 0; index < userAccounts.length; index++) {
				if (userAccounts[index].id == account.id) {
					userAccounts[index] = data;
					break;
				}
			}

		} catch (error) {
			console.log(error);
		}

	}

	const contextValue = {
		loggedInUser,
		userAccounts,
		login: loginHandler,
        logout: logoutHandler,
        register: registerHandler,
        resetPassword: resetPasswordHandler,
        search: searchHandler,
        findAccounts: findAccountsHandler,
        updateInfo: updateInfoHandler,
		depositFunds: depositFundsHandler,
		withdrawFunds: withdrawFundsHandler,
	};

	return (
		<AuthContext.Provider value={contextValue}>{children}</AuthContext.Provider>
	);
};