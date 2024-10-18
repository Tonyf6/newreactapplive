import { useQuery } from "@tanstack/react-query";
import { CACHE_KEY_GAMES } from "../constant";
import { GameQuery } from "../App";
import { FetchResponse } from "./useData";
import apiClient from "../services/apiClient";

export interface Platform {
  id: number;
  name: string;
  slug: string;
}

export interface Game {
  id: number;
  name: string;
  background_image: string;
  parent_platforms: { platform: Platform }[];
  metacritic: number;
}

export interface FetchGameResponse {
  count: number;
  results: Game[];
}

const useGames = (gameQuery: GameQuery) => 
  useQuery<FetchResponse<Game>, Error>({
    queryKey: [...CACHE_KEY_GAMES, gameQuery],
    queryFn: () =>
      apiClient
        .get<FetchResponse<Game>>('/games', {
          params: {
            genres: gameQuery.genre?.id,
            parent_platforms: gameQuery.platform?.id,
            ordering: gameQuery.sortOrder,
            search: gameQuery.searchText,
          },
        })
        .then((res) => res.data),
  });

export default useGames;
