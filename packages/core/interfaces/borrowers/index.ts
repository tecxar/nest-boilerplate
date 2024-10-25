import { GenderTypeEnum } from '../../constants';

export interface IBorrowers {
  id?: number;
  name?: string;
  father_name?: string;
  mother_name?: string;
  gender?: GenderTypeEnum;
  age?: number;
  email?: string;
  pan?: string;
  address?: string;
  city_name?: string;
  state_name?: string;
  pincode?: number;
  borrower_occupation?: string;
  cibil_score?: number;
  mobile?: string;
  is_active?: boolean;
  voter_id?: string;
  driving_licence?: string;
  dob?: Date;
  marital_status?: string;
  aadhar?: string;
  community_religion?: string;
  passport_number?: string;
  employement_status?: string;
  employement_type?: string;
  company_name?: string;
  designation?: string;
  client_borrower_id?: string;
  uid?: string;
}
