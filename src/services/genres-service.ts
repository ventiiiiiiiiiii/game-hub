import APIClient from "./api-client";
import { FetchResponse } from "./api-client";

export interface Genre {
  id: number;
  name: string;
  image_background: string;
}

export const genreClient = new APIClient<FetchResponse<Genre>>("/genres");
