import { DatabaseObject } from '../baseObject';

export interface ILoanGroups extends DatabaseObject {
  id?: number;
  groupId?: string;
  clientBorrowerId?: string;
  name?: string;
  leaderId?: string;
  pos?: number;
  tos?: number;
  loanCounts?: number;
}
