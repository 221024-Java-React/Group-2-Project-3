import React, { useContext } from "react";
import axios from "axios";
import User from "../../Types/User";
import { defaultUser } from "../../Context/AuthContext";

const Profile: React.FC = () => {


    return (
        <div>
            <h2>{defaultUser.firstName}</h2>
        </div>
    )
}

export default Profile;