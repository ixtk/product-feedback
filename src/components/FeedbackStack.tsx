import { FeedbackCard } from "components/FeedbackCard"
import React from "react"

export const FeedbackStack = ({
  feedbackStatus
}: {
  feedbackStatus: string
}) => {
  return (
    <div className="p-3 first-of-type:pl-0">
      <h2 className="mt-1 mb-4 flex flex-col text-lg font-semibold text-secondary-800">
        <span className="hidden lg:inline-block">{feedbackStatus}</span>
        <span className="hidden text-sm font-normal text-secondary-700 lg:inline-block">
          Ideas prioritized for research
        </span>
        <span className="lg:hidden">Ideas prioritized for research</span>
      </h2>
      <div className="grid grid-cols-1 gap-4 sm:grid-cols-[repeat(auto-fill,minmax(40%,auto))] lg:grid-cols-1">
        <div className="rounded-corners border-t-4 border-t-accentSecondary">
          <FeedbackCard />
        </div>
        <div className="rounded-corners border-t-4 border-t-accentSecondary">
          <FeedbackCard />
        </div>
        <div className="rounded-corners border-t-4 border-t-accentSecondary">
          <FeedbackCard />
        </div>
      </div>
    </div>
  )
}
