import clsx from "clsx"
import type React from "react"

interface Items {
  className?: string
  onClick?: () => void
  type?: string
  placeholder?: string
  value?: string
  onChange?: (e: React.ChangeEvent<HTMLInputElement>) => void
}

export const Input: React.FC<Items> = ({
  type,
  className,
  onClick,
  value,
  placeholder,
  onChange,
}) => {
  return (
    <input
      type={type}
      onClick={onClick}
      placeholder={placeholder}
      value={value}
      className={clsx(
        "rounded-3xl bg-white px-5 py-2.5 text-black/80 outline-0 placeholder:text-black/60",
        className
      )}
      onChange={onChange}
    />
  )
}
