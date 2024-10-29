import { Disp_CategoryTypeEnum, DispositionTypeEnum } from '../../constants';
import { IdObject } from '../idObject';

export interface IDispoSubDispo extends IdObject {
  category?: Disp_CategoryTypeEnum;
  name: string;
  type: DispositionTypeEnum;
  parentId: number;
  isActive: boolean;
}
