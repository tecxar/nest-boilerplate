import { DatabaseObject } from "../baseObject";

export interface ISettlementHistory extends DatabaseObject {
  borrowerId: number;
  settlementId: number;
  loanNumber: string;
  createdByUserId: number;
  createdByName: string;
  userRoleId: number;
  userRole: string;
  amount: number;
  status: string;
  comment?: string;
  remarks?: string;
  waiverOnPos?: number;
  recoveryOnPos?: number;
  collectibleAmount?: number;
  waiverOnCollectibleAmount?: number;
  recoveryOnCollectibleAmount?: number;
  clientStatus?: string;
  clientId: number;
  docKey?: string;
  docName?: string;
  updatedByClientId?: number;
  createByClientId?: number;
  suggestedAmount?: number;
}
