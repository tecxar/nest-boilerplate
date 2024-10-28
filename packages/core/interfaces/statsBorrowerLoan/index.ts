export interface IStatsBorrowerLoan {
    id?: number;
    borrowerId: string;
    loanNumber: string;
    monthYear: number;
    ptpAmount?: number;
    raised?: number;
    raisedAmount?: number;
    approved?: number;
    approvedAmount?: number;
    receivedAmount?: number;
    received?: number;
    payments?: number;
    paymentsAmount?: number;    
}