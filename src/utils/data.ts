import { productRequests } from "shared/data"
import { FeedbackRequest } from "shared/types"
import { Comment } from "shared/types"

export const getComments = (feedbackId: number) => {
  const feedback = productRequests.filter(
    (feedback: FeedbackRequest) => feedback.id === feedbackId
  )

  return feedback[0]?.comments ?? []
}

export const getCommentCount = (comments: Comment[]) => {
  let count = 0

  for (let comment of comments) {
    count += 1
    if (!comment.replies || comment.replies.length === 0) continue
    count += comment.replies.length
  }

  return count
}
