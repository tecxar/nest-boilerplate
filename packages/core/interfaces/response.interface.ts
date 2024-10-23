export interface PaginatedResponse<T> {
  current: number;
  total: number;
  rows: T[];
}

export class PaginatedResponseType<T> implements PaginatedResponse<T> {
  current: number;
  total: number;
  rows: T[];

  constructor(current: number, total: number, rows: T[]) {
    this.current = current;
    this.total = total;
    this.rows = rows;
  }
}
