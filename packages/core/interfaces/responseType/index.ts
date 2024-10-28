import { HttpStatus } from '@nestjs/common';

interface IResponse {
  status: HttpStatus;
  message: string;
}

export interface IObject<T> extends IResponse {
  row: T;
}

export interface IArray<T> {
  count: Number;
  rows: T[];
}

export interface IFindAllRes<T> extends IResponse {
  count: Number;
  rows: T[];
}
