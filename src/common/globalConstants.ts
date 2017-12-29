// 统一的后台返回数据结构，这里不建议做，因为众多的为服务可能返回结构不一致
export interface IResult<T> {
    retCode?: number;
    retMsg?: string;
    payload?: T;
}

// 统一的action类型
export interface IActionType<T> {
    type: Symbol;
    payload: T;
}