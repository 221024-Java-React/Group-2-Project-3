import React, { useState, useContext, useEffect } from "react";
import { AuthContext } from "../../Context/AuthContext";
import { Account } from "../../Types/Account";
import "./AccountCard.css"

const AccountCard: React.FC<{ account: Account }> = ({ account }) => {

	const [balance, updateBalance] = useState<number>(0.0);

	const [deposit, setDeposit] = useState<string>("");
	const [withdraw, setWithdraw] = useState<string>("");

	const depositHandler = (event: any) => { setDeposit(event.target.value); };
	const withdrawHandler = (event: any) => { setWithdraw(event.target.value); };

	const { loggedInUser, depositFunds, withdrawFunds } = useContext(AuthContext);

	const depositUpdateHandler = (event: any) => {
		event.preventDefault();

		let startIndex = 0;

		while (startIndex < deposit.length && isNaN(+deposit[startIndex]))
			startIndex++;
		
		let endIndex = deposit.indexOf('.');

		endIndex = (endIndex >= 0 && endIndex + 3 < deposit.length) ? (endIndex + 3) : deposit.length;

		if (startIndex < endIndex) {
			account.balance = Math.abs(parseFloat(deposit.substring(startIndex, endIndex)));
			depositFunds(account);
			updateBalance(balance + account.balance);
		}
	};

	const withdrawUpdateHandler = (event: any) => {
		event.preventDefault();

		let startIndex = 0;

		while (startIndex < withdraw.length && isNaN(+withdraw[startIndex]))
			startIndex++;
		
		let endIndex = withdraw.indexOf('.');

		endIndex = (endIndex >= 0 && endIndex + 3 < withdraw.length) ? (endIndex + 3) : withdraw.length;

		if (startIndex < endIndex) {
			account.balance = Math.abs(parseFloat(withdraw.substring(startIndex, endIndex)));
			account.balance = Math.floor(account.balance * 100) / 100;
			withdrawFunds(account);
			updateBalance(balance - account.balance);
		}
	};

	useEffect(() => {
		updateBalance(account.balance);

	}, []);

	return (

		<div className="box">
			<h2>{account.type}</h2>
			<h3>Balance = ${balance}</h3>
			<h2>Update</h2>
			<h3>Deposit</h3>
			<form className="form" onSubmit={depositUpdateHandler}>
				<input type="text" name="deposit" value={deposit} placeholder="$100.00" onChange={depositHandler} />
				<button className="login-button" type="submit">Deposit Funds</button>
			</form>
			<h3>Withdraw</h3>
			<form className="form" onSubmit={withdrawUpdateHandler}>
				<input type="text" name="withdraw" value={withdraw} placeholder="$100.00" onChange={withdrawHandler} />
				<button className="login-button" type="submit">Withdraw Funds</button>
			</form>
		</div>
	)
}

export default AccountCard;