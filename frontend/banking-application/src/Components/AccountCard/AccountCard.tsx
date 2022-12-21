import React, { useContext } from "react";
import axios from "axios";
import { AuthContext } from "../../Context/AuthContext";
import { Account } from "../../Types/Account";

const AccountCard: React.FC<{ account: Account }> = ({ account }) => {

	const updateHandler = (event: any) => {
		event.preventDefault();
	};

	return (

		<div className="box">
			<h2>{account.type}</h2>
			<h2>{account.balance}</h2>
			<form className="form" onSubmit={updateHandler}>
				<button className="login-button" type="submit">Update Info</button>
			</form>
		</div>
	)
}

export default AccountCard;