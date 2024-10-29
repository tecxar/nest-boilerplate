import { IdObject } from "../idObject";

export interface IMerchants extends IdObject {
  name: string;
  contactPerson?: string;
  email?: string;
  mobile?: string;
  address1?: string;
  address2?: string;
  landmark?: string;
  pincode?: string;
  city?: string;
  state?: string;
  latitude?: string;
  longitude?: string;
  IsActive?: number;
}
