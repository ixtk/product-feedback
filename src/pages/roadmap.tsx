import { RoadmapPageHeader } from "components/RoadmapPageHeader"
import { FeedbacksByStatus } from "components/feedback/FeedbacksByStatus"
import { statusList } from "shared/data"
import { StatusTabs } from "components/StatusTabs"

const roadmapStatusList = statusList.filter(status => status !== "suggestion")

const Roadmap = () => {
  return (
    <div className="md:mx-auto md:max-w-7xl lg:py-10 lg:px-6">
      <RoadmapPageHeader />
      <div className="lg:hidden">
        <StatusTabs />
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
