import { IdObject } from "../idObject";

export interface IDialers extends IdObject {
    userId?: number;
    dialerId?: number;
    userName?: string;
    isActive: boolean;
    name?: string;
  }
  