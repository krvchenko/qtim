export enum ResponseTypeEnum {
  Success = 'success',
  Error = 'error',
  Info = 'info',
  Warning = 'warning',
}

export interface IResponse<T> {
  message: string;
  type: ResponseTypeEnum;
  data: T;
}

export interface IResponseRefresh {
  token: string;
}

export interface IResponseSkin {
  error: string;
  data: boolean;
}
