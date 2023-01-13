import Link from "next/link"
import ArrowIcon from "assets/icons/arrow.svg"
import { LinkButton } from "components/common/Button"

export const RoadmapHeader = () => {
  return (
    <header className="md:rounded-corners flex items-center justify-between bg-secondary-900 px-3 py-5 font-bold text-base-100 md:px-5">
      <div>
        <Link href="/" className="mb-3 flex items-center gap-x-3">
          <ArrowIcon className="rotate-90" />
          <span className="text-sm">Go back</span>
        </Link>
        <h1 className="text-xl">Roadmap</h1>
      </div>
      <LinkButton text="+ Add feedback" variant="accent" href="/feedback/new" />
    </header>
  )
}
