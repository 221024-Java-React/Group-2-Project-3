import React, { useContext, useEffect, useState } from "react";
import { AuthContext } from "../../Context/AuthContext";
import Background from "../Background/Background";
import Footer from "../Footer/Footer";
import Navigation from "../Navigation/Navigation";

import "./LoanRequestPage.css"

const LoanRequestPage: React.FC = () => {
  const { loggedInUser, findAccounts, applyForLoan } = useContext(AuthContext);

  const [loanDescription, setLoanDescription] = useState<string>("");
  const [ownership, setOwnership] = useState<string>("");
  const [amount, setAmount] = useState<number>(0);

  const descriptionHandler = (event: any) => {
    setLoanDescription(event.target.value);
  };

  const ownerShipHandler = (event: any) => {
    setOwnership(event.target.value);
  };

  const amountHandler = (event: any) => {
    setAmount(event.target.value);
  }

  useEffect(() => {
    findAccounts();
  }, []);

  const submitHandler = () => {
    applyForLoan(loggedInUser, amount, loanDescription)
  }

  
  return (
    <div>
      <Background />
      <Navigation />
      <div className="container">
        <label >Name </label>
        <label className="select label">
          {`${loggedInUser.firstName} ${loggedInUser.lastName}`}
        </label>
        <label >SSN </label>
        <label className="select label">{loggedInUser.ssn}</label>
        <label >Birth Date </label>
        <label className="select label">{loggedInUser.dob}</label>
        <label >Occupation</label>
        <label className="select label">{loggedInUser.occupation}</label>
        <label >Income</label>
        <label className="select label">{loggedInUser.income}</label>
        <select className="label" onChange={ownerShipHandler} name="" id="">
          <option value="Purpose of Loan">Purpose of Loan</option>
          <option value="home">Home</option>
          <option value="car">Car</option>
          <option value="other">Other (please specify below)</option>
        </select>
        <textarea placeholder="If 'other' please specify reason for loan here" onChange={descriptionHandler} name="description"></textarea>
        <br />
        <br />
        <label className="label">Loan Amount</label>
        <input className="select label" type="number" onChange={amountHandler} name="amount"/>
        <select className="label" onChange={ownerShipHandler} name="" id="">
          <option value="property-ownership">Property Ownership</option>
          <option value="own">Own</option>
          <option value="rent">Rent</option>
        </select>
        <button className="loan-button" onClick={submitHandler}>Apply now</button>
      </div>
      <Footer />
    </div>
  );
};

export default LoanRequestPage;
