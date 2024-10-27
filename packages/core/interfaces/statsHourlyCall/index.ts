export interface IStatsHourlyCall {
    id?: number;
    dayMonthYear: number;
    hourSlot: number;
    inboundCounts ?: number;
    inboundConnected ?: number;
    inboundMissed ?: number;
    inboundReattempted ?: number;
    inboundReAttemptedConnected ?: number;
    inboundUniqueMobile ?: number;
    inboundPos ?: number;
    inboundTos ?: number;
    inboundUnknownCalls ?: number;
    outboundCounts ?: number;
    outboundConnected ?: number;
    outboundMissed ?: number;
    outboundPos ?: number;
    outboundTos ?: number;
    outboundUniqueMobile ?: number;
    outboundBusy ?: number;
    outboundNotAnswered ?: number;
    outboundOthers ?: number;
 
    
}