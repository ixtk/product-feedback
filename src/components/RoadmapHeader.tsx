import { BackButton, LinkButton } from "components/common/Button"

export const RoadmapHeader = () => {
  return (
    <header className="lg:rounded-corners flex items-center justify-between bg-secondary-900 px-3 py-5 font-bold text-base-100 md:px-5">
      <div>
        <BackButton />
        <h1 className="text-xl">Roadmap</h1>
      </div>
      <LinkButton text="+ Add feedback" variant="accent" href="/feedback/new" />
    </header>
  )
}
