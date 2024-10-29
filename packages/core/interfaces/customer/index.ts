export interface ICustomerFile {
  loanNumber: string;
  mobile: string;
  customerName: string;
  fatherName: string;
  gender: string;
  email: string;
  settlementEmail: string;
  customerClientId: string;
  pan: string;
  alternateContact1: string;
  alternateContact2: string;
  mailingAddress: string;
  mailingCity: string;
  mailingPin: string;
  mailingState: string;
  permanentAddress: string;
  permanentCity: string;
  permanentPin: string;
  permanentState: string;
  residenceOwnership: string;
  communityReligion: string;
  maritalStatus: string;
  customerOccupation: string;
  employerName: string;
  employerAddress: string;
  cibilScore: number;
  coApplicant1: string;
  coApplicant2: string;
  guarantor1: string;
  guarantor1Contact: string;
  guarantor2: string;
  guarantor2Contact: string;
  guarantor1Address: string;
  guarantor2Address: string;
  reference1: string;
  reference1Contact: string;
  reference1Address: string;
  reference2: string;
  reference2Contact: string;
  reference2Address: string;
  agreementID: string;
  crmNo: string;
  loanType: string;
  loanAmount: number;
  disbursedDate: string;
  productName: string;
  supplierName: string;
  EMIAmount: number;
  totalEMIs: number;
  EMICycleDt: string;
  EMIEndDt: string;
  EMIStartDt: string;
  bucket: string;
  CurrentDPDBucket: string;
  otherLoanDetails: string;
  totalBounces: number;
  bounceChargesOutstanding: number;
  interestOutstanding: number;
  penaltyOutstanding: number;
  principalOutstanding: number;
  totalOutstanding: number;
  totalEMIOverDue: number;
  EMIOverdueAmount: number;
  unpaidEMIAmount: number;
  offerEMIAmount: number;
  waiverProposed: number;
  lastPaymentDate: string;
  previousPaymentHistory: string;
  futurePrincipal: number;
  maxSettlementAmount: number;
  vintageBand: string;
  motherName: string;
  applicantVoterId: string;
  applicantDrivingLicence: string;
  applicantDob: string;
  applicantPassportNumber: string;
  currentAddressLandmark: string;
  currentAddressTelephone: string;
  currentAddressCity: string;
  currentAddressMobileNumber: string;
  currentAddressState: string;
  currentAddressPincode: string;
  currentAddressEmail: string;
  permanentAddressName: string;
  permanentAddressMobile: string;
  permanentAddressPersonName: string;
  permanentAddressTelephoneNumber: string;
  permanentAddressLandmark: string;
  permanentAddressEmail: string;
  occupationDesignation: string;
  occupationBusinessConstitution: string;
  occupationOfficeAddress: string;
  occupationCompanyPersonName: string;
  occupationCompanyName: string;
  officeAddressLandmark: string;
  officeMobile: string;
  officeCity: string;
  officeEmailId: string;
  officeState: string;
  officePincode: string;
  officeWebsite: string;
  officeTelephone: string;
  officeGstn: string;
  prefferedAddressType: string;
  prefferedAddressRegNo: string;
  prefferedAddressUdhyamRegno: string;
  prefferedRegisteredAddress: string;
  prefferedAddressDateOfIncorporation: string;
  prefferedAddressTelephone: string;
  prefferedAddressLandmark: string;
  prefferedAddressMobile: string;
  prefferedAddressCity: string;
  prefferedAddressEmailId: string;
  prefferedAddressState: string;
  prefferedAddressPinCode: string;
  prefferedAddressWebsite: string;
  coApplicantVoterId: string;
  coApplicantDrivingLicence: string;
  coApplicantMotherName: string;
  coApplicantDob: string;
  coApplicantPassportNumber: string;
  coApplicantPan: string;
  coApplicantFatherName: string;
  coApplicantGender: string;
  coApplicantMaritalStatus: string;
  coApplicantLandmark: string;
  coApplicantTelephone: string;
  coApplicantCity: string;
  coApplicantMobile: string;
  coApplicantState: string;
  coApplicantPincode: string;
  coApplicantEmailId: string;
  loanDetailGoldQuantityGrms: number;
  loanDetailPurityInCt: number;
  loanDetailValuationInInr: number;
  portfolioType: string;
  clientCustomerID: string;
  productType: string;
}

// interfaces/customer.ts

export interface ICustomers {
  loanNumber: string; // Unique identifier for the loan
  mailingState: string; // State of the customer's mailing address
  customerName: string; // Name of the customer
  mobile: string; // Customer's mobile number
  errors: string;
}

// expected headers for csv validation
export interface IExpectedHeaders {
  loanNumber: string; // Unique identifier for the loan
  mailingState: string; // State of the customer's mailing address
  customerName: string; // Name of the customer
  mobile: string; // Customer's mobile number
}

// Interface for incorrect records with error descriptions
export interface IErrorRecord {
  loanNumber: string; // Unique identifier for the loan
  mailingState: string; // State of the customer's mailing address
  customerName: string; // Name of the customer
  mobile: string; // Customer's mobile number
  errors: string;
}

export interface ICSVData {
  correctData: ICustomers[];
  incorrectData: ICustomers[];
}
