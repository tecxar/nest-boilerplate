import { DatabaseObject } from '../baseObject';

export interface ResponseBase {
  success: boolean;
  message: string;
}

export interface PaginatedResponse<T> extends ResponseBase {
  count: number;
  current: number;
  rows: T[];
}

export interface ObjectResponse<T> extends ResponseBase {
  obj: T;
}

export interface IJob extends DatabaseObject {
  id: number;
  type: string;
  clientId: number;
  totalRecords?: number;
  correctRecords?: number;
  incorrectRecords?: number;
  insertedCount?: number | 0;
  lastInsertedIndex?: number;
  progressPercentage?: number;
  status?:
    | 'waiting'
    | 'pending'
    | 'completed'
    | 'failed'
    | 'inprogress'
    | 'paused';
  errorMsg?: string | null;
  errorFileKey?: string | null;
  fileKey: string;
  isPaused?: boolean;
}

export interface IJobResult {
  result: string;
  errorFile?: string | null;
}

export interface IJobProgress {
  jobId: string;
  insertedCount: number;
  totalRecords: number;
  progressPercentage: number;
  lastInsertedIndex?: number;
  isPaused?: boolean;
}

export interface IJobResponse {
  job: IJob;
  jobResult: IJobResult;
  jobProgress: IJobProgress;
}

export interface ICsvOptions {
  fileKey: string;
  lastIndex?: number;
  jobId: string;
}

export type JobStatus =
  | 'completed'
  | 'failed'
  | 'delayed'
  | 'prioritized'
  | 'waiting'
  | 'waitingChildren'
  | 'unknown'
  | 'discarded';
