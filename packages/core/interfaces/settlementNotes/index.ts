export interface ISettlementNotes {
    id?: number;
    settlementid: number;
    module?: string;
    receiver: number;
    originator: number;
    content?: string;
    status?: string;
    remarks?: string;
    seenAt?: Date;
    isclient?: boolean;
    borrowerId: number;
    loanNumber: string;    
}