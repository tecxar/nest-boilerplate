import { DatabaseObject } from '../baseObject';

export interface ISettlements extends DatabaseObject {
  borrowerId: number;
  loanNumber: string;
  waiverOnPos?: number;
  recoveryOnPos?: number;
  collectibleAmount?: number;
  waiverOnCollectibleAmount?: number;
  recoveryOnCollectibleAmount?: number;
}
