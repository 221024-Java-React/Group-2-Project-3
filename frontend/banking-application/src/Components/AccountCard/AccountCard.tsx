import React, { useState, useContext, useEffect } from "react";
import { AuthContext } from "../../Context/AuthContext";
import { Account } from "../../Types/Account";
import "./AccountCard.css"

const AccountCard: React.FC<{ account: Account }> = ({ account }) => {

	const [balance, updateBalance] = useState<number>(0.0);

	const [deposit, setDeposit] = useState<string>("");
	const [withdraw, setWithdraw] = useState<string>("");
	const [transferAccount, setTransferAccount] = useState<string>("");
	const [transferFunds, setTransferFunds] = useState<string>("");
	const [isViewable, setIsViewable] = useState<boolean>(false);
	const idOffset: number = (account.type === 0 || ("" + account.type === "CHECKING"))? 178661410496:
	(account.type === 1 || ("" + account.type === "SAVINGS"))? 577924434622:
	(account.type === 2 || ("" + account.type === "LOAN"))? 231627902615: 0;




	const depositHandler = (event: any) => { setDeposit(event.target.value); };
	const withdrawHandler = (event: any) => { setWithdraw(event.target.value); };
	const transferAccountHandler = (event: any) => { setTransferAccount(event.target.value); };
	const transferFundsHandler = (event: any) => { setTransferFunds(event.target.value); };

	const { userAccounts, depositFunds, withdrawFunds, depositTransfer, withdrawTransfer } = useContext(AuthContext);

	const viewDetailsHandler = (event: any) => {
		event.preventDefault();
		console.log(isViewable);
		if(isViewable) setIsViewable(false);
		else setIsViewable(true)
	};

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

	const transferUpdateHandler = (event: any) => {
		event.preventDefault();

		let startIndex = 0;

		while (startIndex < transferFunds.length && isNaN(+transferFunds[startIndex]))
			startIndex++;

		let endIndex = transferFunds.indexOf('.');

		endIndex = (endIndex >= 0 && endIndex + 3 < transferFunds.length) ? (endIndex + 3) : transferFunds.length;

		if (startIndex < endIndex) {
			account.balance = Math.abs(parseFloat(transferFunds.substring(startIndex, endIndex)));
			account.balance = Math.floor(account.balance * 100) / 100;

			let typeNumber: number;
			let typeString: string;

			switch (transferAccount) {
				case "checking":
					typeNumber = 0;
					typeString = "CHECKING";
					break;
				case "saving":
					typeNumber = 1;
					typeString = "SAVINGS";
					break;
				case "loan":
					typeNumber = 2;
					typeString = "LOAN";
					break;
				default:
					typeNumber = -1;
					typeString = "";
					break;
			}

			if (typeNumber >= 0) {
				let index: number = 0;

				while (index < userAccounts.length) {
					if (userAccounts[index].type == typeNumber || "" + userAccounts[index].type == typeString)
						break;
					else
						index++;
				}

				if (index < userAccounts.length) {
					withdrawTransfer(account);

					userAccounts[index].balance = account.balance;

					depositTransfer(userAccounts[index]);

					updateBalance(balance - account.balance);
				}
			}
		}

	};

	useEffect(() => {
		updateBalance(account.balance);

	}, []);

	return (

		<div className="">
			<div className="flex-container">
				<div className="flex-item">
					<h2>{account.type}</h2>
					<h3>Balance = ${balance}</h3>
					<h3>Transaction History</h3>
					{account.transactions.length == 0 && <p>No Transactions History For Account</p>}
					<ul>
						{account.transactions.map((transaction) =>
							<li key={transaction.id}>
								<span>Type: {transaction.description}</span>
								<span>Amount: {transaction.amount}</span>
								<span>Date: {transaction.date}</span>
								<span>Balance: {transaction.balanceAfterTransaction}</span>
							</li>
						)}
					</ul>
				</div>
				<div className="flex-item">
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
				<div className="flex-item">
					<h3>Transfer</h3>
					<form className="form" onSubmit={transferUpdateHandler}>
						<select name="transferAccounts" value={transferAccount} onChange={transferAccountHandler}>
							<option value=""></option>
							{(account.type != 0 && ("" + account.type != "CHECKING")) && <option value="checking">Checking</option>}
							{(account.type != 1 && ("" + account.type != "SAVINGS")) && <option value="saving">Savings</option>}
							{(account.type != 2 && ("" + account.type != "LOAN")) && <option value="loan">Loan</option>}
						</select>
						<input type="text" name="transferFunds" value={transferFunds} placeholder="$100.00" onChange={transferFundsHandler} />
						<button className="login-button" type="submit">Transfer Funds</button>
					</form>
				</div>
			</div>
			<div className="box">
				<h3>Account Details</h3>
				<form className="form">
					<p>{isViewable? (account.id + idOffset): "********" + ("" + (account.id + idOffset)).substring(8, 12)} </p>
					<button className="login-button" onClick={viewDetailsHandler}>View Account Details</button>
				</form>
			</div>
		</div>
	)
}

export default AccountCard;