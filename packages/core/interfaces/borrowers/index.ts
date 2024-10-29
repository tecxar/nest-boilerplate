import { GenderTypeEnum } from '../../constants';
import { DatabaseObject } from '../baseObject';

export interface IBorrowers extends DatabaseObject {
  name?: string;
  fatherName?: string;
  motherName?: string;
  gender?: GenderTypeEnum;
  age?: number;
  email?: string;
  pan?: string;
  address?: string;
  cityName?: string;
  stateName?: string;
  pincode?: number;
  borrowerOccupation?: string;
  cibilScore?: number;
  mobile?: string;
  isActive?: boolean;
  voterId?: string;
  drivingLicence?: string;
  dob?: Date;
  maritalStatus?: string;
  aadhar?: string;
  communityReligion?: string;
  passportNumber?: string;
  employementStatus?: string;
  employementType?: string;
  companyName?: string;
  designation?: string;
  clientBorrowerId?: string;
}
