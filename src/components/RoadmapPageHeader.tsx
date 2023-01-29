import { LinkButton } from "components/common/Button"
import { HomeLink } from "components/common/HomeLink"

export const RoadmapPageHeader = () => {
  return (
    <header className="lg:rounded-corners flex items-center justify-between bg-secondary-900 px-3 py-5 font-bold text-base-100 shadow-sm md:px-5">
      <div className="text-base-100">
        <HomeLink />
        <h1 className="text-xl">Roadmap</h1>
      </div>
      <LinkButton text="+ Add feedback" variant="accent" href="/feedback/new" />
    </header>
  )
}
