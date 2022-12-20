import React, { useContext } from "react";
import axios from "axios";
import { AuthContext } from "../../Context/AuthContext";

const TransactionCard: React.FC = () => {

    const {loggedInUser} = useContext(AuthContext);

    return (
        <div>
            
        </div>
    )
}

export default TransactionCard;