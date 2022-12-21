import React, { useContext, useEffect } from "react";
import axios from "axios";
import { AuthContext } from "../../Context/AuthContext";
import { Link } from "react-router-dom";
import AccountCard from "../AccountCard/AccountCard";

const Profile: React.FC = () => {

    const {loggedInUser, findAccounts, userAccounts} = useContext(AuthContext);
    
    useEffect(() => {
        findAccounts()
    }, [])

    return (
        <div>
            <h2>Welcome, {loggedInUser.firstName}</h2>

            {/*<button onClick={findAccounts}>Retrieve Accounts</button> */}

            {/* productData.map((product, index) => {
                            return (
                                <ProductCard key={index} itemId={product.itemId} imageUrl={product.imageUrl} name={product.name} description={product.description} price={product.price} amount={1} />
                            );
                        }) */}
            {userAccounts.map((account, index) => {
                return (
                    <AccountCard key={index} accountType={} />
                )
            })}
            
            )


            <AccountCard /> {/* How can we pass in CHECKING as the account type? */}

            <AccountCard /> {/* How can we pass in SAVINGS as the account type? */}

            <AccountCard /> {/* How can we pass in LOAN as the account type? */}

        </div>
    )
}

export default Profile;