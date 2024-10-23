export interface ICdr {
  leadId: string;
  number: number;
  userId: string;
  extension: number;
  mode: string;
  status: string;
  date: Date;
  hour: number;
  minute: number;
  duration: string;
  queueDuration: string;
  ringDuration: string;
  wrapupTime: string;
  queueName: string;
  listId: string;
  loanNumber: string;
  referenceId: string;
  processName: string;
  recordingFileName: string;
  isUnknown: boolean;
  customerId: number;
  customerName: string;
  startTime: string;
  endTime: string;
  direction: string;
  talkDuration: string;
  waitDuration: string;
}

export interface ICdrPayload {
  comments?: string;
  leadId?: string;
  campaignId?: string;
  agentId: string;
  extension: string;
  number: string;
  callUid: string;
  uId: string;
  subType: string;
  type: string;
  recordingUrl: string;
  status: string;
  mode: string;
  duration: string;
  talkSec: number;
  waitingSec: number;
  startTime: string;
  endTime: string;
  recordingId: string;
  domainUuid: string;
  leadDisplayName: string;
  callDirection: string;
  talkDuration: string;
  waitDuration: string;
  hour: number;
  minute: number;
  isUnknown: number;
  date: string;
  userId?: string;
  referenceId?: string;
  recordingFileName?: string;
}

export class IFetchAllCdr {
  readonly page: number = 1;
  readonly limit: number = 10;
}

export interface ICdrUpdatePayload extends Partial<ICdrPayload> {
  id: number;
}

export interface IPartition {
  partition_name: string;
}
