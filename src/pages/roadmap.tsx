import { FeedbackStack } from "components/feedback/FeedbackStack"
import { RoadmapHeader } from "components/RoadmapHeader"

const Roadmap = () => {
  return (
    <div className="md:mx-auto md:max-w-7xl lg:py-10 lg:px-6">
      <RoadmapHeader />
      <ul className="flex border-b border-b-base-400 text-center lg:hidden">
        <li className="flex-1 border-b-4 border-b-accentPrimary">
          <button className="w-full py-4 text-sm font-bold text-secondary-900">
            Planned (12)
          </button>
        </li>
        <li className="flex-1 border-b-4">
          <button className="w-full py-4 text-sm font-bold text-secondary-900">
            In progress (3)
          </button>
        </li>
        <li className="flex-1 border-b-4">
          <button className="w-full py-4 text-sm font-bold text-secondary-900">
            Live (4)
          </button>
        </li>
      </ul>
      <div className="lg:hidden">
        <FeedbackStack feedbackStatus="Planned" />
      </div>
      <div className="hidden grid-flow-col grid-cols-[40%_40%_40%] gap-x-6 overflow-x-scroll pb-5 scrollbar-thin scrollbar-thumb-base-500 lg:grid xl:grid-cols-3 xl:overflow-x-visible">
        <FeedbackStack feedbackStatus="Planned" />
        <FeedbackStack feedbackStatus="In-progress" />
        <FeedbackStack feedbackStatus="Live" />
      </div>
    </div>
  )
}

export default Roadmap
