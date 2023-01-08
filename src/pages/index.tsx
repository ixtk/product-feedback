import { Banner } from "components/Banner"
import { Button } from "components/Button"
import DropdownArrowIcon from "assets/icons/arrow.svg"
import SuggestionsIcon from "assets/icons/suggestions.svg"
import { Sidebar } from "components/Sidebar"
import { FeedbackCard } from "components/FeedbackCard"

const Home = () => {
  return (
    <div className="md:max-w-3xl md:mx-auto md:py-10 md:px-3 xl:flex xl:max-w-5xl xl:gap-x-6 xl:items-start">
      <div className="relative md:flex gap-x-3 md:mb-5 xl:flex-col xl:w-60 gap-y-5">
        <Banner isSidebarOpen={true} />
        <Sidebar />
      </div>
      <div className="xl:grow">
        <div className="px-4 py-2 md:py-4 bg-secondary-900 text-base-100 md:rounded-xl">
          <div className="max-w-md mx-auto flex items-center justify-between md:max-w-none">
            <div className="hidden md:flex items-center gap-x-4">
              <SuggestionsIcon />
              <h2 className="text-lg font-bold inline-block">12 Suggestions</h2>
            </div>
            <div className="text-sm">
              <span className="mr-2">Sort by:</span>
              <button className="font-bold py-3">
                <span>Most Upvotes</span>
                <DropdownArrowIcon className="inline-block ml-2" />
              </button>
            </div>
            <Button text="+ Add feedback" accent={true} />
          </div>
        </div>
        <div className="p-4 md:px-0 md:yy-6 flex gap-y-4 flex-col">
          <FeedbackCard />
          <FeedbackCard />
          <FeedbackCard />
          <FeedbackCard />
          <FeedbackCard />
          <FeedbackCard />
        </div>
      </div>
    </div>
  )
}
export default Home
