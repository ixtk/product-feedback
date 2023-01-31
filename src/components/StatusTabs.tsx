import { Tab } from "@headlessui/react"
import clsx from "clsx"
import { FeedbacksByStatus } from "components/feedback/FeedbacksByStatus"
import { statusList } from "shared/data"

const roadmapStatusList = statusList.filter(status => status !== "suggestion")

export const StatusTabs = () => {
  return (
    <Tab.Group>
      <Tab.List className="flex border-b border-b-base-400 text-center lg:hidden">
        {roadmapStatusList.map(status => {
          return (
            <Tab
              key={status}
              className={clsx(
                "flex-1 border-b-4 border-b-base-300 py-3 text-sm font-medium capitalize sm:text-base",

                status === "planned" && "ui-selected:border-b-accentSecondary",
                status === "in-progress" &&
                  "ui-selected:border-b-accentPrimary",
                status === "live" && "ui-selected:border-b-primary-400"
              )}
            >
              {status}
            </Tab>
          )
        })}
      </Tab.List>
      <Tab.Panels>
        {roadmapStatusList.map(status => {
          return (
            <Tab.Panel key={status}>
              <FeedbacksByStatus feedbackStatus={status} />
            </Tab.Panel>
          )
        })}
      </Tab.Panels>
    </Tab.Group>
  )
}
