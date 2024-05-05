import APIClient from "./api-client";
import { FetchResponse } from "./api-client";
import { Platform } from "./platforms-service";

export interface Game {
  id: number;
  name: string;
  background_image: string;
  parent_platforms: { platform: Platform }[];
  metacritic: number;
  rating_top: number;
}

export const gameClient = new APIClient<FetchResponse<Game>>("/games");
