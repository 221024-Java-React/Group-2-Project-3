import { Account } from "./Account";

export interface User {
    id: number;
    firstName: string;
    lastName: string;
    email: string;
    password: string;
    type: number;
    accounts: Account[];
    address: string;
    city: string;
    state: string;
    zip: number;
    phone: string;
    occupation: string;
    income: number;
    dob: string;
    ssn: number;
    usCitizen: boolean;
    creditScore: number;
}

export default User