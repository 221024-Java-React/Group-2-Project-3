import React, { useContext } from "react";
import axios from "axios";
import { AuthContext } from "../../Context/AuthContext";
import { Link } from "react-router-dom";
import AccountCard from "../AccountCard/AccountCard";

const Profile: React.FC = () => {

    const {loggedInUser} = useContext(AuthContext);

    return (
        <div>
            <h2>Welcome, {loggedInUser.firstName}</h2>

            {/*<h2>Your checking balance is ${loggedInUser.accounts[0].balance}</h2>
            <h2>Click <Link to="/checking">here</Link> to view account statement.</h2>

            <h2>Your savings balance is ${loggedInUser.accounts[1].balance}</h2>
            <h2>Click <Link to="/savings">here</Link> to view account statement.</h2>

            <h2>Your loan balance is ${loggedInUser.accounts[2].balance}</h2>
            <h2>Click <Link to="/loan">here</Link> to view account statement.</h2>*/}

            <AccountCard /> {/* How can we pass in CHECKING as the account type? */}

            <AccountCard /> {/* How can we pass in SAVINGS as the account type? */}

            <AccountCard /> {/* How can we pass in LOAN as the account type? */}

        </div>
    )
}

export default Profile;