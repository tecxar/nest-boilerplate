import { DatabaseObject } from '../baseObject';

export interface IUserTaskCustomers extends DatabaseObject {
  name?: string;
  loanNumber?: string;
  key?: number;
  isAttended?: Boolean;
  isPending?: Boolean;
  agentTaskId?: number;
  borrowerId?: number;
  disposition?: string;
  subDisposition?: string;
  comments?: string;
  callRefNo?: string;
}
