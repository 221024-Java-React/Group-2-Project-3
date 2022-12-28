import React, { useState, useContext, useEffect } from "react";
import { Link } from "react-router-dom";
import { Account } from "../../Types/Account";

const AccountCard: React.FC<{ account: Account }> = ({ account }) => {

	const [balance, updateBalance] = useState<number>(0.0);

	useEffect(() => {
		updateBalance(account.balance);

    }, []);

	return (

        <div className="flex-item">
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