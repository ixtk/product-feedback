export interface User {
  username: string
  name: string
  image: string
}

export interface BaseComment {
  user: User
  content: string
}

export interface CommentReply {
  content: string
  user: User
  replyingTo: string
}

export interface Comment {
  id: number
  content: string
  user: User
  replies?: CommentReply[]
}

export interface FeedbackRequest {
  id: number
  title: string
  category: string
  upvotes: number
  status: string
  description: string
}

// export interface FeedbackRequestDetails extends FeedbackRequest {
//   comments?: Comment[]
// }
