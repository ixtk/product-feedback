export interface User {
  username: string
  name: string
  image: string
}

export interface BaseComment {
  user: User
  content: string
}

export interface Comment {
  id: string
  content: string
  user: User
  replies?: CommentReply[]
}

export interface CommentReply extends Comment {
  replyingTo: string
}

export interface Feedback {
  id: string
  title: string
  category: string
  upvotes: number
  status: string
  description: string
}

export interface SortBy {
  field: string
  ascending: boolean
}

export interface FeedbackDetailed extends Feedback {
  comments?: Comment[]
}
