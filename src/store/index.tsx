import { create } from "zustand"

type TrendState = {
  activeTrend: "day" | "week"
  setActiveTrend: (value: "day" | "week") => void
}

export const useTrendStore = create<TrendState>((set: any) => ({
  activeTrend: "day",
  setActiveTrend: (value: any) => set({ activeTrend: value }),
}))
