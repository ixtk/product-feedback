import { Comment, Feedback, FeedbackDetailed, SortBy } from "shared/types"

export const getComments = (
  feedbacks: Feedback[],
  feedbackId: string
): Comment[] | [] => {
  const feedback = feedbacks.filter(
    (feedback: Feedback) => feedback.id === feedbackId
  )

  return feedback[0]?.comments ?? []
}

export const getCommentCount = (feedbacks: Feedback[], feedbackId: string) => {
  const comments = getComments(feedbacks, feedbackId)
  let count = 0
  for (let comment of comments) {
    count += 1
    if (!comment.replies || comment.replies.length === 0) continue
    count += comment.replies.length
  }

  return count
}

export const getFeedbackByCategories = (
  feedbacks: Feedback[],
  categories: string[]
) => {
  if (categories.length === 0) return feedbacks
  return feedbacks.filter(request => categories.includes(request.category))
}

export const getFeedback = (feedbacks: Feedback[], feedbackId: string) => {
  return feedbacks.filter((feedback: Feedback) => feedback.id === feedbackId)[0]
}

export const getFeedbacksByStatus = (
  feedbacks: Feedback[],
  feedbackStatus: string
): Feedback[] | [] => {
  // Try nullish coalescing operator
  return feedbacks.filter(feedback => {
    return feedback.status === feedbackStatus
  })
}

export const getRoadmapStatusCount = (feedbacks: Feedback[]) => {
  const statusCountObj: Record<string, number> = {}
  for (const feedback of feedbacks) {
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
      const commentCountA = getCommentCount(feedbacks, a.id)
      const commentCountB = getCommentCount(feedbacks, b.id)

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
