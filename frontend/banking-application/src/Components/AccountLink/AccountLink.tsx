import React, { useState, useContext, useEffect } from "react";
import { Link } from "react-router-dom";
import { AuthContext } from "../../Context/AuthContext";
import { Account } from "../../Types/Account";

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
            <Link to={
                (account.type == 0 || ("" + account.type == "CHECKING")) ? '/checking' :
                (account.type == 1 || ("" + account.type == "SAVINGS")) ? '/saving' :
                (account.type == 2 || ("" + account.type == "LOAN")) ? '/loan' : '/'
            }><h2>{account.type}</h2></Link>
			<h3>Balance = ${balance}</h3>
		</div>
	)
}

export default AccountCard;