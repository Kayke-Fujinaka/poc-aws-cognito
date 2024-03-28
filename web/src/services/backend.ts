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
  } catch (error) {
    console.error("Erro ao requisitar:", endpoint, error);
    throw error;
  }
}

export const BackendRoutes = {
  fetchPublicResource: () => fetchResource({ endpoint: `/auth/public` }),
  fetchProtectedResource: () => fetchResource({ endpoint: `/auth/protected` }),
};
