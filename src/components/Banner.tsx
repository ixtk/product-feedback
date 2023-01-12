import HamburgerIcon from "assets/icons/hamburger.svg"
import CloseIcon from "assets/icons/close.svg"

export const Banner = ({ isSidebarOpen }: { isSidebarOpen: boolean }) => {
  return (
    <div className="md:rounded-corners flex items-center justify-between bg-banner-sm bg-cover bg-no-repeat p-4 text-base-100 md:flex-1 md:items-end md:bg-banner-md md:px-0 xl:bg-banner-lg xl:pt-16">
      <div className="md:pl-5">
        <h1 className="font-bold md:text-lg">Frontend Mentor</h1>
        <p className="text-sm font-medium md:text-base">Feedback Board</p>
      </div>
      <button className="py-3 pl-3 md:hidden">
        {isSidebarOpen ? <CloseIcon /> : <HamburgerIcon />}
      </button>
    </div>
  )
}
