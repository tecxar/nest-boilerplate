import { ENUM } from 'sequelize';
import {
  BelongsTo,
  Column,
  DataType,
  Default,
  ForeignKey,
  Table,
} from 'sequelize-typescript';
import { CampaignTypeEnum } from '../../constants';
import { Icampaigns } from '../../interfaces/campaigns';
import BaseModel from '../baseModel';
import Clients from '../clients';
import Dialers from '../dialers';

@Table({ tableName: 'campaigns' })
export default class Campaigns
  extends BaseModel<Icampaigns>
  implements Icampaigns
{
  @ForeignKey(() => Clients)
  @Column(DataType.INTEGER.UNSIGNED)
  clientId: number;
  @BelongsTo(() => Clients)
  campaignsclient: Clients;

  @ForeignKey(() => Dialers)
  @Column(DataType.INTEGER.UNSIGNED)
  dialerId: number;
  @BelongsTo(() => Dialers)
  dialer: Dialers;

  @Column(DataType.STRING(100))
  name: string;

  @Column(DataType.STRING(100))
  dialerCampaignId: string;

  @Column({ type: DataType.BOOLEAN, defaultValue: false })
  isActive: boolean;

  @Column({
    type: ENUM(CampaignTypeEnum.Predictive, CampaignTypeEnum.Progressive),
  })
  declare campaignType: CampaignTypeEnum;

  @Default(0)
  @Column({ type: DataType.BOOLEAN, defaultValue: false })
  isCronActive: boolean;

  @Column(DataType.DECIMAL(13, 2))
  maxRatio: number;
}
