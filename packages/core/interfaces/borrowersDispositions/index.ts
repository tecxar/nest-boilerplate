export interface IBorrowersDispositions {
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
