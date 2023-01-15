export interface User {
  username: string
  name: string
  image: string
}

export interface BaseComment {
  user: User
  content: string
}
