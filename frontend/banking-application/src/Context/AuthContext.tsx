import React, { useState, FC } from "react";
import axios from "axios";
import User from "../Types/User";
import { Account } from "../Types/Account";

const defaultUser: User = {
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

const defaultAccounts: Account[] = [
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
    userAccounts: defaultAccounts,
    login: (email: string, password: string) => { },

    logout: () => { },
    register: (email: string, password: string) => { },
    resetPassword: (userEmail: string, userSsn: string, userPassword: string) => { },
    retrieveUsername: (userSsn: string, userDob: string) => { },
    search: (value: string) => { },
    findAccounts: () => { },
    updateInfo: () => {},
	depositFunds: (account: Account) => { },
	withdrawFunds: (account: Account) => { },
	depositTransfer: (account: Account) => { },
    withdrawTransfer: (account: Account) => { },

};

export const AuthContext = React.createContext(context);

export const AuthContextProvider: FC<{ children: JSX.Element }> = ({ children }) => {

	const [loggedInUser, setLoggedInUser] = useState<User>(defaultUser);

	const [userAccounts, setUserAccounts] = useState<Account[]>(defaultAccounts);


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

	const retrieveUsernameHandler = async (userSsn: string, userDob: string) => {

		try {

			const { data } = await axios.post<User>(
				`http://localhost:8000/user/retrieve-username`,
				{					
					ssn: userSsn,
					dob: userDob.substring(0,10) + "T00:00:00"
				}
			);

			// const { data } = await axios.get<Account[]>(
			// 	`http://localhost:8000/account/all?id=${loggedInUser.id}`,
			// 	{
			// 		headers: {
			// 			Accept: 'application/json'
			// 		}
			// 	}
			// );

		} catch (error) {
			console.log(error)
		}
	}


    const resetPasswordHandler = async (userEmail: string, userSsn: string, userNewPassword: string) => {

        try {

            const { data } = await axios.put(
                'http://localhost:8000/user/reset-password',
                {
                    email: userEmail,
                    ssn: userSsn,
                    password: userNewPassword
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

	const depositTransferHandler = async (account: Account) => {

		try {

			const { data } = await axios.patch<Account>(
                `http://localhost:8000/account/deposit-transfer`, account);

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

	const withdrawTransferHandler = async (account: Account) => {

		try {

			const { data } = await axios.patch<Account>(
				`http://localhost:8000/account/withdraw-transfer`, account);

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
		retrieveUsername: retrieveUsernameHandler,
        resetPassword: resetPasswordHandler,
        search: searchHandler,
        findAccounts: findAccountsHandler,
        updateInfo: updateInfoHandler,
		depositFunds: depositFundsHandler,
		withdrawFunds: withdrawFundsHandler,
		depositTransfer: depositTransferHandler,
		withdrawTransfer: withdrawTransferHandler

	};

	return (
		<AuthContext.Provider value={contextValue}>{children}</AuthContext.Provider>
	);
};