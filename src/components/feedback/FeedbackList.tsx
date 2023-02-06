import { NoFeedbackSection } from "components/feedback/NoFeedbackSection"
import { productRequests } from "shared/data"
import { FeedbackCard } from "components/feedback/FeedbackCard"
import { Feedback, SortBy } from "shared/types"
import { sortFeedbacks } from "utils/data"

interface FeedbackListProps {
  selectedCategories: string[]
  sortBy: SortBy
}

export const FeedbackList = ({
  selectedCategories,
  sortBy
}: FeedbackListProps) => {
  const filterByCategory = (feedbacks: Feedback[]) => {
    if (selectedCategories.length === 1) return productRequests
    return feedbacks.filter(request =>
      selectedCategories.includes(request.category)
    )
  }

  const filteredFeedbacks = filterByCategory(productRequests)
  const sortedFeedbackCards = sortFeedbacks(filteredFeedbacks, sortBy).map(
    request => {
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
    }
  )

  if (sortedFeedbackCards.length <= 0) return <NoFeedbackSection />

  return (
    <div className="flex flex-col gap-y-4 px-4 py-6 md:px-0">
      {sortedFeedbackCards}
    </div>
  )
}
