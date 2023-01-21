import SuggestionsIcon from "assets/icons/suggestions.svg"
import DropdownArrowIcon from "assets/icons/arrow.svg"
import { LinkButton } from "components/common/Button"

export const MainHeader = () => {
  return (
    <header className="md:rounded-corners mx-auto flex items-center justify-between bg-secondary-900 px-4 py-2 text-base-100 md:max-w-none md:py-4">
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
      <LinkButton text="+ Add feedback" variant="accent" href="/feedback/new" />
    </header>
  )
}
