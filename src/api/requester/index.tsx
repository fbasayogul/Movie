import axios from "axios"

export const requester = axios.create({
  baseURL: "https://api.themoviedb.org/3",
  params: {
    api_key: process.env.NEXT_PUBLIC_TMDB_API_KEY,
    language: "tr-TR",
  },
})
