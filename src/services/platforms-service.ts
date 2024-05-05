import APIClient from "./api-client";
import { FetchResponse } from "./api-client";
export interface Platform {
  id: number;
  name: string;
  slug: string;
}

export const platformClient = new APIClient<FetchResponse<Platform>>(
  "/platforms"
);
