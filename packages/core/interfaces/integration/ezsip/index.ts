export interface IAgentLogin {
  agentId: string;
  campaignId: string;
  extension: number;
}

export interface IEzsipBaseResponse {
  statusCode: number;
  message: string | string[];
  data?: IEzsipResponse;
  error?: string;
}

interface IEzsipResponse {
  id?: string;
  agent: {
    callCenterAgentUuid?: string;
  };
}

export interface AxiosRequestConfig<D = any> {
  url?: string;
  method?: Method | string;
  baseURL?: string;
  transformRequest?: AxiosRequestTransformer | AxiosRequestTransformer[];
  transformResponse?: AxiosResponseTransformer | AxiosResponseTransformer[];
  headers?: AxiosRequestHeaders;
  params?: any;
  paramsSerializer?: (params: any) => string;
  data?: D;
  timeout?: number;
  timeoutErrorMessage?: string;
  withCredentials?: boolean;
  adapter?: AxiosAdapter;
  auth?: AxiosBasicCredentials;
  responseType?: ResponseType;
  responseEncoding?: responseEncoding | string;
  xsrfCookieName?: string;
  xsrfHeaderName?: string;
  onUploadProgress?: (progressEvent: any) => void;
  onDownloadProgress?: (progressEvent: any) => void;
  maxContentLength?: number;
  validateStatus?: ((status: number) => boolean) | null;
  maxBodyLength?: number;
  maxRedirects?: number;
  beforeRedirect?: (
    options: Record<string, any>,
    responseDetails: { headers: Record<string, string> },
  ) => void;
  socketPath?: string | null;
  httpAgent?: any;
  httpsAgent?: any;
  proxy?: AxiosProxyConfig | false;
  cancelToken?: CancelToken;
  decompress?: boolean;
  transitional?: TransitionalOptions;
  signal?: AbortSignal;
  insecureHTTPParser?: boolean;
  env?: {
    FormData?: new (...args: any[]) => object;
  };
}

export interface AxiosRequestTransformer {
  (data: any, headers?: AxiosRequestHeaders): any;
}

export interface AxiosResponseTransformer {
  (data: any, headers?: AxiosResponseHeaders): any;
}

export type AxiosRequestHeaders = Record<string, string | number | boolean>;

export interface AxiosAdapter {
  (config: AxiosRequestConfig): AxiosPromise;
}

export type Method =
  | 'get'
  | 'GET'
  | 'delete'
  | 'DELETE'
  | 'head'
  | 'HEAD'
  | 'options'
  | 'OPTIONS'
  | 'post'
  | 'POST'
  | 'put'
  | 'PUT'
  | 'patch'
  | 'PATCH'
  | 'purge'
  | 'PURGE'
  | 'link'
  | 'LINK'
  | 'unlink'
  | 'UNLINK';

export interface AxiosBasicCredentials {
  username: string;
  password: string;
}

export type responseEncoding =
  | 'ascii'
  | 'ASCII'
  | 'ansi'
  | 'ANSI'
  | 'binary'
  | 'BINARY'
  | 'base64'
  | 'BASE64'
  | 'base64url'
  | 'BASE64URL'
  | 'hex'
  | 'HEX'
  | 'latin1'
  | 'LATIN1'
  | 'ucs-2'
  | 'UCS-2'
  | 'ucs2'
  | 'UCS2'
  | 'utf-8'
  | 'UTF-8'
  | 'utf8'
  | 'UTF8'
  | 'utf16le'
  | 'UTF16LE';

export interface AxiosProxyConfig {
  host: string;
  port: number;
  auth?: {
    username: string;
    password: string;
  };
  protocol?: string;
}

export interface CancelToken {
  promise: Promise<Cancel>;
  reason?: Cancel;
  throwIfRequested(): void;
}

export interface TransitionalOptions {
  silentJSONParsing?: boolean;
  forcedJSONParsing?: boolean;
  clarifyTimeoutError?: boolean;
}

export type AxiosResponseHeaders = Record<string, string> & {
  'set-cookie'?: string[];
};

export interface AxiosPromise<T = any> extends Promise<AxiosResponse<T>> {}

export interface AxiosResponse<T = any, D = any> {
  data: T;
  status: number;
  statusText: string;
  headers: AxiosResponseHeaders;
  config: AxiosRequestConfig<D>;
  request?: any;
}

export interface Cancel {
  message: string | undefined;
}

export interface ICreateAgent {
  roles: string[];
  agentStatus: string;
  rolesName: string[];
  agentType: string;
  userEnabled: boolean;
  firstName: string;
  userEmail: string;
  confirmPassword: string;
  username: string;
  lastName?: string;
  password: string;
  agentContact: string;
}

export interface IUpdateAgent extends Partial<ICreateAgent> {}

export interface IExtension {
  extension: number;
  isMultiple: boolean;
}

export interface IAgent {
  agentId: string;
  campaignId: string;
  extension: number;
}

export interface ICreateCampaign {
  type: string;
  name: string;
  agents: string[];
  strategy: string;
  maxRatio: number;
}

export interface IUpdateCampaign extends Partial<ICreateCampaign> {}

export interface IBulkLeadsDeleted {
  campaignId: string;
  uId: string[];
}

export interface ICampaignStartStop {
  id: string;
  status: boolean;
}

export interface IManualCall {
  agentId: string;
  uId: string;
  campaignId: string;
  phoneNumber: number;
}

export interface IClickToCall {
  agentId: string;
  uId: string;
  phoneNumber: number;
}

export interface IEndCall {
  callId: string;
  shouldBreak: boolean;
  shouldPause: boolean;
}

export interface IAgentPause {
  agentId: string;
  campaignId: string;
}

export interface IProductivityActivityReport {
  offset?: number; // Optional with default value in DTO
  limit?: number; // Optional with default value in DTO
  duration?: string;
  agentId?: string[];
  campaignId?: string[];
  startDate?: string;
  endDate?: string;
}
