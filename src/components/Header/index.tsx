import Link from "next/link"

interface Item {
  name: string
  link: string
}

export const Header = () => {
  const MenuItem: Item[] = [
    {
      name: "Filmler",
      link: "/filmler",
    },
    {
      name: "Diziler",
      link: "diziler",
    },
    {
      name: "Kişiler",
      link: "/kisiler",
    },
    {
      name: "Daha Fazla",
      link: "/daha-fazla",
    },
  ]

  return (
    <header className="flex h-16 items-center justify-center bg-[#032541]">
      <div className="container flex w-full items-center">
        <div className="flex w-full items-center justify-between">
          <div className="flex w-full items-center">
            <a href="/" className="mr-4 max-w-[154px]">
              <img
                src="https://www.themoviedb.org/assets/2/v4/logos/v2/blue_short-8e7b30f73a4020692ccca9c88bafe5dcb6f8a62a4c6bc55cd9ba82bb2cd95f6c.svg"
                className="w-full"
              />
            </a>
            <ul className="flex items-center gap-x-4">
              {MenuItem.map((menu, index) => (
                <li key={index} className="text-white">
                  <Link href={`${menu.link}`}> {menu.name} </Link>
                </li>
              ))}
            </ul>
          </div>
          <div className="flex items-center gap-x-3 text-white">
            <p>Notification</p>
            <p>Account</p>
          </div>
        </div>
      </div>
    </header>
  )
}
