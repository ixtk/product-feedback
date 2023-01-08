import HamburgerIcon from "assets/icons/hamburger.svg"
import CloseIcon from "assets/icons/close.svg"

export const Banner = ({ isSidebarOpen }: { isSidebarOpen: boolean }) => {
  return (
    <div className="p-4 bg-banner-sm bg-no-repeat text-base-100 bg-cover flex justify-between items-center md:bg-banner-md md:flex-1 md:rounded-xl md:items-end md:px-0 xl:pt-16 xl:bg-banner-lg">
      <div className="md:pl-5">
        <h1 className="font-bold md:text-lg">Frontend Mentor</h1>
        <p className="text-sm font-medium md:text-base">Feedback Board</p>
      </div>
      <button className="pl-3 py-3 md:hidden">
        {isSidebarOpen ? <CloseIcon /> : <HamburgerIcon />}
      </button>
    </div>
  )
}
