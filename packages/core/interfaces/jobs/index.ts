export interface ICreateJobs {
  job_id: string;
  job_type: string;
  client_id: number;
  total_records?: number;
  correct_records?: number;
  incorrect_records?: number;
  insertedCount?: number;
  last_inserted_record?: string;
  progress_percentage?: number;
  status?: 'waiting' | 'pending' | 'completed' | 'failed';
  error_msg?: string;
  error_file_path?: string;
}

export interface IJobDetails {
  id: number;
  createdBy: string | null;
  createdAt: string;
  updatedBy: string | null;
  updatedAt: string;
  jobId: string;
  job_type: string;
  client_id: number;
  total_records: number;
  correct_records: number;
  incorrect_records: number;
  insertedCount: number;
  last_inserted_record: string;
  progress_percentage: number;
  status?: 'waiting' | 'pending' | 'completed' | 'failed';
  error_msg: string | null;
  error_file_path: string;
}

export interface IJobProgress {
  id: number;
  createdBy?: number | null;
  createdAt: Date;
  updatedBy?: number | null;
  updatedAt: Date;
  jobId: string;
  job_type: string;
  client_id: number;
  total_records: number;
  correct_records: number;
  incorrect_records: number;
  insertedCount?: number;
  last_inserted_record?: string | null;
  progress_percentage?: number;
  status?: 'waiting' | 'pending' | 'completed' | 'failed';
  error_msg?: string | null;
  error_file_path?: string | null;
  file_path?: string | null;
}

export interface IJobInitial {
  file_key: string;
  client_id: number;
  file_path: string | null;
}
