import React, { useContext } from "react";
import axios from "axios";
import { AuthContext } from "../../Context/AuthContext";
import { Account } from "../../Types/Account";

const AccountCard: React.FC<{account: Account}> = ({account}) => {

    return (
        <div>
            {/* Render name of account type here*/}

            <h1>{}</h1>
            <h2>{account.type}</h2>
            <h2>{account.balance}</h2>
        </div>
    )
}

export default AccountCard;