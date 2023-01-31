import { FeedbackCard } from "components/feedback/FeedbackCard"
import { getFeedbacksByStatus } from "utils/data"
import clsx from "clsx"

interface FeedbacksByStatusProps {
  feedbackStatus: string
}

const subTextMap: Record<string, string> = {
  planned: "Ideas prioritized for research",
  "in-progress": "Currently being developed",
  live: "Released features"
}

export const FeedbacksByStatus = ({
  feedbackStatus
}: FeedbacksByStatusProps) => {
  const feedbacksByStatus = getFeedbacksByStatus(feedbackStatus)
  const feedbackCards = feedbacksByStatus.map(feedback => {
    return (
      <div
        key={feedback.title}
        className={clsx(
          "rounded-corners border-t-[5px] bg-base-100",
          feedbackStatus === "planned" && "border-t-accentSecondary",
          feedbackStatus === "in-progress" && "border-t-accentPrimary",
          feedbackStatus === "live" && "border-t-primary-400"
        )}
      >
        <FeedbackCard {...feedback} />
      </div>
    )
  })

  return (
    <div className="p-3 md:px-5 lg:px-0">
      <h2 className="mt-1 mb-4 flex flex-col text-lg font-semibold text-secondary-800">
        <span className="hidden capitalize lg:inline-block">
          {feedbackStatus} ({feedbacksByStatus.length})
        </span>
        <span className="hidden text-base font-normal text-secondary-700 lg:inline-block">
          {subTextMap[feedbackStatus]}
        </span>
        <span className="lg:hidden">{subTextMap[feedbackStatus]}</span>
      </h2>
      <div className="grid grid-cols-1 gap-4 sm:grid-cols-[repeat(auto-fill,minmax(40%,auto))] lg:grid-cols-1">
        {feedbackCards}
      </div>
    </div>
  )
}