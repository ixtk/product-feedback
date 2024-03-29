import { NoFeedbackSection } from "components/feedback/NoFeedbackSection"
import { FeedbackCard } from "components/feedback/FeedbackCard"
import { SortBy } from "shared/types"
import { getFeedbackByCategories, sortFeedbacks } from "utils/data"
import { useContext } from "react"
import { FeedbackContext } from "context/FeedbackList"

interface FeedbackListProps {
  selectedCategories: string[]
  sortBy: SortBy
}

export const FeedbackList = (props: FeedbackListProps) => {
  const { feedbacks } = useContext(FeedbackContext)
  const filteredFeedbacks = getFeedbackByCategories(
    feedbacks,
    props.selectedCategories
  )
  const sortedFeedbackCards = sortFeedbacks(
    filteredFeedbacks,
    props.sortBy
  ).map(request => {
    return (
      <FeedbackCard
        key={request.id}
        id={request.id}
        title={request.title}
        category={request.category}
        upvotes={request.upvotes}
        status={request.status}
        description={request.description}
      />
    )
  })

  if (sortedFeedbackCards.length <= 0) return <NoFeedbackSection />

  return (
    <div className="flex flex-col gap-y-4 px-4 py-6 md:px-0">
      {sortedFeedbackCards}
    </div>
  )
}
