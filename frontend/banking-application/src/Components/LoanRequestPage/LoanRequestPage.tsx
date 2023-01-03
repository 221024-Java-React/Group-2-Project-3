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
        <label className="label">
          Loan application for{" "}
          {`${loggedInUser.firstName} ${loggedInUser.lastName}`}
        </label>

        <label className="label">{loggedInUser.ssn}</label>
        <label className="label">{loggedInUser.dob}</label>
        <label className="label">{loggedInUser.occupation}</label>
        <label className="label">{loggedInUser.income}</label>
        <select onChange={ownerShipHandler} name="" id="">
          <option value="property-ownership">Property Ownership</option>
          <option value="own">Own</option>
          <option value="rent">Rent</option>
        </select>
        <label className="label">Purpose of Loan</label>
        <textarea onChange={descriptionHandler} name="description"></textarea>
        
        <input type="number" onChange={amountHandler} name="amount"/>
        <button onClick={submitHandler}>Apply now</button>
      </div>
      <Footer />
    </div>
  );
};

export default LoanRequestPage;
