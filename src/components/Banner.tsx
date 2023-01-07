import HamburgerIcon from "assets/icons/hamburger.svg"

export const Banner = () => {
  return (
    <div className="p-4 bg-banner-sm bg-no-repeat text-base-100 bg-cover flex justify-between items-center">
      <div>
        <h1 className="font-bold">Frontend Mentor</h1>
        <p className="text-sm font-medium">Feedback Board</p>
      </div>
      <button className="pl-3 py-3 md:hidden">
        <HamburgerIcon />
      </button>
    </div>
  )
}