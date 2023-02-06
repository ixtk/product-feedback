import SuggestionsIcon from "assets/icons/suggestions.svg"
import { LinkButton } from "components/common/Button"
import { SortByMenu } from "components/input/SortByMenu"
import { SortBy } from "shared/types"
import { Dispatch, SetStateAction } from "react"
import { getFeedbackByCategories } from "utils/data"

interface HomePageHeaderProps {
  sortBy: SortBy
  setSortBy: Dispatch<SetStateAction<SortBy>>
  selectedCategories: string[]
}

export const HomePageHeader = (props: HomePageHeaderProps) => {
  const feedbackCount = getFeedbackByCategories(props.selectedCategories).length
  return (
    <header className="md:rounded-corners mx-auto flex items-center justify-between bg-secondary-900 px-4 py-2 text-base-100 shadow-sm md:max-w-none md:py-4">
      <div className="hidden items-center gap-x-4 sm:flex md:text-lg">
        <SuggestionsIcon />
        <h2 className="inline-block font-bold">{feedbackCount} Suggestions</h2>
      </div>
      <div className="flex items-center">
        <span className="hidden min-[380px]:inline-block">Sort by:</span>
        <SortByMenu sortBy={props.sortBy} setSortBy={props.setSortBy} />
      </div>
      <LinkButton text="+ Add feedback" variant="accent" href="/feedback/new" />
    </header>
  )
}
