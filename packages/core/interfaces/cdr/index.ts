export interface ICdr {
  mobile: string;
  userId: string;
  extension: number;
  mode: string;
  status: string;
  date: string;
  hour: number;
  minute: number;
  duration: number;
  queueDuration: number;
  ringDuration: number;
  loanNumber: string;
  referenceId: string;
  campaignName: string;
  isUnknown: boolean;
  borrowerId: number;
  borrowerName: string;
  startTime: string;
  endTime: string;
  direction: string;
  talkDuration: number;
  waitDuration: number;
}

export interface ICdrPayload {
  agentId: string;
  extension: number;
  number: string;
  callUid: string;
  recordingUrl: string;
  status: string;
  mode: string;
  duration: number;
  talkSec: number;
  waitingSec: number;
  startTime: string;
  endTime: string;
  callDirection: string;
  talkDuration: number;
  waitDuration: number;
  referenceId?: string;
  queueDuration: number;
  ringDuration: number;
  uId: string;
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
