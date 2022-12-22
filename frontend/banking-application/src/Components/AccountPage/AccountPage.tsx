import { useContext, useEffect, useState } from "react";
import { AuthContext } from "../../Context/AuthContext";
import AccountCard from "../AccountCard/AccountCard";

import Background from "../Background/Background";
import Navigation from "../Navigation/Navigation";

const AccountPage: React.FC<{ type: number }> = ({ type }) => {

	const { findAccounts, userAccounts } = useContext(AuthContext);

	useEffect(() => {
		findAccounts();

	}, []);

	return (
		<div className="page">
			<Background />
			<Navigation />
			<div className="content">
				<AccountCard key={userAccounts[type].type} account={userAccounts[type]} />
			</div>
		</div>
	);
};

export default AccountPage;
