import { NoFeedbackSection } from "components/feedback/NoFeedbackSection"
import { productRequests } from "shared/data"
import { FeedbackCard } from "components/feedback/FeedbackCard"

export const FeedbackList = () => {
  const feedbackCards = productRequests.map(request => {
    // what to use for keys
    return (
      <FeedbackCard
        key={request.title}
        id={request.id}
        title={request.title}
        category={request.category}
        upvotes={request.upvotes}
        status={request.status}
        description={request.description}
      />
    )
  })

  if (feedbackCards.length <= 0) return <NoFeedbackSection />

  return (
    <div className="flex flex-col gap-y-4 px-4 py-6 md:px-0">
      {feedbackCards}
    </div>
  )
}
