import { Transaction } from "./Transaction";
import User from "./User";

export interface Account {
    id: number;
    user: User;
    balance: number;
    type: number;
    transactions: Transaction[];
    interestRate: number;
    creationDate: string;

}