export interface ISettlements {
    id?: number;
    borrowerId: number;
    loanNumber: string;
    waiverOnPos?: number;
    recoveryOnPos?: number;
    collectibleAmount?: number;
    waiverOnCollectibleAmount?: number;
    recoveryOnCollectibleAmount?: number;

}