import React, { useContext } from "react";
import axios from "axios";
import { AuthContext } from "../../Context/AuthContext";

const AccountCard: React.FC = () => {

    const {loggedInUser} = useContext(AuthContext);

    return (
        <div>
            {/* Render name of account type here*/}

            <h2><em>Balance</em></h2>
            <h2>${loggedInUser.accounts[0].balance}</h2>
        </div>
    )
}

export default AccountCard;