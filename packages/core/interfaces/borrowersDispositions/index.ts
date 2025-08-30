import { DatabaseObject } from '../baseObject';

export interface IBorrowersDispositions extends DatabaseObject {
  id?: number;
  borrowerId: number;
  loanNumber: string;
  dispositionId: number;
  subDispositionId: number;
  followUpDate?: Date;
  ptpDate?: Date;
  ptpAmount?: number;
  comments?: string;
  reminder?: boolean;
  reminderDate?: Date;
  callRefNo?: string;
}
