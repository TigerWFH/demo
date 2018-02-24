// 直接呈现给UI的数据模型，业务放在reducer中处理
export interface IFileInfo {
    fileKey?: string;
    fileName?: string;
}

// 对应组件class Info
export interface IInfo {
    ticketId?: string;
    type?: string;
    totalFines?: string;
    orderId?: string;
    trackingId?: string;
    logisticsCompony?: string;
    paymentTime?: string;
    logisticsTime?: string;
    turnover?: string;
    customerAddress?: string;
    createFileList?: IFileInfo[];
    createRemark?: string;
}
// 对应组件Audit
export interface IAudit {
    appealImageList?: IFileInfo[];
    appealRemark?: string;
    auditList?: any[];
}

export interface IButtonInfo {
    buttonText?: string;
    buttonType?: string;
    path?: string;
}
export interface IFineTicket {
    ticketId?: string;
    sellerId?: string;// 卖家ID
    storeId?: string;// 商店ID
    storeType?: string;
    storeName?: string;
    type?: string;
    status?: string;
    keyInfo?: string;
    receivingTime?: string;
    buttonList?: IButtonInfo[];
}
// 对应组件Table
export interface ITable {
    pageSize?: number;
    pageNo?: number;
    totalCount?: number;
    fineTicketList?: IFineTicket[];
}
// 对应组件First
export interface IFirst {

}
// 对应state树中该模块类型
export interface IFirstContainer {
    infoData?: IInfo;
    auditData?: IAudit;
    tableData?: ITable;
}