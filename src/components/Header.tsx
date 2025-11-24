import { Link } from 'react-router-dom'
import { useTheme } from './theme-provider'
import { ModeToggle } from './ModeToggle'
import { CitySearch } from './CitySearch'

function Header() {
    const { theme } = useTheme()
  return (
    <header className="sticky top-0 z-50 w-full border-b bg-background/95 backdrop-blur supports-[backdrop-filter]:bg-background/60 py-2">
      <div className="container mx-auto flex h-16 items-center justify-between px-4">
        <Link to={"/"}>
          <img
            src={theme === "dark" ? "/skyrithm_logo_dark.png" : "/skyrithm_logo_light.png"}
            alt="Klimate logo"
            className="h-14 w-20"
          />
        </Link>

        <div className="flex justify-center items-center gap-4">
          <CitySearch /> 
          <ModeToggle />
        </div>
      </div>
    </header>
  )
}

export default Header