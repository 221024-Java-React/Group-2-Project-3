import React, { useState, useContext } from "react";
import { AuthContext } from "../../Context/AuthContext";
import AccountCard from "../AccountCard/AccountCard";

import './Profile.css';
import Background from "../Background/Background";
import Navigation from "../Navigation/Navigation";

const Profile: React.FC = () => {

	const [firstName, setFirstName] = useState<string>("");
	const [lastName, setLastName] = useState<string>("");
	const [address, setAddress] = useState<string>("");
	const [city, setCity] = useState<string>("");
	const [state, setState] = useState<string>("");
	const [zip, setZip] = useState<string>("");
	const [phone, setPhone] = useState<string>("");
	const [occupation, setOccupation] = useState<string>("");
	const [income, setIncome] = useState<string>("");
	const [dob, setDob] = useState<string>("");
	const [ssn, setSsn] = useState<string>("");
	const [usCitizen, setUsCitizen] = useState<string>("");

	const firstNameHandler = (event: any) => { setFirstName(event.target.value); };
	const lastNameHandler = (event: any) => { setLastName(event.target.value); };
	const addressHandler = (event: any) => { setAddress(event.target.value); };
	const cityHandler = (event: any) => { setCity(event.target.value); };
	const stateHandler = (event: any) => { setState(event.target.value); };
	const zipHandler = (event: any) => { setZip(event.target.value); };
	const phoneHandler = (event: any) => { setPhone(event.target.value); };
	const occupationHandler = (event: any) => { setOccupation(event.target.value); };
	const incomeHandler = (event: any) => { setIncome(event.target.value); };
	const dobHandler = (event: any) => { setDob(event.target.value); };
	const ssnHandler = (event: any) => { setSsn(event.target.value); };
	const usCitizenHandler = (event: any) => { setUsCitizen(event.target.value); };

	const { loggedInUser } = useContext(AuthContext);

	const updateHandler = (event: any) => {
		event.preventDefault();

		// updateInfo(email, password);
	};

	return (
		<div className="page">
			<Background />
			<Navigation />
			<div className="content">
				<h2>Welcome, {loggedInUser.firstName}</h2>
				<div className="box">
					<form className="form" onSubmit={updateHandler}>
						<input type="text" name="firstName" value={firstName} placeholder="First Name" onChange={firstNameHandler} />
						<input type="text" name="lastName" value={lastName} placeholder="Last Name" onChange={lastNameHandler} />
						<input type="text" name="address" value={address} placeholder="Address" onChange={addressHandler} />
						<input type="text" name="city" value={city} placeholder="City" onChange={cityHandler} />
						<input type="text" name="state" value={state} placeholder="State" onChange={stateHandler} />
						<input type="text" name="zip" value={zip} placeholder="ZIP" onChange={zipHandler} />
						<input type="text" name="phone" value={phone} placeholder="Phone #" onChange={phoneHandler} />
						<input type="text" name="occupation" value={occupation} placeholder="Occupation" onChange={occupationHandler} />
						<input type="text" name="income" value={income} placeholder="Income" onChange={incomeHandler} />
						<input type="text" name="dob" value={dob} placeholder="DOB" onChange={dobHandler} />
						<input type="text" name="ssn" value={ssn} placeholder="SSN" onChange={ssnHandler} />
						<input type="text" name="usCitizen" value={usCitizen} placeholder="US Citizen" onChange={usCitizenHandler} />
						<button className="login-button" type="submit">Update Info</button>
					</form>
				</div>
			</div>
		</div>
	);
}

export default Profile;