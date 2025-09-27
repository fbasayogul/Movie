import clsx from "clsx"
import type React from "react"

interface Items {
  className?: string
  onClick?: () => void
  value?: string
}

export const Button: React.FC<Items> = ({ className, onClick, value }) => {
  return (
    <button
      type="button"
      onClick={onClick}
      className={clsx("px-3 py-2 text-white", className)}
    >
      {value}
    </button>
  )
}
