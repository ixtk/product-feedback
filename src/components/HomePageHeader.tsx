import SuggestionsIcon from "assets/icons/suggestions.svg"
import { LinkButton } from "components/common/Button"
import { SortByMenu } from "components/input/SortByMenu"

export const HomePageHeader = () => {
  return (
    <header className="md:rounded-corners mx-auto flex items-center justify-between bg-secondary-900 px-4 py-2 text-base-100 shadow-sm md:max-w-none md:py-4">
      <div className="hidden items-center gap-x-4 md:flex">
        <SuggestionsIcon />
        <h2 className="inline-block text-lg font-bold">12 Suggestions</h2>
      </div>
      <div className="flex text-sm lg:text-base">
        <span className="hidden min-[380px]:inline-block">Sort by:</span>
        <SortByMenu />
      </div>
      <LinkButton text="+ Add feedback" variant="accent" href="/feedback/new" />
    </header>
  )
}
