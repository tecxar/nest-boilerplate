import { Disp_CategoryTypeEnum, DispositionTypeEnum } from '../../constants';

export interface IDispoSubDispo {
  id?: number;
  category?: Disp_CategoryTypeEnum;
  name: string;
  type: DispositionTypeEnum;
  parentId: number;
  isActive: boolean;
}
