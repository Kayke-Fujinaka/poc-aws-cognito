import { AxiosRequestConfig } from "axios";

import { FetchResourceParams } from "../constants/http";
import { api } from "./api";

async function fetchResource({
  endpoint,
  method = "get",
  data = {},
  params = {},
  headers = {},
}: FetchResourceParams) {
  const config: AxiosRequestConfig = {
    method,
    url: endpoint,
    params,
    headers,
    ...(method !== "get" && { data }),
  };

  try {
    const { data } = await api(config);
    return data;
  } catch (error: any) {
    console.error("Erro ao requisitar:", endpoint, error);
    throw new Error(error.response?.data?.message);
  }
}

export const ResourcesRoutes = {
  public: () => fetchResource({ endpoint: `/auth/public` }),
  protected: () => fetchResource({ endpoint: `/auth/protected` }),
  admin: () => fetchResource({ endpoint: `/auth/admin` }),
};
