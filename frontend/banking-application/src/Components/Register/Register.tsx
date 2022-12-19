import React from "react";
import { useState } from "react";
import axios from "axios";


const Register: React.FC = () => {

    const [userEmail, setUserEmail] = useState<string>("")
    const [userPassword, setUserPassword] = useState<string>("")

    const handleInputChange = (e: React.ChangeEvent<HTMLInputElement>): void => {
        if(e.target.name === "userEmail") {
            setUserEmail(e.target.value)
        } else if (e.target.name === "userPassword") {
            setUserPassword(e.target.value)
        }
    }

    const handleSubmit = async () => {
        try {
            const {data} = await axios.post(
                'http://localhost:8000/user/register',
                {
                    email: userEmail,
                    password: userPassword
                }
            )
        } catch (error) {
            console.log(error)   
        }

        window.location.reload();
    }
    
    return (
        <div>
            <label htmlFor="userEmail">Email</label>
            <input onChange={handleInputChange} name="userEmail" type="text" />
            <label htmlFor="userPassword">Password</label>
            <input onChange={handleInputChange} name="userPassword" type="password" />
            <button onClick={handleSubmit}>Register</button>
        </div>
    )
}

export default Register