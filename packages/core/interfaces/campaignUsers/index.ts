import { DatabaseObject } from '../baseObject';

export interface IcampaignUsers extends DatabaseObject {
  campaignId: number;
  userId: number;
}
