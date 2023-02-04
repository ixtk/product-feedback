import { BaseContainer } from "components/common/BaseContainer"
import { TagButton } from "components/common/Tag"
import Link from "next/link"
import clsx from "clsx"
import { getRoadmapStatusCount } from "utils/data"
import { categories } from "shared/data"
import { Dispatch, SetStateAction } from "react"

const roadmapStatusCount = getRoadmapStatusCount()

interface SidebarProps {
  setFeedbackCategory: Dispatch<SetStateAction<string>>
}

export const Sidebar = (props: SidebarProps) => {
  const tagButtonElements = categories.map(category => {
    return (
      <li key={category}>
        <TagButton
          text={category}
          setFeedbackCategory={props.setFeedbackCategory}
        />
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
              status === "in-progress" && "bg-accentPrimary-800",
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
          {tagButtonElements}
        </menu>
      </BaseContainer>
      <BaseContainer classExtension="md:basis-2/4">
        <div className="mb-3 flex items-center justify-between">
          <h2 className="text-lg font-bold text-secondary-900">Roadmap</h2>
          <Link
            href="/roadmap"
            className="font-medium text-primary-600 hover:underline"
          >
            View
          </Link>
        </div>
        <dl>{featureCountElements}</dl>
      </BaseContainer>
    </>
  )
}
