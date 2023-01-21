import { FeedbackCard } from "components/feedback/FeedbackCard"
import { getFeedbacksByStatus } from "utils/data"

interface FeedbackStackProps {
  feedbackStatus: string
}

export const FeedbackStack = (props: FeedbackStackProps) => {
  const feedbacksByStatus = getFeedbacksByStatus(props.feedbackStatus)
  const feedbackCards = feedbacksByStatus.map(feedback => {
    return (
      <div
        key={feedback.title}
        className="rounded-corners border-t-4 border-t-accentSecondary"
      >
        <FeedbackCard {...feedback} />
      </div>
    )
  })

  return (
    <div className="p-3 md:px-5 lg:px-0">
      <h2 className="mt-1 mb-4 flex flex-col text-lg font-semibold text-secondary-800">
        <span className="hidden lg:inline-block">{props.feedbackStatus}</span>
        <span className="hidden text-sm font-normal text-secondary-700 lg:inline-block">
          Ideas prioritized for research
        </span>
        <span className="lg:hidden">Ideas prioritized for research</span>
      </h2>
      <div className="grid grid-cols-1 gap-4 sm:grid-cols-[repeat(auto-fill,minmax(40%,auto))] lg:grid-cols-1">
        {feedbackCards}
      </div>
    </div>
  )
}
