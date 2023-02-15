import { productRequests } from "shared/data"
import { Comment, Feedback, FeedbackDetailed, SortBy } from "shared/types"

export const getComments = (feedbackId: string): Comment[] | [] => {
  const feedback = productRequests.filter(
    (feedback: Feedback) => feedback.id === feedbackId
  )

  // optionally access comments or return []
  return feedback[0]?.comments ?? []
}

export const getCommentCount = (feedbackId: string) => {
  const comments = getComments(feedbackId)
  let count = 0
  for (let comment of comments) {
    count += 1
    if (!comment.replies || comment.replies.length === 0) continue
    count += comment.replies.length
  }

  return count
}

export const getFeedbackByCategories = (categories: string[]) => {
  if (categories.length === 0) return productRequests
  return productRequests.filter(request =>
    categories.includes(request.category)
  )
}

export const getFeedback = (feedbackId: string) => {
  return productRequests.filter(
    (feedback: Feedback) => feedback.id === feedbackId
  )[0]
}

export const getFeedbacksByStatus = (
  feedbackStatus: string
): Feedback[] | [] => {
  // Try nullish coalescing operator
  return productRequests.filter(feedback => {
    return feedback.status === feedbackStatus
  })
}

export const getRoadmapStatusCount = () => {
  const statusCountObj: Record<string, number> = {}
  for (const feedback of productRequests) {
    if (feedback.status in statusCountObj) {
      statusCountObj[feedback.status] += 1
    } else {
      statusCountObj[feedback.status] = 1
    }
  }

  const statusCountList = []
  for (const [status, count] of Object.entries(statusCountObj)) {
    if (status === "suggestion") continue
    statusCountList.push({
      status: status,
      feedbackCount: count
    })
  }

  return statusCountList
}

export const sortFeedbacks = (
  feedbacks: FeedbackDetailed[],
  sortBy: SortBy
) => {
  return feedbacks.sort((a, b) => {
    const attr = sortBy.field as keyof FeedbackDetailed
    if (attr === "comments") {
      const commentCountA = getCommentCount(a.id)
      const commentCountB = getCommentCount(b.id)

      if (commentCountA < commentCountB) return sortBy.ascending ? -1 : 1
      else if (commentCountA > commentCountB) return sortBy.ascending ? 1 : -1
    }

    if (a.upvotes < b.upvotes) return sortBy.ascending ? -1 : 1
    else if (a.upvotes > b.upvotes) return sortBy.ascending ? 1 : -1
    return 0
  })
}

export const getRandomId = () => {
  return Math.random().toString(36).slice(2, 12)
}
