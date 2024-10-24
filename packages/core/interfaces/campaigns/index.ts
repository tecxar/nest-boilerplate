export interface Icampaigns {
    id?: number;
    clientId:number;
    dialerId:number
    name: string;
    dialerCampaignId:string;
    isActive:boolean;
    isCronActive:boolean;
    maxRatio:number;
    campaignType:string;
  }
  