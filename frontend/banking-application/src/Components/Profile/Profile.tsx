import React, { useContext, useEffect } from "react";
import axios from "axios";
import { AuthContext } from "../../Context/AuthContext";
import { Link } from "react-router-dom";
import AccountCard from "../AccountCard/AccountCard";
import { Account } from "../../Types/Account";

const Profile: React.FC = () => {

    const {loggedInUser, findAccounts, userAccounts} = useContext(AuthContext);
    
    useEffect(() => {
        findAccounts()
        
    }, [])

    console.log(loggedInUser)

    return (
        <div>
            <h2>Welcome, {loggedInUser.firstName}</h2>

            {/* <button onClick={findAccounts}>Retrieve Accounts</button> */}

            {userAccounts.map((account)=> {
                return (
                    
                    <AccountCard key={account.type} account={account} />
                )
                
            })}
            
        </div>
    )

        
}

export default Profile;