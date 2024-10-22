
import { HttpStatus } from "@nestjs/common"

interface IResponse {
    status: HttpStatus
    message: string;
}

export interface IObjec<T> extends IResponse {
    row: T;
}

export interface IArray<T> extends IResponse  {
    count: Number
    rows: T[]
}

