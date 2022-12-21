import React, { useContext } from "react";
import axios from "axios";
import { AuthContext } from "../../Context/AuthContext";
import { Account } from "../../Types/Account";
import "./AccountCard.css"

const AccountCard: React.FC<{account: Account}> = ({account}) => {

    return (
        // <div className="card-flex">
        //     <div className="card-flex-content">
        //         <h2 className="card-flex-content">{account.type}</h2>
        //         <h2>$10,124.96</h2>
        //     </div>
        // </div>
        
            <div className="card-flex-item">
                <div className="card-flex-wrapper">
                    <div className="card-flex-image">
                        <img src={"https://cdn-icons-png.flaticon.com/512/3037/3037156.png"} alt="img placeholder" />
                    </div>
                    <div className="card-flex-content">
                        <h3>{account.type}</h3>
                        <p>$10,234.96</p>
                        <a className="card-flex-button btn-block">Button</a>
                    </div>
                </div>
            </div>
        
    )
}

export default AccountCard;