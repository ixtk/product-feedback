import { Banner } from "components/Banner"
import { Sidebar } from "components/Sidebar"
import { MobileMenu } from "components/MobileMenu"
import { useState } from "react"
import { FeedbackList } from "components/feedback/FeedbackList"
import { HomePageHeader } from "components/HomePageHeader"
import { Layout } from "components/Layout"
import { SortBy } from "shared/types"

const Home = () => {
  const [menuOpen, setMenuOpen] = useState(false)
  const [feedbackCategory, setFeedbackCategory] = useState("all")
  const [sortBy, setSortBy] = useState<SortBy>({
    field: "upvotes",
    ascending: false
  })

  return (
    <Layout pageTitle="Home">
      <div className="md:mx-auto md:max-w-3xl md:py-10 md:px-3 xl:flex xl:max-w-5xl xl:items-start xl:gap-x-6">
        <div className="relative gap-x-3 gap-y-5 md:mb-5 md:flex xl:sticky xl:top-5 xl:w-60 xl:flex-col">
          <Banner menuOpen={menuOpen} setMenuOpen={setMenuOpen} />
          <div className="hidden flex-2 gap-y-5 bg-base-300 p-5 md:flex md:gap-x-3 md:p-0 xl:flex-col">
            <Sidebar setFeedbackCategory={setFeedbackCategory} />
          </div>
          <div className="md:hidden">
            <MobileMenu
              menuOpen={menuOpen}
              setMenuOpen={setMenuOpen}
              setFeedbackCategory={setFeedbackCategory}
            />
          </div>
        </div>
        <div className="xl:grow">
          <HomePageHeader
            sortBy={sortBy}
            setSortBy={setSortBy}
            category={feedbackCategory}
          />
          <FeedbackList category={feedbackCategory} sortBy={sortBy} />
        </div>
      </div>
    </Layout>
  )
}
export default Home
