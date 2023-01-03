import React, { useContext, useEffect, useState } from "react";
import { AuthContext } from "../../Context/AuthContext";

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

  console.log(ownership);

  const submitHandler = () => {
    applyForLoan(loggedInUser, amount, loanDescription)
  }
  
  return (
    <div>
      <label>
        Loan application for{" "}
        {`${loggedInUser.firstName} ${loggedInUser.lastName}`}
      </label>

      <label>{loggedInUser.ssn}</label>
      <label>{loggedInUser.dob}</label>
      <label>{loggedInUser.occupation}</label>
      <label>{loggedInUser.income}</label>
      <label>Purpose of Loan</label>
      <textarea onChange={descriptionHandler} name="description"></textarea>
      <select onChange={ownerShipHandler} name="" id="">
        <option value="property-ownership">Property Ownership</option>
        <option value="own">Own</option>
        <option value="rent">Rent</option>
      </select>
      <input type="number" onChange={amountHandler} name="amount"/>
      <button onClick={submitHandler}>Apply now</button>
    </div>
  );
};

export default LoanRequestPage;
