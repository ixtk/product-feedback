import SuggestionsIcon from "assets/icons/suggestions.svg"
import { LinkButton } from "components/common/Button"
import { SortByMenu } from "components/input/SortByMenu"
import { SortBy } from "shared/types"
import { Dispatch, SetStateAction, useContext } from "react"
import { getFeedbackByCategories } from "utils/data"
import { FeedbackContext } from "context/FeedbackList"

interface HomePageHeaderProps {
  sortBy: SortBy
  setSortBy: Dispatch<SetStateAction<SortBy>>
  selectedCategories: string[]
}

export const HomePageHeader = (props: HomePageHeaderProps) => {
  const { feedbacks } = useContext(FeedbackContext)
  const feedbackCount = getFeedbackByCategories(
    feedbacks,
    props.selectedCategories
  ).length
  return (
    <header className="md:rounded-corners mx-auto flex items-center justify-between bg-secondary-900 px-4 py-2 text-base-100 shadow-sm md:max-w-none md:py-4">
      <div className="hidden items-center gap-x-4 sm:flex sm:min-w-[178px] md:text-lg">
        <SuggestionsIcon />
        <h2 className="inline-block font-bold">{feedbackCount} Suggestions</h2>
      </div>
      <div className="flex items-center sm:min-w-[220px]">
        <span className="hidden xs:inline-block">Sort by:</span>
        <SortByMenu sortBy={props.sortBy} setSortBy={props.setSortBy} />
      </div>
      <LinkButton text="+ Add feedback" variant="accent" href="/feedback/new" />
    </header>
  )
}
