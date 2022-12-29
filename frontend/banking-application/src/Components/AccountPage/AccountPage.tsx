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
            <AccountCard key={type} account={userAccounts[userAccounts.findIndex(a => a.type == type
                || (("" + a.type == "CHECKING" && type == 0) || ("" + a.type == "SAVINGS" && type == 1))
                || ("" + a.type == "LOAN" && type == 2))]} />
		</div>
	);
};

export default AccountPage;
