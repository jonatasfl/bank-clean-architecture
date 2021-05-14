import { v4 as uuidv4 } from "uuid";

export default class Account {
  id: string;

  owner: string;

  balance: number;

  dailyWithdrawLimit: number;

  active: boolean;

  type: number;

  createdAt: Date;

  constructor(
    owner: string,
    balance: number,
    dailyWithdrawLimit: number,
    active: boolean,
    type: number
  ) {
    this.id = uuidv4();
    this.owner = owner;
    this.balance = balance;
    this.dailyWithdrawLimit = dailyWithdrawLimit;
    this.active = active;
    this.type = type;
    this.createdAt = new Date();
  }
}
