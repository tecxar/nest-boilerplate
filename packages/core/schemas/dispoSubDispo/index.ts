import {
  AllowNull,
  Column,
  DataType,
  Index,
  Table
} from 'sequelize-typescript';
import { Disp_CategoryTypeEnum, DispositionTypeEnum } from '../../constants';
import { IDispoSubDispo } from '../../interfaces/dispoSubDispo';
import BaseModel from '../baseModel';

@Table({ tableName: 'dispo_sub_dispo' })
export default class DispoSubDispo
  extends BaseModel<IDispoSubDispo>
  implements IDispoSubDispo {
  @AllowNull(false)
  @Column(
    DataType.ENUM(Disp_CategoryTypeEnum.Contacted, Disp_CategoryTypeEnum.ContactedOthers, Disp_CategoryTypeEnum.Notcontacted),
  )
  declare category: Disp_CategoryTypeEnum;

  @AllowNull(false)
  @Column(DataType.STRING(30))
  @Index('idx_name')
  declare name: string;

  @Column(DataType.STRING)
  declare isActive: boolean;

  @Column(DataType.INTEGER.UNSIGNED)
  declare parentId: number;

  @Column(DataType.ENUM(DispositionTypeEnum.disposition, DispositionTypeEnum.disposition))
  declare type: DispositionTypeEnum;
}
