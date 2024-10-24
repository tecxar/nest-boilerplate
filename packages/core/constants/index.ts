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
  vendor='vendor'
}

export enum CampaignTypeEnum {
  Predictive = 'Predictive',
  Progressive = 'Progressive',
}
