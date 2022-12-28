import React, { useState, useContext } from "react";
import { AuthContext } from "../../Context/AuthContext";

import "./Profile.css";
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
        <div
          className="modal"
          style={{ display: showModal ? "block" : "none" }}
        >
          <h2>Your changes have been made</h2>
          <button onClick={hideModal}>close</button>
        </div>
        <div className="box">
          <form className="form" onSubmit={updateHandler}>
            <p className="left">First Name: {loggedInUser.firstName}</p>
            <input
              type="text"
              name="firstName"
              value={firstName}
              placeholder="First Name"
              onChange={firstNameHandler}
            />
            <p className="left">Last Name: {loggedInUser.lastName}</p>
            <input
              type="text"
              name="lastName"
              value={lastName}
              placeholder="Last Name"
              onChange={lastNameHandler}
            />
            <p className="left">Address: {loggedInUser.address}</p>
            <input
              type="text"
              name="address"
              value={address}
              placeholder="Address"
              onChange={addressHandler}
            />
            <p className="left">City: {loggedInUser.city}</p>
            <input
              type="text"
              name="city"
              value={city}
              placeholder="City"
              onChange={cityHandler}
            />
            <p className="left">State: {loggedInUser.state}</p>
            <input
              type="text"
              name="state"
              value={state}
              placeholder="State"
              onChange={stateHandler}
            />
            <p className="left">
              ZIP: {loggedInUser.zip != 0 && loggedInUser.zip}
            </p>
            <input
              type="text"
              name="zip"
              value={zip}
              placeholder="ZIP"
              onChange={zipHandler}
            />
            <p className="left">Phone #: {loggedInUser.phone}</p>
            <input
              type="text"
              name="phone"
              value={phone}
              placeholder="Phone #"
              onChange={phoneHandler}
            />
            <p className="left">Occupation: {loggedInUser.occupation}</p>
            <input
              type="text"
              name="occupation"
              value={occupation}
              placeholder="Occupation"
              onChange={occupationHandler}
            />
            <p className="left">Income: {loggedInUser.income}</p>
            <input
              type="text"
              name="income"
              value={income}
              placeholder="Income"
              onChange={incomeHandler}
            />
            <p className="left">DOB: {loggedInUser.dob}</p>
            <input
              type="text"
              name="dob"
              value={dob}
              placeholder="DOB"
              onChange={dobHandler}
            />
            <p className="left">
              SSN: {loggedInUser.ssn != 0 && loggedInUser.ssn}
            </p>
            <input
              type="text"
              name="ssn"
              value={ssn}
              placeholder="SSN"
              onChange={ssnHandler}
            />
            <button className="login-button" type="submit">
              Update Info
            </button>
          </form>
        </div>
      </div>
    </div>
  );
};

export default Profile;
