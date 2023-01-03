import React, { useState, useContext } from "react";
import { AuthContext } from "../../Context/AuthContext";

import "./Profile.css";
import Background from "../Background/Background";
import Navigation from "../Navigation/Navigation";
import Footer from "../Footer/Footer";

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
	const [showModal, setShowModal] = useState<boolean>(false);

	const firstNameHandler = (event: any) => {
		setFirstName(event.target.value);
	};
	const lastNameHandler = (event: any) => {
		setLastName(event.target.value);
	};
	const addressHandler = (event: any) => {
		setAddress(event.target.value);
	};
	const cityHandler = (event: any) => {
		setCity(event.target.value);
	};
	const stateHandler = (event: any) => {
		setState(event.target.value);
	};
	const zipHandler = (event: any) => {
		setZip(event.target.value);
	};
	const phoneHandler = (event: any) => {
		setPhone(event.target.value);
	};
	const occupationHandler = (event: any) => {
		setOccupation(event.target.value);
	};
	const incomeHandler = (event: any) => {
		setIncome(event.target.value);
	};
	const dobHandler = (event: any) => {
		setDob(event.target.value);
	};
	const ssnHandler = (event: any) => {
		setSsn(event.target.value);
	};

	const { loggedInUser, updateInfo } = useContext(AuthContext);

	const updateHandler = (event: any) => {
		event.preventDefault();

		loggedInUser.firstName = firstName ? firstName : loggedInUser.firstName;
		loggedInUser.lastName = lastName ? lastName : loggedInUser.lastName;
		loggedInUser.address = address ? address : loggedInUser.address;
		loggedInUser.city = city ? city : loggedInUser.city;
		loggedInUser.state = state ? state : loggedInUser.state;
		loggedInUser.zip = zip ? +zip : loggedInUser.zip;
		loggedInUser.phone = phone ? phone : loggedInUser.phone;
		loggedInUser.occupation = occupation ? occupation : loggedInUser.occupation;
		loggedInUser.income = income ? +income : loggedInUser.income;
		loggedInUser.dob = dob ? dob : loggedInUser.dob;
		loggedInUser.ssn = ssn ? +ssn : loggedInUser.ssn;

		updateInfo();
		revealModal();
	};

	const hideModal = () => {
		setShowModal(false);
	};

	const revealModal = () => {
		setShowModal(true);
	};

	return (
		<div className="page">
			<Background />
			<Navigation />
			<div className="content">
				<h2>Welcome, {loggedInUser.firstName}</h2>
				<div className="modal" style={{ display: showModal ? "block" : "none" }}>
					<h2>Your changes have been made</h2>
					<button className="login-button modal-button" onClick={hideModal}>
						close
					</button>
				</div>
				
			</div>
			<form className="profile-flex-container" onSubmit={updateHandler}>
					<div className="profile-flex-item">
						<input className="flex-content" type="text" name="firstName" value={firstName} onChange={firstNameHandler}
							placeholder={loggedInUser.firstName ? loggedInUser.firstName : "First Name"} />
					</div>
					<div className="profile-flex-item">
						<input className="flex-content" type="text" name="lastName" value={lastName} onChange={lastNameHandler}
							placeholder={loggedInUser.lastName ? loggedInUser.lastName : "Last Name"} />
					</div>
					<div className="profile-flex-item">
						<input className="flex-content" type="text" name="address" value={address} onChange={addressHandler}
							placeholder={loggedInUser.address ? loggedInUser.address : "Address"} />
					</div>
					<div className="profile-flex-item">
						<input className="flex-content" type="text" name="city" value={city} onChange={cityHandler}
							placeholder={loggedInUser.city ? loggedInUser.city : "City"} />
					</div>
					<div className="profile-flex-item">
						<input className="flex-content" type="text" name="state" value={state} onChange={stateHandler}
							placeholder={loggedInUser.state ? loggedInUser.state : "State"} />
					</div>
					<div className="profile-flex-item">
						<input className="flex-content" type="text" name="zip" value={zip} onChange={zipHandler}
							placeholder={(loggedInUser.zip != 0 && loggedInUser.zip) ? "" + loggedInUser.zip : "ZIP"} />
					</div>
					<div className="profile-flex-item">
						<input className="flex-content" type="text" name="phone" value={phone} onChange={phoneHandler}
							placeholder={loggedInUser.phone ? loggedInUser.phone : "Phone #"} />
					</div>
					<div className="profile-flex-item">
						<input className="flex-content" type="text" name="occupation" value={occupation} onChange={occupationHandler}
							placeholder={loggedInUser.occupation ? loggedInUser.occupation : "Occupation"} />
					</div>
					<div className="profile-flex-item">
						<input className="flex-content" type="text" name="income" value={income} onChange={incomeHandler}
							placeholder={(loggedInUser.income != 0 && loggedInUser.income) ? "" + loggedInUser.income : "Income"} />
					</div>
					{/* <div className="profile-flex-item">
						<input type="text" name="dob" value={dob} onChange={dobHandler}
							placeholder={loggedInUser.dob ? loggedInUser.dob : "DOB"} />
					</div> */}
					<div className="profile-flex-item">
						<input className="flex-content" type="text" name="ssn" value={ssn} onChange={ssnHandler}
							placeholder={(loggedInUser.ssn != 0 && loggedInUser.ssn) ? "" + loggedInUser.ssn : "SSN"} />
					</div>
					<div className="profile-flex-item">
					</div>
					<div className="profile-flex-item">
						<button className="login-button flex-content" type="submit">Update Info</button>
					</div>
				</form>
			<Footer />
		</div>
	);
};

export default Profile;
