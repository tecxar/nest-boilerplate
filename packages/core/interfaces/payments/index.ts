import { DatabaseObject } from "../baseObject";

export interface IPayments extends DatabaseObject {
  borrowerId: number;
  clientName?: string;
  loanNumber: string;
  transactionId?: string;
  phone?: string;
  email?: string;
  amount: number;
  paymentDate?: Date;
  paymentSource?: string;
  paymentType?: string;
  paymentStatus?: string;
  status?: string;
  note?: string;
}
