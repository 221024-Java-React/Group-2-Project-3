import React, { useState, useContext } from "react";
import { AuthContext } from "../../Context/AuthContext";
import { Account } from "../../Types/Account";
import "./AccountCard.css"

const AccountCard: React.FC<{ account: Account }> = ({ account }) => {

	const [deposit, setDeposit] = useState<string>("");
	const [withdraw, setWithdraw] = useState<string>("");

	const depositHandler = (event: any) => { setDeposit(event.target.value); };
	const withdrawHandler = (event: any) => { setWithdraw(event.target.value); };

	const { loggedInUser, depositFunds, withdrawFunds } = useContext(AuthContext);

	const depositUpdateHandler = (event: any) => {
		event.preventDefault();

		if (deposit) {
			account.balance = +deposit;
			depositFunds(account);
		}
	};

	const withdrawUpdateHandler = (event: any) => {
		event.preventDefault();

		if (withdraw) {
			account.balance = +withdraw;
			withdrawFunds(account);
		}
	};

	return (

		<div className="box">
			<h2>{account.type}</h2>
			<h3>{account.balance}</h3>
			<h2>Update</h2>
			<h3>Deposit</h3>
			<form className="form" onSubmit={depositUpdateHandler}>
				<input type="text" name="deposit" value={deposit} placeholder="Deposit $" onChange={depositHandler} />
				<button className="login-button" type="submit">Deposit Funds</button>
			</form>
			<h3>Withdraw</h3>
			<form className="form" onSubmit={withdrawUpdateHandler}>
				<input type="text" name="withdraw" value={withdraw} placeholder="Last Name" onChange={withdrawHandler} />
				<button className="login-button" type="submit">Withdraw Funds</button>
			</form>
		</div>
	)
}

export default AccountCard;