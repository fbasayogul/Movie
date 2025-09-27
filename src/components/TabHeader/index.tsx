import { useTrendStore } from "@/store"
import clsx from "clsx"

type TabsItem = {
  name: string
  key: "day" | "week"
}

export const TabHeader = () => {
  const Tabs: TabsItem[] = [
    {
      name: "Today",
      key: "day",
    },
    {
      name: "This Week",
      key: "week",
    },
  ]

  const { activeTrend, setActiveTrend } = useTrendStore()

  return (
    <div className="flex items-center gap-x-5 px-10 pt-8">
      <h2 className="text-2xl font-semibold text-[#032541]">Trending</h2>
      <ul className="flex items-center rounded-3xl border border-[#032541]">
        {Tabs.map((tab, index) => (
          <li
            className={clsx(
              "cursor-pointer px-5 py-1 font-medium",
              activeTrend === tab.key
                ? "rounded-3xl bg-[#032541] text-white"
                : ""
            )}
            key={index}
            onClick={() => setActiveTrend(tab.key)}
          >
            {tab.name}
          </li>
        ))}
      </ul>
    </div>
  )
}
