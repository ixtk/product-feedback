import { BaseContainer } from "components/common/BaseContainer"
import { Tag } from "components/common/Tag"
import Link from "next/link"
import clsx from "clsx"
import { getRoadmapStatusCount } from "utils/data"
import { categories } from "shared/data"

const roadmapStatusCount = getRoadmapStatusCount()

export const Sidebar = () => {
  const tagElements = categories.map(category => {
    return (
      <li key={category}>
        <Tag text={category} clickable={true} />
      </li>
    )
  })

  const featureCountElements = roadmapStatusCount.map(
    ({ status, feedbackCount }) => {
      return (
        <div
          key={status}
          className="top-[4.5rem] mb-1 flex items-center justify-between gap-x-4 last-of-type:mb-0"
        >
          <span
            className={clsx(
              "inline-block h-2 w-2 rounded-full",
              status === "planned" && "bg-accentSecondary",
              status === "in-progress" && "bg-accentPrimary",
              status === "live" && "bg-primary-400"
            )}
          ></span>
          <dt className="grow capitalize text-secondary-700">{status}</dt>
          <dd className="font-bold text-secondary-800">{feedbackCount}</dd>
        </div>
      )
    }
  )

  return (
    <>
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
            className="text-sm font-semibold text-primary-600 hover:underline"
          >
            View
          </Link>
        </div>
        <dl>{featureCountElements}</dl>
      </BaseContainer>
    </>
  )
}
