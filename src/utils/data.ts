import { productRequests } from "shared/data"
import { FeedbackRequest } from "shared/types"

export const getComments = (feedbackId: number) => {
  const feedback = productRequests.filter(
    (feedback: FeedbackRequest) => feedback.id === feedbackId
  )

  // optionally access comments or return []
  return feedback[0]?.comments ?? []
}

export const getCommentCount = (feedbackId: number) => {
  const comments = getComments(feedbackId)
  let count = 0
  for (let comment of comments) {
    count += 1
    if (!comment.replies || comment.replies.length === 0) continue
    count += comment.replies.length
  }

  return count
}

export const getFeedback = (feedbackId: number) => {
  return productRequests.filter(
    (feedback: FeedbackRequest) => feedback.id === feedbackId
  )[0]
}

export const getFeedbacksByStatus = (
  feedbackStatus: string
): FeedbackRequest[] | [] => {
  // Try nullish coalescing operator
  return productRequests.filter(feedback => {
    return feedback.status === feedbackStatus
  })
}
