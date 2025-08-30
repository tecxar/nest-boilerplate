import {
  BelongsTo,
  Column,
  DataType,
  ForeignKey,
  Table,
} from 'sequelize-typescript';
import { IcampaignUsers } from '../../interfaces/campaignUsers';
import BaseModel from '../baseModel';
import Campaigns from '../campaigns';
import User from '../users';

@Table({ tableName: 'campaigns' })
export default class CampaignUsers
  extends BaseModel<IcampaignUsers>
  implements IcampaignUsers
{
  @ForeignKey(() => User)
  @Column(DataType.INTEGER.UNSIGNED)
  userId: number;
  @BelongsTo(() => User)
  campaignUser: User;

  @ForeignKey(() => Campaigns)
  @Column(DataType.INTEGER.UNSIGNED)
  campaignId: number;
  @BelongsTo(() => Campaigns)
  campaign: Campaigns;
}
