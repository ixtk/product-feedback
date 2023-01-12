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
    return <Tag text={tagOptionText} clickable={true} key={tagOptionText} />
  })

  const featureCountElements = FEATURE_COUNT.map(feature => {
    return (
      <div
        key={feature.status}
        className="mb-1 flex items-center justify-between gap-x-4 last-of-type:mb-0"
      >
        <span className="inline-block h-2 w-2 rounded-full bg-accentPrimary"></span>
        <dt className="grow text-secondary-700">{feature.status}</dt>
        <dd className="font-bold text-secondary-800">
          {feature.categoryCount}
        </dd>
      </div>
    )
  })

  return (
    <div className="absolute right-0 flex h-screen w-64 flex-2 flex-col gap-y-5 bg-base-300 p-5 md:static md:h-auto md:w-auto md:flex-row md:gap-x-3 md:p-0 xl:flex-col">
      <BaseContainer classExtension="md:basis-2/4">
        <menu className="flex flex-wrap gap-3 md:content-start">
          {tagElements}
        </menu>
      </BaseContainer>
      <BaseContainer classExtension="md:basis-2/4">
        <div className="mb-3 flex items-center justify-between">
          <h2 className="text-lg font-bold text-secondary-900">Roadmap</h2>
          <Link
            href="/roadmap"
            className="text-sm font-semibold text-primary-600"
          >
            View
          </Link>
        </div>
        <dl>{featureCountElements}</dl>
      </BaseContainer>
    </div>
  )
}
