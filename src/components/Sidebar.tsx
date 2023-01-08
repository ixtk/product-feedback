import { BaseContainer } from "components/BaseContainer"
import { Tag } from "components/Tag"
import Link from "next/link"

const TAG_OPTIONS = ["All", "UI", "UX", "Enhancement", "Bug", "Feature"]
const FEATURE_COUNT = [
  { status: "Planned", categoryCount: 2 },
  { status: "In-progress", categoryCount: 3 },
  { status: "Live", categoryCount: 1 }
]

export const Sidebar = () => {
  const tagElements = TAG_OPTIONS.map(tagOptionText => {
    return <Tag text={tagOptionText} key={tagOptionText} />
  })

  const featureCountElements = FEATURE_COUNT.map(feature => {
    return (
      <div
        key={feature.status}
        className="flex justify-between gap-x-4 items-center mb-1 last-of-type:mb-0"
      >
        <span className="inline-block rounded-full bg-accentPrimary w-2 h-2"></span>
        <dt className="text-secondary-700 grow">{feature.status}</dt>
        <dd className="text-secondary-800 font-bold">
          {feature.categoryCount}
        </dd>
      </div>
    )
  })

  return (
    <div className="absolute right-0 bg-base-300 p-5 w-64 flex flex-col gap-y-5 h-screen md:static md:p-0 md:flex-row md:w-auto flex-2 md:h-auto md:gap-x-3">
      <BaseContainer classExtension="flex flex-wrap gap-3 md:basis-2/4 md:content-start">
        {tagElements}
      </BaseContainer>
      <BaseContainer classExtension="md:basis-2/4">
        <div className="flex justify-between items-center mb-3">
          <h3 className="text-secondary-900 font-bold text-lg">Roadmap</h3>
          <Link href="/" className="text-primary-600 text-sm font-semibold">
            View
          </Link>
        </div>
        <dl>{featureCountElements}</dl>
      </BaseContainer>
    </div>
  )
}
