import clsx from "clsx"

interface Items {
  backgroundImage: string
  children?: React.ReactNode
  className?: string
}

export const Wrapper: React.FC<Items> = ({
  backgroundImage,
  children,
  className,
}) => {
  return (
    <div
      className={clsx(
        "flex w-full items-center justify-center bg-cover",
        className
      )}
      style={{
        backgroundImage: `url('/img/${backgroundImage}.webp')`,
      }}
    >
      {children}
    </div>
  )
}
