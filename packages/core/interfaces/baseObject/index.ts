export interface DatabaseObject extends ObjectKeys {
    id?: number;
    createdBy?: number;
    updatedBy?: number;
    createdAt?: Date;
    updatedAt?: Date;
  }
  
  interface ObjectKeys {
    [name: string]: any;
  }
  