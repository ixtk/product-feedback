import { RoadmapPageHeader } from "components/RoadmapPageHeader"
import { Tab } from "@headlessui/react"
import { FeedbacksByStatus } from "components/feedback/FeedbacksByStatus"
import { statusList } from "shared/data"
import clsx from "clsx"

const roadmapStatusList = statusList.filter(status => status !== "suggestion")

const Roadmap = () => {
  return (
    <div className="md:mx-auto md:max-w-7xl lg:py-10 lg:px-6">
      <RoadmapPageHeader />
      <div className="lg:hidden">
        <Tab.Group>
          <Tab.List className="flex border-b border-b-base-400 text-center lg:hidden">
            {roadmapStatusList.map(status => {
              return (
                <Tab
                  key={status}
                  className={clsx(
                    "flex-1 border-b-4 border-b-base-300 py-3 text-sm font-semibold capitalize",

                    status === "planned" &&
                      "ui-selected:border-b-accentSecondary",
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
      </div>
      <div className="hidden grid-flow-col grid-cols-[40%_40%_40%] gap-x-6 overflow-x-scroll pb-5 scrollbar-thin scrollbar-thumb-base-500 lg:grid xl:grid-cols-3 xl:overflow-x-visible">
        {roadmapStatusList.map(status => {
          return <FeedbacksByStatus key={status} feedbackStatus={status} />
        })}
      </div>
    </div>
  )
}

export default Roadmap
