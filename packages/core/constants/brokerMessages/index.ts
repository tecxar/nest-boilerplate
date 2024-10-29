export const Services = {
  CDR_SERVICE: 'CDR_SERVICE',
  INTEGRATION_SERVICE: 'INTEGRATION_SERVICE',
};

export const BrokerMessages = {
  userMs: {
    user: {
      addUser: 'add_user',
    },
  },
  crm: {
    client: {
      addClient: 'add_client',
    },
  },
  cdr: {
    processCdr: 'PROCESS-CDR',
  },
  integration: {
    ezsip: {
      login: 'LOGIN',
      logout: 'LOGOUT',
      agentReady: 'AGENT-READY',
      agentBreak: 'AGENT-BREAK',
      createAgent: 'CREATE-AGENT',
      updateAgent: 'UPDATE-AGENT',
      deleteAgent: 'DELETE-AGENT',
      createExtension: 'CREATE-EXTENSION',
      deleteExtension: 'DELETE-EXTENSION',
      allAgent: 'ALL-AGENT',
      createCampaign: 'CREATE-CAMPAIGN',
      updateCampaign: 'UPDATE-CAMPAIGN',
      CampaignById: 'CAMPAIGN-BY-ID',
      deleteBulkLeads: 'DELETE-BULK-LEADS',
      CampaignStartStop: 'CAMPAIGN-START-STOP',
      allCampaigns: 'ALL-CAMPAIGN',
      manualCall: 'MANUAL-CALL',
      clickToCall: 'CLICK-TO-CALL',
      endCall: 'END-CALL',
      pauseCall: 'PAUSE-CALL',
      listIVR: 'lIST-IVR',
      agentLiveStatus: 'AGENT-LIVE-STATUS',
      productivityReport: 'PRODUCTIVITY-REPORT',
      activityReport: 'ACTIVITY-REPORT',
      allBreak: 'ALL-BREAK',
    },
  },
};
