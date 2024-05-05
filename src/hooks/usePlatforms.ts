import { useQuery } from "@tanstack/react-query";
import { Platform, platformClient } from "../services/platforms-service";
import { CACHE_KEY_PLATFORMS } from "../constants";
import { FetchResponse } from "../services/api-client";
import platforms from "../data/platforms";

const usePlatforms = () => {
  return useQuery<FetchResponse<Platform>, Error>({
    queryKey: CACHE_KEY_PLATFORMS,
    queryFn: () => platformClient.getAll(),
    staleTime: 360 * 24 * 60 * 60 * 1000, // a year
    initialData: { count: platforms.length, results: platforms },
  });
};
export default usePlatforms;
