import { useQuery } from "@tanstack/react-query";
import { Genre, genreClient } from "../services/genres-service";
import { CACHE_KEY_GENRES } from "../constants";
import { FetchResponse } from "../services/api-client";
import genres from "../data/genres";

const useGenres = () => {
  return useQuery<FetchResponse<Genre>, Error>({
    queryKey: CACHE_KEY_GENRES,
    queryFn: genreClient.getAll,
    staleTime: 360 * 24 * 60 * 60 * 1000, // a year
    initialData: { count: genres.length, results: genres },
  });
};
export default useGenres;
