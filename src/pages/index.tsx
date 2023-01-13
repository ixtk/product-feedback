import { Banner } from "components/Banner"
import { LinkButton } from "components/Button"
import DropdownArrowIcon from "assets/icons/arrow.svg"
import SuggestionsIcon from "assets/icons/suggestions.svg"
import { Sidebar } from "components/Sidebar"
import { FeedbackCard } from "components/FeedbackCard"
import React from "react"

const Home = () => {
  return (
    <div className="md:mx-auto md:max-w-3xl md:py-10 md:px-3 xl:flex xl:max-w-5xl xl:items-start xl:gap-x-6">
      <div className="relative gap-x-3 gap-y-5 md:mb-5 md:flex xl:sticky xl:top-5 xl:w-60 xl:flex-col">
        <Banner isSidebarOpen={true} />
        <Sidebar />
      </div>
      <div className="xl:grow">
        <div className="md:rounded-corners bg-secondary-900 px-4 py-2 text-base-100 md:py-4">
          <div className="mx-auto flex max-w-md items-center justify-between md:max-w-none">
            <div className="hidden items-center gap-x-4 md:flex">
              <SuggestionsIcon />
              <h2 className="inline-block text-lg font-bold">12 Suggestions</h2>
            </div>
            <div className="text-sm">
              <span className="mr-2">Sort by:</span>
              <button className="py-3 font-bold">
                <span>Most Upvotes</span>
                <DropdownArrowIcon className="ml-2 inline-block" />
              </button>
            </div>
            <LinkButton
              text="+ Add feedback"
              variant="accent"
              href="/feedback/new"
            />
          </div>
        </div>
        <div className="flex flex-col gap-y-4 px-4 py-6 md:px-0">
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
