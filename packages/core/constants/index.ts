export const Services = {
  AWS_SERVICE: 'AWS_SERVICE',
  DOCUMENT_SERVICE: 'DOCUMENT_SERVICE',
  CLIENT_SERVICE: 'CLIENT_SERVICE',
  EMAIL_SERVICE: 'EMAIL_SERVICE',
  AUTH: 'AUTH',
  USER_SERVICE: 'USER_SERVICE',
  SETTLEMENTS_SERVICE: 'SETTLEMENTS_SERVICE',
  RULE_SERVICE: 'RULE_SERVICE',
};

export const BrokerMessages = {
  AWS: {
    S3: {
      GeneratePreSignedReadURL: 'aws-s3-generate-pre-signed-read-url',
      GeneratePreSignedWriteURL: 'aws-s3-generate-pre-signed-write-url',
      UploadObject: 'aws-s3-upload-object',
      DeleteObject: 'aws-s3-delete-object',
      DownloadObject: 'aws-s3-download-object',
      UploadBufferObject: 'aws-s3-upload-buffer-object',
      health: 's3-health-check',
    },
  },
  DOCUMENT: {
    DocumentGenerateNotice: 'document-generate-notice',
    UploadSignature: 'upload-signature',
    ConvertPdf: 'convert-pdf',
    health: 'document-health-check',
  },
  WEBHOOKS: {
    MultipleGenerateNotices: 'multiple-generate-notices',
    MultipleUploadSignature: 'multiple-upload-signature',
    webhookUpdateSettlements: 'webhook-update-settlement',
  },
  CLIENT: {
    health: 'client-health-check',
    createClient: 'create-client',
    findClient: 'get-client-details',
    listClient: 'list-client-settlement',
  },
  USER: {
    health: 'user-health-check',
    createUser: 'create-user',
    findUser: 'get-user-details',
    findAllUsers: 'get-all-user-list',
    findUserByClearduClientId: 'get-user-by-client-id',
    findUserByRoleId: 'get-user-by-role-id',
    findAllUsersList: 'list-get-all-user-data',
    changePassword: 'change-password',
    updateUser: 'update-user',
  },
  EMAIL: {
    sendEmail: 'send-email',
    settlementApprovalEmail: 'settlement-approval-email',
    health: 'email-health-check',
  },
  SETTLEMENT: {
    health: 'settlement-health-check',
    createSettlement: 'create-settlement',
    findAllSettlement: 'find-all-settlement',
    settlementHistory: 'settlement-history',
    updateSettlement: 'update-settlement',
    updateCollectibleAmount: 'update-collectible-amount',
    bulkUpdateSettlement: 'bulk-update-settlement',
    findSettlementUserMapByUserId: 'find-settlement-user-mapping',
    timeline: 'timeline',
    monthlyReport: 'monthly-report',
    updatePaymentStatus: 'update-payment-status',
    settlementStatusReport: 'settlement-status-report',
    getApprovalTATReport: 'approval-tat-report',
    getRoleUserTATReport: 'role-user-tat-report',
    reOpenSettlement: 're-open-settlement',
    addRemarks: 'add-remarks',
    getRemarks: 'get-remarks',
    getCategory: 'category-document',
    getUploadDocument: 'get-upload-doc-by-category',
    documentCategory: 'upload-doc-by-category',
    uploadDocumentBySettlementId: 'upload-DocumentBy-Settlement-Id',
    ganrateQueryForCollection: 'ganrate-Query-For-Collection',
    ganratRemarksFromCollection: 'ganrate-Remarks-From-Collection',
    getProductTypeLIstAll: 'get-product-type-lIst-all',
  },
  ROLES: {
    findAllRoles: 'find-all-roles',
    findOneRole: 'find-one-role',
    createRoles: 'create-role',
    updateRole: 'update-role',
    deleteRole: 'delete-role',
  },
  RULES: {
    createRule: 'create-rule',
    updateRule: 'update-rule',
    deleteRule: 'delete-rule',
    findAndCountAllRule: 'find-and-count-all-rule',
    findAllRule: 'find-all-rule',
    findOneRule: 'find-one-rule',
    health: 'rule-health-check',
    findAllFields: 'find-all-rule-fields',
    ruleProductTypes: 'rule-product-types',
  },
  CITY: {
    findAllCity: 'get-all-city',
    findCityByState: 'get-all-city-of-state',
    findAllState: 'get-all-state',
  },
  PAYMENTS: {
    createPayments: 'create-payments',
  },
};

export enum ActInactiveEnumType {
  active = 'active',
  inactive = 'inactive',
}

export enum UserTypeEnum {
  internal = 'internal',
  agency = 'agency',
  vendor = 'vendor',
}

export enum CampaignTypeEnum {
  Predictive = 'Predictive',
  Progressive = 'Progressive',
}

export enum GenderTypeEnum {
  male = 'male',
  female = 'female',
}

export enum DispositionTypeEnum {
  disposition = 'disposition',
  subDisposition = 'subDisposition',
}

export enum Disp_CategoryTypeEnum {
  Contacted = 'Contacted',
  Notcontacted = 'Not contacted',
  ContactedOthers = "Contacted - Others"
}

export const userModules =
{
  Dashboard: 1,
  ClientDetail: 2,
  ClientAnalysis: 3,
  Process: 4,
  BulkMessage: 5,
  Customer: 6,
  DeactiveCustomers: 7,
  AllDisposition: 8,
  AgentProcessMapping: 9,
  Payment: 10,
  Templates: 11,
  CallSummary: 12,
  AgentActivity: 13,
  Merchant: 14,
  Logs: 15,
  CommunicationStats: 16,
  Permissions: 17,
  EmployeeDirectory: 18,
  RolesManagement: 19,
  OrganizationChart: 20,
  Settlement: 21,
  NewProcessConfig: 22,
  CustomerNoticeView: 23,
  Reports: 24,
}

export const dispoSubDispo = {
  dispositions: {
    PTP: 1,
    HotPTP: 2,
    CallBack: 3,
    Followup: 4,
    WrongNumber: 5,
    RefusedToPay: 6,
    Dispute: 7,
    FinalSettlement: 8,
    HungUp: 9,
    Language: 10,
    NoContact: 11,
    AlreadyPaid: 12,
    Paid: 13,
    InboundCallQueryCall: 14
  },
  subDispositions: {
    ptp_EMIpayment: 101,
    ptp_Fullpayment: 102,
    hotPtp_EMIpayment: 103,
    hotPtp_Fullpayment: 104,
    CallBack_Busy: 105,
    CallBack_NetworkCoverage: 106,
    CallBack_NoAnswer: 107,
    CallBack_SwitchedOff: 108,
    FollowUp_ReminderCall: 109,
    FollowUp_CallReceivedByOtherPerson: 110,
    WrongNumber: 111,
    RefusedToPay_FinancialIssue: 112,
    RefusedToPay_BrokenPTP: 113,
    RefusedToPay_Defaulter: 114,
    RefusedToPay_ThirdParty: 115,
    Dispute_AlreadyPaid: 116,
    Dispute_VehicleRepossessed: 117,
    Dispute_VehicleStolen: 118,
    FinalSettlement: 119,
    HungUp_BlankCall: 120,
    HungUp_AbusiveCaller: 121,
    HungUp_CustomerDisconnectedCall: 122,
    LanguageBarrier: 123,
    noContact_busy: 124,
    noContact_NoAnswerRinging: 125,
    noContactSwitchedOff: 126,
    noContactOutOfNetworkArea: 127,
    noContactIncomingServiceBarred: 128,
    noContactTempNotInService: 129,
    alreadyPaid_Online: 130,
    alreadyPaid_Branch: 131,
    alreadyPaid_CashToAgent: 132,
    alreadyPaid_LastMonthPaid: 133,
    reFundToPay_NoIntensionToPay: 134,
    reFundToPay_MedicalIssue: 135,
    reFundToPay_CustomerExpired: 136,
    reFundToPay_BussinessClosed: 137,
    reFundToPay_BusinessLoss: 138,
    reFundToPay_Fraud: 139,
    paid_OncallPaid: 140,
    CallBack: 141,
    CallBack_ReminderCall: 142,
    QueryCall: 143,
    FollowUp_Reminder: 144,
  }
}