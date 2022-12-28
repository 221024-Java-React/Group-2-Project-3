import { Account } from "./Account";

export interface Transaction {
    id: number;
    account: Account;
    amount: number;
    description: string;
    date: string;
    balanceAfterTransaction: number;
}