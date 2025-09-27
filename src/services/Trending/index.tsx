import { requester } from "@/api/requester"

export const getTrending = (
  mediaType: string = "all",
  timeWindow: string = "day"
) => {
  return requester.get(`trending/${mediaType}/${timeWindow}`)
}
