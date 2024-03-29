import HamburgerIcon from "assets/icons/hamburger.svg"
import CloseIcon from "assets/icons/close.svg"

interface BannerProps {
  menuOpen: boolean
  setMenuOpen: Function
}

export const Banner = (props: BannerProps) => {
  const toggleMobileMenu = () => {
    props.setMenuOpen((prevState: boolean) => !prevState)
  }

  return (
    <div className="md:rounded-corners flex h-[4.5rem] items-center justify-between bg-banner-sm bg-cover bg-no-repeat p-4 text-base-100 md:h-auto md:flex-1 md:items-end md:bg-banner-md md:px-0 xl:bg-banner-lg xl:pt-16">
      <div className="md:pl-5">
        <h1 className="text-lg font-bold">Frontend Mentor</h1>
        <p className="text-sm font-medium md:text-base">Feedback Board</p>
      </div>
      <button className="py-3 pl-3 md:hidden" onClick={toggleMobileMenu}>
        {props.menuOpen ? <CloseIcon /> : <HamburgerIcon />}
      </button>
    </div>
  )
}
