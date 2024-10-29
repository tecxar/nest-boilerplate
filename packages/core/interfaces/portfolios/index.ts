import { DatabaseObject } from "../baseObject";

export interface IPortfolios extends DatabaseObject {
  name: string;
  description?: string;
  isActive: boolean;
  clientId: number;
}
