import { requester } from "@/api/requester"

export const getPopularMovies = (page = 1) => {
  return requester.get("movie/popular", {
    params: { page },
  })
}
