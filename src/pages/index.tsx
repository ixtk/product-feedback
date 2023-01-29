import { Banner } from "components/Banner"
import { Sidebar } from "components/Sidebar"
import { MobileMenu } from "components/MobileMenu"
import { useState } from "react"
import { FeedbackList } from "components/feedback/FeedbackList"
import { HomePageHeader } from "components/HomePageHeader"

const Home = () => {
  const [menuOpen, setMenuOpen] = useState(false)

  return (
    <div className="md:mx-auto md:max-w-3xl md:py-10 md:px-3 xl:flex xl:max-w-5xl xl:items-start xl:gap-x-6">
      <div className="relative gap-x-3 gap-y-5 md:mb-5 md:flex xl:sticky xl:top-5 xl:w-60 xl:flex-col">
        <Banner menuOpen={menuOpen} setMenuOpen={setMenuOpen} />
        <div className="hidden flex-2 gap-y-5 bg-base-300 p-5 md:flex md:gap-x-3 md:p-0 xl:flex-col">
          <Sidebar />
        </div>
        <div className="md:hidden">
          <MobileMenu menuOpen={menuOpen} setMenuOpen={setMenuOpen} />
        </div>
      </div>
      <div className="xl:grow">
        <HomePageHeader />
        <FeedbackList />
      </div>
    </div>
  )
}
export default Home
