import axios from "axios";

export interface FetchResponse<T> {
  count: number;
  results: T[];
}

export const axiosInstance = axios.create({
  baseURL: "https://api.rawg.io/api",
  params: {
    key: "4525ac69a7454c9e8b53168d7340082a",
  },
});

class APIClient<T> {
  endpoint: string;

  constructor(endpoint: string) {
    this.endpoint = endpoint;
  }

  getAll = () => {
    return axiosInstance.get<T>(this.endpoint).then((res) => res.data);
  };

  getAllGames = (params: object) => {
    return axiosInstance.get<T>(this.endpoint, params).then((res) => res.data);
  };

  post = (data: T) => {
    return axiosInstance.post<T>(this.endpoint, data).then((res) => res.data);
  };
}

export default APIClient;
