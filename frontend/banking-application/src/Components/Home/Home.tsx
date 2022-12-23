import { useContext, useEffect } from "react";
import { AuthContext } from "../../Context/AuthContext";
import AccountLink from "../AccountLink/AccountLink";

import Background from "../Background/Background";
import Navigation from "../Navigation/Navigation";

const Home = () => {

	const { loggedInUser, findAccounts, userAccounts } = useContext(AuthContext);

	useEffect(() => {
		findAccounts()

	}, []);

	return (
		<div className="page">
			<Background />
			<Navigation />
			<div className="content">
				<h2>Welcome, {loggedInUser.firstName}</h2>
				{userAccounts.map((account) => {
					return (<AccountLink key={account.type} account={account} />)
				})}
			</div>
		</div>
	);
};

export default Home;
