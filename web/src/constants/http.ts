export type HttpMethod = "get" | "post" | "put" | "delete" | "patch";

export interface FetchResourceParams {
  endpoint: string;
  method?: HttpMethod;
  data?: any;
  params?: any;
  headers?: Record<string, string>;
}
