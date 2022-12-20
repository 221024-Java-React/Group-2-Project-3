import React, { useContext } from "react";
import axios from "axios";
import { AuthContext } from "../../Context/AuthContext";

const Profile: React.FC = () => {

    const {loggedInUser} = useContext(AuthContext);

    return (
        <div>
            <h2>{loggedInUser.firstName}</h2>
        </div>
    )
}

export default Profile;